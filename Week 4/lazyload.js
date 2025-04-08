// JavaScript to set the last modified date dynamically
document.addEventListener("DOMContentLoaded", function() {
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;
});
