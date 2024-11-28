import { renderListWithTemplate } from "./utils.mjs";



function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="/product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Images.PrimaryMedium}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">${product.FinalPrice}</p></a>
</li>`;
}

export default class ProductListing {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    console.log('ProductListing init called'); // Depuración
    const list = await this.dataSource.getData();
    this.renderList(list);
  }
  
  renderList(list) {
    console.log('Rendering list:', list); // Asegúrate de que no esté vacío
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }


}