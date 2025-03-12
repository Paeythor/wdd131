


getdates.js 
document.addEventListener("DOMContentLoaded", function () {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedParagraph.textContent = LastModifiedDate; ${lastModifiedDate.toLocaleString()};
});
