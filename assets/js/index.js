import ProductElement from "./product.js";
import CartItems from "./cart-items.js";

// Global Cart Object
window.cart = {
    items: [],
}

customElements.define("product-element", ProductElement);
customElements.define("cart-items", CartItems)