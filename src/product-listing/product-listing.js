import ProductData from '../js/ProductData.mjs';
import ProductList from '../js/ProductList.mjs';
import { loadHeaderFooter, getParam } from '../js/utils.mjs';

loadHeaderFooter();

const category = getParam('category');

console.log(category)

if (category) {
  const dataSource = new ProductData();
  const listElement = document.querySelector('.product-list');
  const myList = new ProductList(category, dataSource, listElement);
  myList.init();
} else {
  console.error("Category parameter is missing in the URL.");
}

console.log(listing)
console.log("Hola")
console.log(dataSource)
listing.init();