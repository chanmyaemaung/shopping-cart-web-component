class CartItems extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = "";
    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table-container");
    const table = document.createElement("table");
    window.cart.items.forEach(({ id, name, price, quantity }, idx) => {
      const line_price = price * quantity;

      table.innerHTML += `
                <tr>
                    <td>${name}</td>
                    <td style="text-align: center;">
                        ${quantity}
                    </td>
                    <td style="text-align: right;">${line_price}</td>
                </tr>
            `;
    });
    tableContainer.appendChild(table);
    this.appendChild(tableContainer);

    const total = window.cart.items.reduce((total, { price, quantity }) => {
      return parseInt(total + price * quantity);
    }, 0);

    const footer = document.createElement("div");
    footer.innerHTML = `
        <table class="cart-footer">
            <tr>
                <td>Total: </td>
                <td style="text-align: right;">$${total}</td>
            </tr>
        </table>
    `;
    this.appendChild(footer);
  }
}

export default CartItems;
