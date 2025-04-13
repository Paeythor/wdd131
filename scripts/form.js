const yearContainer = document.getElementById('currentYear');
const modifiedContainer = document.getElementById('lastModified');
const today = new Date();
const modifiedDate = new Date(document.lastModified);
const products = [
    { id: "fc-1888", name: "flux capacitor", averageRating: 4.5 },
    { id: "fc-2050", name: "power laces", averageRating: 4.7 },
    { id: "fs-1987", name: "time circuits", averageRating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averageRating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averageRating: 5.0 }
];

const selectBox = document.getElementById("products");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.name} (Avg Rating: ${product.averageRating.toFixed(1)})`;
    selectBox.appendChild(option);
});

yearContainer.innerHTML = today.getFullYear();
modifiedContainer.innerHTML = `Last Modified: ${modifiedDate.toLocaleString()}`;

window.addEventListener("load", () => {
    let reviewCount = parseInt(localStorage.getItem("reviewCount") || "0", 10);
    localStorage.setItem("reviewCount", reviewCount + 1);
    console.log(`Reviews completed: ${reviewCount + 1}`);
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const checkboxes = document.querySelectorAll('input[name="features"]');
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        if (!isChecked) {
            alert("Please select at least one feature before submitting.");
        } else {
            let reviewCount = parseInt(localStorage.getItem("reviewCount") || "0", 10);
            localStorage.setItem("reviewCount", reviewCount + 1);
            window.location.assign("review.html");
        }
    });
});
