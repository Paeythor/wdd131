document.addEventListener('DOMContentLoaded', function () {
    // Display the last modified date
    document.getElementById("lastModified").innerHTML = document.lastModified;

    // Use the Date object to display the current year
    const today = new Date();
    const year = document.querySelector("#currentyear");
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

    // Event listener to handle "More" / "Less" content toggle
    const showMoreLink = document.getElementById('show-more');
    const moreContent = document.querySelector('.more-content');

    // Trigger when user clicks on 'More' or 'Less'
    if (showMoreLink && moreContent) {
        showMoreLink.addEventListener('click', function (event) {
            event.preventDefault();
            // Toggle the display style of the more content
            const isContentVisible = moreContent.style.display === 'block';
            moreContent.style.display = isContentVisible ? 'none' : 'block';
            showMoreLink.textContent = isContentVisible ? 'More' : 'Less'; // Toggle text
        });
    }

    // Display the wind chill factor based on static temperature and wind speed
    const temperature = 7; // Static temperature value for Scotland (e.g., 7°C)
    const windSpeed = 10; // Static wind speed value in km/h

    // Wind chill calculation formula (for metric units: °C and km/h)
    function calculateWindChill(temp, speed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }

    // Function to display the wind chill factor
    function displayWindChill() {
        const windChillElement = document.getElementById('wind-chill');

        // Conditions for viable wind chill calculation
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillElement.textContent = `${windChill.toFixed(2)}°C`; // Display calculated wind chill
        } else {
            windChillElement.textContent = "N/A"; // No wind chill applicable
        }
    }

    // Call the displayWindChill function to update the wind chill factor on page load
    displayWindChill();
});
