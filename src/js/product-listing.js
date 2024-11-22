import ProductData from "./ProductData.mjs";
import ProductList from "./productList.mjs";


const category = getParams ("category")
const srcData = new ProductData("")
const element = document.querySelector(".product-list");
const listing = new ProductList(category, srcData, element);

listing.init();