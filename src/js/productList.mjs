
function productCardTemplate(product) {
    return `<li class="product-card">
      <a href="product_pages/index.html?product=">
        <img src="" alt="Image of ">
        <h3 class="card__brand"></h3>
        <h2 class="card__name"></h2>
        <p class="product-card__price">$</p>
      </a>
    </li>`
  }
export default class ProductListing {
    constructor(category,dataSource,listElement) {
        this.category = category;
        this.path = `../json/${this.category}.json`;
        this.dataSource = dataSource;
        this.path = `../json/${this.dataSource}.json`;
        this.listElement = listElement;
        this.path = `../json/${this.listElement}.json`;}
    async init() {
            const list = await this.dataSource.getData();
          }
}