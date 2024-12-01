import{g as c,s as n,l}from"./utils-tUWCcRRk.js";function i(a){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${a.Images.PrimarySmall}"
      alt="${a.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${a.Name}</h2>
  </a>
  <p class="cart-card__color">${a.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${a.Quantity||1}</p>
  <p class="cart-card__price">$${a.FinalPrice}</p>
  <!-- Botón de eliminación -->
  <button class="remove-item" data-id="${a.Id}" aria-label="Remove ${a.Name}">X</button>
</li>`}class m{constructor(e,t){this.key=e,this.parentSelector=t,this.cartItems=this.getCartContents()}getCartContents(){return c(this.key)||[]}renderCartContents(){const t=this.cartItems.map(r=>i(r));document.querySelector(this.parentSelector).innerHTML=t.join(""),this.updateCartTotal(),this.addRemoveItemListeners()}calculateCartTotal(){let e=0;return!this.cartItems||!Array.isArray(this.cartItems)?(console.error("No se encontraron elementos en el carrito o el formato no es válido."),e):(this.cartItems.forEach((t,r)=>{const o=parseFloat(t.FinalPrice)||0,s=parseInt(t.Quantity,10)||1;if(isNaN(o)||isNaN(s)){console.warn(`El producto en la posición ${r} tiene datos inválidos:`,t);return}e+=o*s}),console.log("Total calculado:",e),e)}updateCartTotal(){const e=this.calculateCartTotal(),t=document.querySelector(".cart-total");t&&(t.textContent=`Total: $${e.toFixed(2)}`);const r=document.querySelector(".cart-footer");this.cartItems.length===0?r.classList.add("hide"):r.classList.remove("hide")}removeItem(e){this.cartItems=this.cartItems.filter(t=>t.Id!==e),n(this.key,this.cartItems),console.log("Producto eliminado. Nuevos elementos:",this.cartItems),this.renderCartContents()}addRemoveItemListeners(){document.querySelectorAll(".remove-item").forEach(t=>{t.addEventListener("click",()=>{const r=t.getAttribute("data-id");console.log(`Removing item with ID: ${r}`),this.removeItem(r)})})}}l();const d=new m("so-cart",".product-list");d.renderCartContents();
