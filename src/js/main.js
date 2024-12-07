import { loadHeaderFooter,getParam } from "./utils.mjs";
import ExternalServices from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
console.log("Initializing main.js"); // Depuración
loadHeaderFooter();

const category = getParam('category');
const dataSource = new ExternalServices(category);

console.log("ProductData instance created:", dataSource); // Depuración
const element = document.querySelector(".product-list");
console.log("Element selected:", element); // Depuración
const listing = new ProductListing(category, dataSource, element);
console.log("ProductListing instance created:", listing); // Depuración
listing.init();
