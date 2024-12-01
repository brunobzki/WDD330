import{r as c,l as o}from"./utils-tUWCcRRk.js";import{E as l}from"./ProductData-DtkXwhN3.js";function d(e){return`<li class="product-card">
  <a href="/product_pages/index.html?product=${e.Id}">
  <img
    src="${e.Images.PrimaryMedium}"
    alt="Image of ${e.Name}"
  />
  <h3 class="card__brand">${e.Brand.Name}</h3>
  <h2 class="card__name">${e.Name}</h2>
  <p class="product-card__price">${e.FinalPrice}</p></a>
</li>`}class m{constructor(t,n,r){this.category=t,this.dataSource=n,this.listElement=r}async init(){console.log("ProductListing init called");const t=await this.dataSource.getData();this.renderList(t)}renderList(t){console.log("Rendering list:",t),c(d,this.listElement,t)}}console.log("Initializing main.js");o();const a=new l("tents");console.log("ProductData instance created:",a);const s=document.querySelector(".product-list");console.log("Element selected:",s);const i=new m("Tents",a,s);console.log("ProductListing instance created:",i);i.init();
