import { AddToCartButton } from "../common/AddToCartButton";
import { Button } from "../common/Button";
import { RoomDetails } from "./RoomDetails";
import { RoomsList } from "./RoomsList";
import { AddToCartButton } from "../common/AddToCartButton";

export function RoomsListItem (room) {

    const li = document.createElement('li');

    li.innerHTML = `
        <h4>${room.name}</h4>
        <p>
            <strong>${room.price.toFixed(2)}</strong>
        </p>

    `;

    li.append(
        Button({
            text: 'Read More',
            classes: 'btn btn-outline-light text-dark',
            onClick: () => {
                const customEvent = new CustomEvent('navigate', {
                    detail: () => RoomDetails(room.id)
                });
                document.body.dispatchEvent(customEvent);
            }
        })
        );
    li.append(AddToCartButton(room));
    return li;
}