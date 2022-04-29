import { cartManager } from "../cart/cart-manager";
import { Button } from "../common/Button";

export function Home() {
  const section = document.createElement("section");
  const img = document.createElement("img");
  const br = document.createElement("br");
  img.src = require("../assets/img.jpg");
  img.style.width = "20vw";
  img.style.marginBottom = "200px";
  img.style.marginTop = "20px";
  section.style.textAlign = "center";

  section.innerHTML = `
        <h2 class="text-center">Witaj w IT SPA!</h2>
        <h3 class="text-center">Każdy programista lubi u nas odpoczywać!</h3><br/>
        <strong>Przyjazd</strong> <input type = "date" id="date-of-arrival" />
        <strong>Wyjazd</strong> <input type = "date" id="date-of-departure" />
    `;

  section.append(
    Button({
      text: "Zapisz",
      classes: "btn btn-outline-light text-dark",
      onClick: () => {
        const arrivalInput = document.getElementById("date-of-arrival");
        const departureInput = document.getElementById("date-of-departure");

        if (new Date(arrivalInput.value) < new Date().setHours(0)) {
          alert(`Wprowadzony czas pobytu jest nieprawidłowy`);
          arrivalInput.value = new Date();
        } else if (
          new Date(arrivalInput.value) >= new Date(departureInput.value)
        ) {
          alert(`Data przyjazdu powinna być wcześniejsza od daty wyjazdu.`);
          departureInput.value = new Date();
        } else {
          cartManager.saveArrivalDate(arrivalInput.value)
          cartManager.saveDepartureDate(departureInput.value) 
          alert("Po wyborze daty przyjazdu i wyjazdu, przeglądaj pokoje.")
        }
      },
    })
  );

  section.append(br);
  section.append(img);

  return section;
}
