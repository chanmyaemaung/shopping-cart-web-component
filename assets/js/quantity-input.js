class QuantityInput extends HTMLElement {
  constructor() {
    super();

    this.cartItems = document.querySelector("cart-items");
    this.changeEvent = new Event("change", { bubbles: true });

    this.input = this.querySelector("input");
    this.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", this.onButtonClick.bind(this));
    });

    this.addEventListener("change", (event) => {
      const input = event.currentTarget.querySelector("input");
      this.cartItems.updateQuantity(input.dataset.index, this.input.value);
    });
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;

    event.target.name === "plus" ? this.input.stepUp() : this.input.stepDown();
    if (previousValue !== this.input.value) {
      this.input.dispatchEvent(this.changeEvent);
    }
  }
}

export default QuantityInput;
