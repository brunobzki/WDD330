import { getLocalStorage } from "./utils.mjs";

// Plantilla para cada elemento del carrito
function cartItemTemplate(item) {
  const newItem = `
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${item.Colors[0]?.ColorName || "No color specified"}</p>
      <p class="cart-card__quantity">qty: ${item.Quantity || 1}</p>
      <p class="cart-card__price">$${item.FinalPrice ? item.FinalPrice.toFixed(2) : "0.00"}</p>
    </li>`;
  return newItem;
}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key; // Clave del localStorage
    this.parentSelector = parentSelector; // Contenedor del carrito
    this.cartItems = this.getCartContents(); // Recuperar el carrito
  }

  // Obtener los contenidos del carrito desde localStorage
  getCartContents() {
    return getLocalStorage(this.key) || [];
  }

  // Renderizar el contenido del carrito
  renderCartContents() {
    const cartItems = this.cartItems;

    const htmlItems = cartItems.map((item) => cartItemTemplate(item));


    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");

   
    this.updateCartTotal();
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

      console.log(
        `Calculando: ${item.Name || "Producto sin nombre"} - Precio: $${itemPrice} - Cantidad: ${itemQuantity}`
      );
      total += itemPrice * itemQuantity;
    });

    console.log("Total calculado:", total);
    return total;
  }

  
//  alangonzalezweek2 
updateCartTotal() {
  const total = this.calculateCartTotal();
  const cartFooter = document.querySelector(".cart-footer");
  const cartTotalElement = document.querySelector(".cart-total");

  if (this.cartItems.length > 0) {
   
    cartFooter.classList.remove("hide");
    console.log("Mostrando el footer del carrito.");
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
  } else {
   
    console.log("El carrito está vacío. Ocultando el footer.");
    cartFooter.classList.add("hide");
  }

  console.log("Actualizando total en el DOM:", total);
}
}
