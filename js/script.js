let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + ' added to cart!');
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    if (!cartItems) return;

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>`;
        total += item.price;
    });
    totalPriceEl.innerText = 'Total: $' + total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function placeOrder() {
    alert('Order placed successfully!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'index.html';
}

// Display cart on load
displayCart();
