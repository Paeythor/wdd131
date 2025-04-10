// Get the button and the container
const changeColorButton = document.getElementById('changeColorButton');
const messageContainer = document.getElementById('messageContainer');

// Define an array of colors
const colors = ['#FF6347', '#90EE90', '#ADD8E6', '#FFD700', '#FF69B4'];

// Add a click event listener to the button
changeColorButton.addEventListener('click', function() {
    // Get a random color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;

    // Update the message in the container
    messageContainer.innerHTML = `<p>The background color has been changed to ${randomColor}!</p>`;
});
