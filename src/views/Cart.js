import { cartManager } from "../cart/cart-manager";
import { RemoveFromCartButton } from "../common/RemoveFromCartButton copy";

export function Cart() {
  const section = document.createElement("section");

  section.innerHTML = `
        <h2>Cart</h2>
        <p>Oto zawartość Twojego koszyka.</p>
    `;

  const dates = document.createElement("section");
  const dateOfArrival = cartManager.getArrivalDate();
  const dateOfDeparture = cartManager.getDepartureDate();
  const stayDays =
    (Date.parse(dateOfDeparture) - Date.parse(dateOfArrival)) / 86400000;
  if (isNaN(stayDays) == true) {
      console.log(stayDays)
  }
  

  if (dateOfArrival == "" || dateOfDeparture == "" || dateOfArrival == null || dateOfDeparture == null) {
    section.innerHTML = "Wybierz datę pobytu.";
  } else {
    section.innerHTML = `<strong>Data przyjazdu: ${dateOfArrival} Data wyjazdu: ${dateOfDeparture} Planowany pobyt: ${stayDays} dni.</strong>`;
  }

  const table = document.createElement("table");
  table.classList.add("table");

  const tableHead = document.createElement("tr");
  tableHead.innerHTML = `
        <th>Name</th>
        <th>Cena za dzień</th>
        <th>Koszt pobytu</th>
        <th>Usuń</th>
        <th></th>
    `;

  const tableRows = cartManager.getAllItems().map((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} PLN</td>
            <td>${(item.price * stayDays).toFixed(2)}  
              PLN</td>
            <td></td>
        `;

    tr.lastElementChild.append(RemoveFromCartButton(item));

    return tr;
  });

  const totalPrice = (cartManager.getTotal() * stayDays).toFixed(2);

  const tableFooter = document.createElement("tr");
  tableFooter.innerHTML = `
        <td></td>
       
        <td>
        <td>
            <strong>${totalPrice} PLN</strong>
        </td>
        <td></td>
    `;

  table.append(tableHead, ...tableRows, tableFooter);
  section.append(dates, table);

  return section;
}
