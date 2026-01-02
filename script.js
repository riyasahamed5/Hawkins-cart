const cartBtn = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeIcon = document.querySelector("#close-icon");
const cartBox = document.querySelector(".cart-box");

cartBtn.addEventListener("click",()=>{
    cart.classList.toggle("cart-active");
})

closeIcon.addEventListener("click",()=>{
    cart.classList.toggle("cart-active");

})

document.addEventListener("DOMContentLoaded",loadProduct);

// function loadproduct(){
//    loadContent();
// }

function loadProduct(){

    let cartRemove= document.querySelectorAll(".cart-remove");
    cartRemove.forEach((btn)=>{
        btn.addEventListener("click",removeItem)
    });

    let quantityEl= document.querySelectorAll(".cart-quantity");
    quantityEl.forEach((input)=>{
        input.addEventListener("change",changeQty);
    });

    let addToCartBtn = document.querySelectorAll(".add-to-cart");
    addToCartBtn.forEach((btn)=>{
        btn.addEventListener("click",addCart);
    })
    
}


function removeItem(){
    this.parentElement.remove(); 
}

function changeQty(){
    if (isNaN(this.value)|| this.value<1){
        this.value=1;
    }
}

function addCart(){
    let product = this.parentElement;
    let title= product.querySelector(".prod-title").innerHTML;
    let price = product.querySelector(".prod-price").innerHTML;
    let image = product.querySelector(".electronic-prod-img").src;

    console.log(title,price,image);
    let newProductItem = createCartItem(title,price,image);
    let singleElement = document.createElement("div");
    singleElement.innerHTML = newProductItem;
    const cartContent = document.querySelector(".cart-content");
    cartContent.append(singleElement);

    loadProduct();
   
}

function createCartItem(title,price,image){
            return `<div class="cart-box">
                      <img src="${image}" class="cart-img"/>
                      <div class="detail-box">
                          <h6 >${title}</h6>
                          <p class="cart-price">${price}</p>
                          <p class="cart-amt">${price}</p>
                          <input type="number" class="cart-quantity" value="1">
                      </div>
                    <button class="btn btn-danger cart-remove mr-3">Delete</button>
                 </div>`
}
