//your code here
const itemInput = document.getElementById("item");
const addBtn = document.getElementById("addBtn");
const cartList = document.getElementById("cartList");

// Load cart from localStorage or initialize empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display items
function renderCart() {
    cartList.innerHTML = "";

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}

// Add item to cart
addBtn.addEventListener("click", () => {
    const item = itemInput.value.trim();

    if (item) {
        cart.push(item);

        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        renderCart();
        itemInput.value = "";
    }
});

// Initial render when page loads
renderCart();