import { Button } from "./Button";
import { cartManager } from "../cart/cart-manager";

export function AddToCartButton(item) {

    return Button({
        text: 'Add to Cart',
        classes: 'btn btn-outline-light text-dark',
        onClick: () => {
            cartManager.addItem(item);
            
        }
    });
    
}
