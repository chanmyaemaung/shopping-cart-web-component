import ProductElement from "./product.js";

// Global Cart Object
window.cart = {
    items: [],
}

customElements.define("product-element", ProductElement);