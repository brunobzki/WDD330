import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";



loadHeaderFooter();



const cart = new ShoppingCart("so-cart", ".product-list");

function checkCartStatus() {
    const cart = getLocalStorage("so-cart");
  
    if (!cart || cart.length === 0) {
      // El carrito está vacío, redirigir al index o mostrar un mensaje
      window.location.href = `${window.location.origin}/cart/index.html`;
    }
  }
  
  checkCartStatus();

cart.renderCartContents();
