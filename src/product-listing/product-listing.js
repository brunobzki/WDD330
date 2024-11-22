import { loadHeaderFooter } from "../js/utils.mjs";
import ProductData from "../js/ProductData.mjs"
import ProductList from "../js/ProductList.mjs";

loadHeaderFooter();


// Tiendas
const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);


console.log("Hola!")
console.log(listing)
listing.init();