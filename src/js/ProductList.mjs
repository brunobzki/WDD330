import ProductData from "./ProductData.mjs";

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        const products = await this.dataSource.getData();
        this.renderProductList(products);
    }
    renderProductList(products) {
        const list = document.querySelector(this.listElement);
        products.forEach((product) => {
            const productCard = document.createElement("li");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
            <a href="product_pages/?product=${product.Id}">
              <img src="${product.Image}" alt="${product.NameWithoutBrand}"/>
              <h3 class="card__brand">${product.Brand.Name}</h3>
              <h2 class="card__name">${product.NameWithoutBrand}</h2>
              <p class="product-card__price">$${product.FinalPrice}</p></a
            >
            `;
            list.appendChild(productCard);

        });
    }
}