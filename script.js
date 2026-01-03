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
        input.addEventListener("click",changeQty);
    });

    let addToCartBtn = document.querySelectorAll(".add-to-cart");
    addToCartBtn.forEach((btn)=>{
        btn.addEventListener("click",addCart);
    })

    updateTotalPrice();
    
}


function removeItem(){
    let title1 = this.parentElement.querySelector(".prod-title");
    cartProductList= cartProductList.filter((el)=>el.title1!=title1);
    this.parentElement.remove();
    loadProduct();

}

function changeQty(){
    if (isNaN(this.value)|| this.value<1){
        this.value=1;
    }
    loadProduct();
}





let cartProductList=[];

function addCart(){
    let product = this.parentElement;
    let title = product.querySelector(".prod-title").textContent;
    let price = product.querySelector(".prod-price").textContent;
    let image = product.querySelector(".electronic-prod-img").src;
    console.log(title,price,image);

    let CartProductSingle={title,price,image};

//checking if the product is already in the cart
// Increasing count
    if(cartProductList.find((el)=>el.title==CartProductSingle.title)){
        alert("Product already basket la Irukku");
        return;
    }
 // Add to array (cartProductList)   
    else{
         cartProductList.push(CartProductSingle);

    }
 // Add to cart UI
    let newProductItem = createCartItem(title,price,image);
    let singleElement = document.createElement("div");
    singleElement.innerHTML = newProductItem;
    let cartBasket = document.querySelector(".cart-content");
    cartBasket.append(singleElement);
    loadProduct();
   
}

//updating Total Price





// create New Cart Item
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

function updateTotalPrice(){

    const cartBoxValues = document.querySelectorAll(".cart-box");
    const totalPrice = document.querySelector(".total-price");
    let total=0;

    cartBoxValues.forEach(prod=>{
        let itemPrice = prod.querySelector(".cart-price");
        console.log(itemPrice);
        let itemPriceInt= parseInt(itemPrice.innerText.replace("Rs.",""));
        let quantity  = prod.querySelector(".cart-quantity").value;
        total+=(itemPriceInt*quantity);
        prod.querySelector(".cart-amt").innerText="Rs."+itemPriceInt*quantity;
    });     
        totalPrice.innerHTML="Rs."+total;
        console.log(totalPrice.textContent);
   

}