import {cartManager} from "../cart/cart-manager";
import {Button} from "../common/Button";

export function Home() {
    const section = document.createElement('section');
    const img = document.createElement('img');
    img.src = require('../assets/support.png');
    img.style.width = '50vw';

    section.innerHTML = `
        <h2>Home</h2>
        <p>Witaj w IT SPA. Każdy programista lubi u nas odpoczywać.</p>
        Kiedy przyjeżdżasz? <input id="date-of-arrival" name="date-of-arrival"/><br/>
    `;

    section.append(Button({
            text: 'Zapisz',
            onClick: () => {
                const arrivalInput = document.getElementById("date-of-arrival")
                cartManager.saveArrivalDate(arrivalInput.value);
            }
        })
    )

    section.append(img);

    return section;
}
