document.addEventListener('DOMContentLoaded', () => {
    // Set the last modified date and current year
    document.getElementById("lastModified").innerHTML = document.lastModified;

    const today = new Date();
    const year = document.querySelector("#currentyear");
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

    const hamburgerBtn = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');

    // Get the temple data
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
            dedicatedYear: 2005
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
            dedicatedYear: 1888
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
            dedicatedYear: 2015
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
            dedicatedYear: 1974
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
            dedicatedYear: 1986
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
            dedicatedYear: 1983
        },
        {
            templeName: "Phoenix Arizona",
            location: "Phoenix, Arizona, United States",
            dedicated: "2014, November, 16",
            area: 27000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-36265.jpg",
            dedicatedYear: 2014
        },
        {
            templeName: "Querétaro Mexico",
            location: "Querétaro, Querétaro, Mexico",
            dedicated: "To be announced",
            area: 27500,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/queretaro-mexico-temple/queretaro-mexico-temple-23845.jpg",
            dedicatedYear: null
        }
    ];

    // Function to create and display temple cards
    function createTempleCard(filteredTemples) {
        const gallery = document.getElementById('temple-gallery');
        gallery.innerHTML = ''; // Clear current cards

        // Create and display each temple card
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
    filterTemples('Home');
});
