import ProductData from "./ProductData.mjs";
import ProductList from "./productList.mjs";



const srcData = new ProductData("tents")
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", srcData, element);

listing.init();