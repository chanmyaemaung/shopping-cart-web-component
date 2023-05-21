class CartItems extends HTMLElement {
  constructor() {
    super();
  }

  updateQuantity(idx, value) {
    window.cart.items[idx].quantity = value;
    this.render();
  }

  render() {
    this.innerHTML = "";
    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table-container");
    const table = document.createElement("table");
    window.cart.items.forEach(({ name, price, quantity }, idx) => {
      const line_price = price * quantity;

      if (quantity > 0) {
        table.innerHTML += `
                  <tr>
                      <td>${name}</td>
                      <td style="text-align: center;">
                          <quantity-input class="quantity">
                            <button class="quantity__button" name="minus" type="button">-</button>  
                            <input type="number" min="0" value="${quantity}" id="${idx}" data-index="${idx}" />                      
                            <button class="quantity__button" name="plus" type="button">+</button>                        
                          </quantity-input>
                      </td>
                      <td style="text-align: right;">${line_price}</td>
                  </tr>
              `;
        tableContainer.appendChild(table);
        this.appendChild(tableContainer);
      }
    });

    const footer = document.createElement("div");
    const total = window.cart.items.reduce((total, { price, quantity }) => {
      return parseInt(total + price * quantity);
    }, 0);

    if (total > 0) {
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
}

export default CartItems;
