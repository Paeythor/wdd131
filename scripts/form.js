const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

window.addEventListener("DOMContentLoaded", () => {
  // Populate product dropdown
  const selectElement = document.getElementById("productName");
  if (selectElement) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = `${product.name} (Rating: ${product.averagerating})`;
      selectElement.appendChild(option);
    });
  }

  // Footer updates
  const yearSpan = document.getElementById("currentyear");
  const lastModifiedSpan = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }
});

// LocalStorage Review Counter (used on review.html)
function updateReviewCounter() {
  let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);
}