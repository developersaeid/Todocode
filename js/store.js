const container = document.querySelector(".container");
const productIdEl = document.querySelector("#product-id");
const searchBtn = document.querySelector("#search-id");

//all product
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((data) => {
    data.map((product) => {
    container.innerHTML += `<div class="card bg-white">
            <img class="mt-3 p-3" src="${product.image}">
            <h3 class="mt-3">${product.title.slice(0, 17)}</h3>
            <span class="p-2">${product.description.slice(0, 50)}...</span>
            <h6 class="green-txt text-end">${product.price} $</h6>
            <button class="btn btn-primary" onclick="addToCart('${product.title}')">افزودن به سبد خرید</button>
        </div>`;
        });
    });

//product search bar 
searchBtn.addEventListener("click", async () => {
let productId = productIdEl.value;
if (productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then((data) => {
        container.innerHTML =`<div class="row product-position">
            <div class="card-product shadow col-12 col-lg-6 col-md-6 bg-white">
                <img class="img-marg-top mx-5 " src="${data.image}">
            </div>
            <div class="product-details mx-2 col-12 col-lg-6 col-md-6 ">
                <h3 class="mb-5 fs-4 just">${data.title}</h3>
                <span class="mt-5 mb-5">${data.description}...</span>
                <h6 class="green-txt mt-4">${data.price} $</h6>
                <button class="btn btn-primary mt-3 " onclick="addToCart('${data.title}')">افزودن به سبد خرید</button>
            </div>
        </div>`;
        productIdEl.value=''
        })
    .catch(error=>console.log(error))
    }
});

// local storage and add to basket
let cartCount = 0;
function addToCart(productTitle) {
    cartCount++;
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.innerText = cartCount;
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(productTitle);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    Swal.fire({
        title: "به سبد خرید اضافه شد!",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        confirmButtonText: "ادامه خرید"
    });
}