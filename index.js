let cart = [];
let cartBtn = document.getElementById("cartBtn");

function addToCart(productName, price) {
  const product = { name: productName, price: price };
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartBtn.textContent = `Cart (${cart.length})`;
}
