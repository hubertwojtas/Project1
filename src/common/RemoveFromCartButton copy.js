import { Button } from "./Button";
import { cartManager } from "../cart/cart-manager";
import { Cart } from "../views/Cart";

export function RemoveFromCartButton(item) {

    return Button({
        text: '🗑️',
        classes: 'btn btn-outline-light text-dark',
        onClick: () => {
            cartManager.removeItem(item);
            
            const customEvent = new CustomEvent('navigate', {
                detail: Cart
            });
            document.body.dispatchEvent(customEvent);
        }
    });
    
}
