import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./checkoutProcess.mjs";
console.log(CheckoutProcess);
loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart", ".checkout-summary");
console.log(CheckoutProcess);
myCheckout.init();

document
  .querySelector("#zip")
  .addEventListener("blur", myCheckout.calculateOrdertotal.bind(myCheckout));
// listening for click on the button
document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  myCheckout.checkout();
});
