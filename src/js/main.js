import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
console.log('Initializing main.js'); // Depuración
loadHeaderFooter();

const dataSource = new ProductData("tents");

console.log('ProductData instance created:', dataSource); // Depuración
const element = document.querySelector(".product-list");
console.log('Element selected:', element); // Depuración
const listing = new ProductListing("Tents", dataSource, element);
console.log('ProductListing instance created:', listing); // Depuración
listing.init();