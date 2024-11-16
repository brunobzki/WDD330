import { setLocalStorage } from "./utils.mjs";

const productDetailsTemplate = (product) => `
<div class="product-details">
  <h2 class="product-name">${product.Name}</h2>
  <p class="product-price">${product.Price}</p>
  <p class="product-description">${product.Description}</p>
</div>
`;

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    const product = await this.dataSource.findProductById(this.productId);
    console.log(product);

    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails("main");
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }
  addToCart() {
    setLocalStorage("so-cart", this.product);
  }
  renderProductDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
      "afterBegin",
      productDetailsTemplate(this.product)
    );
  }
}