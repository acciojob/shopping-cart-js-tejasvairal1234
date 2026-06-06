const itemInput = document.getElementById("item");
const priceInput = document.getElementById("price");
const addBtn = document.querySelector('input[type="button"]');
const cart = document.getElementById("cart");

// Load saved cart
let items = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    cart.innerHTML = "";

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rs.${item.price}`;
        cart.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {
    const name = itemInput.value.trim();
    const price = priceInput.value.trim();

    if (!name || !price) return;

    items = [{
        name,
        price
    }];

    localStorage.setItem("cart", JSON.stringify(items));

    renderCart();

    itemInput.value = "";
    priceInput.value = "";
});

renderCart();