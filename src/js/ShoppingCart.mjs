import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key; 
    this.parentSelector = parentSelector; 
    this.cartItems = this.getCartContents(); 
  }

  getCartContents() {
    return getLocalStorage(this.key) || [];
  }

  renderCartContents() {
    const cartItems = this.cartItems;

    const htmlItems = cartItems.map((item) => cartItemTemplate(item));

    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");

 
    this.updateCartTotal();

   
    this.addRemoveItemListeners();
  }

  calculateCartTotal() {
    let total = 0;

    if (!this.cartItems || !Array.isArray(this.cartItems)) {
      console.error("No se encontraron elementos en el carrito o el formato no es válido.");
      return total;
    }

    this.cartItems.forEach((item, index) => {
      const itemPrice = parseFloat(item.FinalPrice) || 0;
      const itemQuantity = parseInt(item.Quantity, 10) || 1;

      if (isNaN(itemPrice) || isNaN(itemQuantity)) {
        console.warn(`El producto en la posición ${index} tiene datos inválidos:`, item);
        return;
      }

      total += itemPrice * itemQuantity;
    });

    console.log("Total calculado:", total);
    return total;
  }

  updateCartTotal() {
    const total = this.calculateCartTotal();
    const cartTotalElement = document.querySelector(".cart-total");

    if (cartTotalElement) {
      cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    
    const cartFooter = document.querySelector(".cart-footer");
    if (this.cartItems.length === 0) {
      cartFooter.classList.add("hide");
    } else {
      cartFooter.classList.remove("hide");
    }
  }
// alan gonzalez week 3
  removeItem(itemId) {
    this.cartItems = this.cartItems.filter((item) => item.Id !== itemId);

    setLocalStorage(this.key, this.cartItems);

    console.log(`Producto eliminado. Nuevos elementos:`, this.cartItems);

    this.renderCartContents(); 
  }

  addRemoveItemListeners() {
    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const itemId = button.getAttribute("data-id");
        console.log(`Removing item with ID: ${itemId}`);
        this.removeItem(itemId);
      });
    });
  }
}
