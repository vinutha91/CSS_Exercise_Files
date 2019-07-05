var budget;
var products = [];
var myCart = [];
var cartValue = 0;

document.getElementById('cartValue').innerHTML = 'Cart Value ' + cartValue;

function getBudget() {

    budget = prompt('What is your budget?');
    budget = Number(budget);
    document.getElementById('budget').innerHTML = `My budget is ${budget}`
}

function getProducts() {
    // Fetch the products from an API
    products = [
        {
            name: 'Pixel',
            price: '50000',
            image: 'phone.png'
        },
        {
            name: 'Nokia',
            price: '30000',
            image: 'phone.png'
        },
        {
            name: 'Samsung',
            price: '70000',
            image: 'phone.png'
        },
        {
            name: 'iPhone',
            price: '90000',
            image: 'phone.png'
        },
        {
            name: 'Windows',
            price: '20000',
            image: 'phone.png'
        }
    ];

    renderProductsHTML(products);
}

function renderProductsHTML(allProducts) {
    allProducts.forEach(function(product, index) {
        generateProductHTML(product, index);
    });
}

function generateProductHTML(product, index) {
    var productHTML = `
        <div id="product${index}">
            <img src="phone.png" class="product-image">
            <p>${product.name}</p>
            <p>Rs. ${product.price}</p>
            <button onclick="addToCart(${index})">Add to cart</button>
        </div>
    `;
    
    document.getElementById('products').innerHTML += productHTML;
}

function addToCart(productIndex) {
    // myCart.push(products[productIndex]);

    calculateCartValue(products[productIndex].price);

    renderCart(products[productIndex]);
}

function renderCart(product) {
    var productHTML = `
        <div id="product">
            <img src="phone.png" class="product-image">
            <p>${product.name}</p>
            <p>Rs. ${product.price}</p>
        </div>
    `;

    document.getElementById('myCart').innerHTML += productHTML
}

function calculateCartValue(price) {
    cartValue += Number(price);
    document.getElementById('cartValue').innerHTML = 'Cart Value ' + cartValue;

    compareWithBudget(cartValue);
}

function compareWithBudget(cartValue) {
    if (cartValue > budget) {
        document.getElementById('purchase').setAttribute('disabled', true);
    } else {
        document.getElementById('purchase').removeAttribute('disabled');
    }
}