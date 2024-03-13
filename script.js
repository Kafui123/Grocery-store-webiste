// Sample product data (replace with actual product data)
const products = [
    { id: 1, name: 'Apples', price: 1.99 },
    { id: 2, name: 'Bananas', price: 0.99 },
    // Add more product data as needed
];

// Function to display products on the webpage
function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="images/${product.name.toLowerCase()}.jpg" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)} per pound</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
}

// Function to add a product to the shopping cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItems = document.getElementById('cartItems');
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    }
}

// Function to handle checkout process
document.getElementById('checkoutBtn').addEventListener('click', function() {
    const cartItems = document.querySelectorAll('#cartItems li');
    let totalPrice = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.textContent.split('-')[1].trim().substring(1));
        totalPrice += price;
    });
    alert(`Total Price: $${totalPrice.toFixed(2)}`);
});

// Display initial product listings
displayProducts();
