class ProductElement extends HTMLElement {
  constructor() {
    super();

    this.cartItems = document.querySelector("cart-items");

    this.image = this.getAttribute("image");
    this.name = this.getAttribute("name");
    this.id = this.getAttribute("id");
    this.price = this.getAttribute("price");

    this.innerHTML = `
        <div class="image-container">
            <img src="${this.image}" alt="${this.name}" class="product-image" />
        </div>
        <h2>${this.name}</h2>
    `;

    const button = document.createElement("button");
    button.innerHTML = "Add to cart";
    button.addEventListener("click", this.addToCart.bind(this));
    this.appendChild(button);
  }

  addToCart() {
    // Create item object
    const itemObj = {
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: 1,
    };

    // Check if item is already in cart
    const item_in_cart = window.cart.items.find(
      (item) => item.id === itemObj.id
    );

    // If item is already in cart, increase quantity
    item_in_cart ? item_in_cart.quantity++ : window.cart.items.push(itemObj);
    
    // Render cart items
    this.cartItems.render();
  }
}

export default ProductElement;
