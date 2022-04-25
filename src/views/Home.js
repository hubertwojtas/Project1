import { cartManager } from "../cart/cart-manager";
import { Button } from "../common/Button";

export function Home() {
  const section = document.createElement("section");
  const img = document.createElement("img");
  img.src = require("../assets/support.png");
  img.style.width = "50vw";
  img.style.position = "right";


  section.innerHTML = `
        <h2 class="text-center">Witaj w IT SPA!</h2>
        <h3 class="text-center">Każdy programista lubi u nas odpoczywać!</h3><br/>
        Przyjazd <input type = "date" id="date-of-arrival" />
        Wyjazd <input type = "date" id="date-of-departure" /><br/><br/>
    `;
  
  section.append(
    Button({
      text: "Zapisz",
      classes:"btn btn-outline-light text-dark",
      onClick: () => {
        const arrivalInput = document.getElementById("date-of-arrival");
        const departureInput = document.getElementById("date-of-departure");

        if (new Date(arrivalInput.value) < new Date().setHours(0)) {
          alert(`Wprowadzony czas pobytu jest nieprawidłowy`);
          arrivalInput.value = new Date();
        } else if (new Date(arrivalInput.value) >= new Date(departureInput.value)) {
          alert(`Data przyjazdu powinna być wcześniejsza od daty wyjazdu.`);
          departureInput.value = new Date();
        } else {
        cartManager.saveArrivalDate(arrivalInput.value);
        cartManager.saveDepartureDate(departureInput.value);
            } 
      },
    })
  );

section.append(img);

return section;




}
