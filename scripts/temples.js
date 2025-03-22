// JavaScript for the Temple Album Page

// 1. Hamburger Menu Toggle for mobile view
const hamburgerButton = document.querySelector('.hamburger');  // The hamburger button
const navLinks = document.querySelector('.nav-links');  // The navigation links container

// Add an event listener to the hamburger button to toggle the 'active' class on the navLinks
hamburgerButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle between showing and hiding the menu on mobile
    if (navLinks.classList.contains('active')) {
        hamburgerButton.textContent = 'X';  // Change the hamburger to an 'X' to close the menu
    } else {
        hamburgerButton.textContent = '☰';  // Revert back to the hamburger icon
    }
});

// 2. Dynamic Footer Information (current year and last modified date)
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('last-modified');

// Set the current year dynamically
yearSpan.textContent = new Date().getFullYear(); 

// Set the last modified date dynamically (using document's last modified date)
lastModifiedSpan.textContent = document.lastModified;
