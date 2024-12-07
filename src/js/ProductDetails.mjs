import { setLocalStorage, getLocalStorage } from "./utils.mjs";

function productDetailsTemplate(product) {
  const extraImages = product.Images.ExtraImages?.map(
    (image) => `<div class="carousel__item"><img src="${image.Src}" alt="${image.Title}" /></div>`
  ).join("") || ""; 

  return `<section class="product-detail">
    <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <div class="carousel">
      <div class="carousel__container">
        <div class="carousel__item active"> <!-- Primera imagen activa -->
          <img
            src="${product.Images.PrimaryLarge}"
            alt="${product.NameWithoutBrand}"
          />
        </div>
        ${extraImages}
      </div>
      <button class="carousel__button carousel__button--prev">&lt;</button>
      <button class="carousel__button carousel__button--next">&gt;</button>
    </div>
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">${product.DescriptionHtmlSimple}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>
  </section>`;
}

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // once we have the product details we can render out the HTML
    this.renderProductDetails("main");
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
      new Carousel(".carousel");
  }
  addToCart() {
    let cartContents = getLocalStorage("so-cart");
    //check to see if there was anything there
    if (!cartContents) {
      cartContents = [];
    }
    // then add the current product to the list
    cartContents.push(this.product);
    setLocalStorage("so-cart", cartContents);
  }
  renderProductDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
      "afterBegin",
      productDetailsTemplate(this.product)
    );
  }
}  
  class Carousel {
    constructor(containerSelector) {
      this.container = document.querySelector(containerSelector);
      this.items = this.container.querySelectorAll(".carousel__item");
      this.currentIndex = 0;
  
      this.prevButton = this.container.querySelector(".carousel__button--prev");
      this.nextButton = this.container.querySelector(".carousel__button--next");
  
      this.prevButton.addEventListener("click", () => this.showPrevious());
      this.nextButton.addEventListener("click", () => this.showNext());
    }
  
    showPrevious() {
      this.items[this.currentIndex].classList.remove("active");
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.items[this.currentIndex].classList.add("active");
    }
  
    showNext() {
      this.items[this.currentIndex].classList.remove("active");
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.items[this.currentIndex].classList.add("active");
    }
  }


