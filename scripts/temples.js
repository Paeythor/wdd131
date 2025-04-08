// JavaScript to handle hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Check if hamburger and navLinks are correctly selected
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the navigation
        navLinks.classList.toggle('active');
    });
} else {
    console.error('Hamburger or navLinks not found in the DOM.');
}

// Dynamically insert the current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
