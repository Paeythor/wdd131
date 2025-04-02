document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        // Toggle navigation menu on hamburger click
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Update last modified date
    const lastModifiedElement = document.getElementById("lastModifiedDate");
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        lastModifiedElement.textContent = lastModified.toLocaleString(); // Formats date
    }
});
