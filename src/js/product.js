import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { setLocalStorage, getParam } from "./utils.mjs";

const dataSource = new ProductData("tents");
const productId = getParam('product');
const product = new ProductDetails(productId, dataSource)


product.init()
/*
function addProductToCart(product) {

  let cart = getLocalStorage("so-cart") || [];

    if (!Array.isArray(cart)) {
      cart = [];
    } 

  cart.push(product);
  setLocalStorage("so-cart", cart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  console.log(JSON.parse(localStorage.getItem("so-cart")));

  addProductToCart(product);
}


// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
*/ 