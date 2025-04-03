document.addEventListener('DOMContentLoaded', () => {
  // Set the last modified date
  document.getElementById("lastModified").innerHTML = document.lastModified;

  // Use the date object to display the current year
  const today = new Date();
  const year = document.querySelector("#currentyear");
  year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

  // Hamburger menu toggle
  const hamburgerBtn = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");

  hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('open');
      navigation.classList.toggle('open');
  });

  // Array of temple data
  const temples = [
      // Temple data remains unchanged
  ];

  // Function to create and display temple cards
  function createTempleCard(filteredTemples) {
      const gallery = document.getElementById('temple-gallery');
      gallery.innerHTML = ''; // Clear current cards

      filteredTemples.forEach(temple => {
          let card = document.createElement("section");
          let name = document.createElement("h3");
          let location = document.createElement("p");
          let dedication = document.createElement("p");
          let area = document.createElement("p");
          let img = document.createElement("img");

          name.textContent = temple.templeName;
          location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
          dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated || 'TBA'}`;
          area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

          img.setAttribute("src", temple.imageUrl);
          img.setAttribute("alt", `${temple.templeName} Temple`);
          img.setAttribute("loading", "lazy");

          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(dedication);
          card.appendChild(area);
          card.appendChild(img);

          gallery.appendChild(card);
      });
  }

  // Filter and display temples based on the selected category
  function filterTemples(category) {
      let filteredTemples = [];

      if (category === 'Old') {
          filteredTemples = temples.filter(temple => temple.dedicatedYear && temple.dedicatedYear < 1900);
      } else if (category === 'New') {
          filteredTemples = temples.filter(temple => temple.dedicatedYear && temple.dedicatedYear > 2000);
      } else if (category === 'Large') {
          filteredTemples = temples.filter(temple => temple.area > 90000);
      } else if (category === 'Small') {
          filteredTemples = temples.filter(temple => temple.area < 10000);
      } else {
          filteredTemples = temples; // Display all temples for "Home"
      }

      createTempleCard(filteredTemples);
  }

  // Event listeners for navigation links
  document.getElementById('home').addEventListener('click', () => filterTemples('Home'));
  document.getElementById('old').addEventListener('click', () => filterTemples('Old'));
  document.getElementById('new').addEventListener('click', () => filterTemples('New'));
  document.getElementById('large').addEventListener('click', () => filterTemples('Large'));
  document.getElementById('small').addEventListener('click', () => filterTemples('Small'));

  // Initially load all temples on page load
  window.onload = () => filterTemples('Home');
});
