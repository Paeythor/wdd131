document.addEventListener('DOMContentLoaded', () => {
    // Set the last modified date and current year
    document.getElementById("lastModified").innerHTML = document.lastModified;

    const today = new Date();
    const year = document.querySelector("#currentyear");
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

    const hamburgerBtn = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    hamburgerBtn.addEventListener('click', () => {
        navigation.classList.toggle('open'); 
    });
    // Get the temple data
    const temples = [
            {
                templeName: "Aba Nigeria",
                location: "Aba, Nigeria",
                dedicated: "2005, August, 7",
                area: 11500,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/aba-nigeria-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/aba-nigeria-temple/photographs/",
                dedicatedYear: 2005,
                imageFolder: "images/temple-images/Aba-Nigeria/aba-nigeria-temple-5087-main.jpg"
            },
            {
                templeName: "Auckland New Zealand",
                location: "Auckland, New Zealand",
                dedicated: "2025, April, 13",
                area: 45456,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-56277-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/auckland-new-zealand-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/auckland-new-zealand-temple/photographs/",
                dedicatedYear: 2025,
                imageFolder: "images/temple-images/Laie-Hawaii/laie-hawaii-temple-7370-main.jpg"
            },
            {
                templeName: "Laie Hawaii",
                location: "Laie, Hawaii, USA",
                dedicated: "1919, November, 27",
                area: 42100,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/laie-hawaii-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/laie-hawaii-temple/photographs/",
                dedicatedYear: 1919,
                imageFolder: "images/temple-images/Laie-Hawaii/laie-hawaii-temple-7370-main.jpg"
            },
            {
                templeName: "Lima Peru",
                location: "Lima, Peru",
                dedicated: "1986, January, 10",
                area: 9600,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/lima-peru-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/lima-peru-temple/photographs/",
                dedicatedYear: 1986,
                imageFolder: "images/temple-images/Lima-Peru/lima-peru-temple-12721-main.jpg"
            },
            {
                templeName: "Manti Utah",
                location: "Manti, Utah, USA",
                dedicated: "1888, May, 21",
                area: 100373,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/manti-utah-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/manti-utah-temple/photographs/",
                dedicatedYear: 1888,
                imageFolder: "images/temple-images/Manti-Utah/manti-utah-temple-40551-main.jpg"
            },
            {
                templeName: "Mexico City Benemerito",
                location: "Mexico City, Mexico",
                dedicated: "2000, December, 2",
                area: 29000,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-benemerito-mexico-temple/mexico-city-benemerito-mexico-temple-56024-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/mexico-city-benemerito-mexico-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/mexico-city-benemerito-mexico-temple/photographs/",
                dedicatedYear: 2000,
                imageFolder: "images/temple-images/Mexico-City-Benemerito/mexico-city-benemerito-mexico-temple-56024-main.jpg"
            },
            {
                templeName: "Mexico City Mexico",
                location: "Mexico City, Mexico",
                dedicated: "2000, December, 1",
                area: 116642,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/mexico-city-mexico-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/mexico-city-mexico-temple/photographs/",
                dedicatedYear: 2000,
                imageFolder: "images/temple-images/Mount-Timpanogos-Utah/mount-timpanogos-utah-temple-36979-main.jpg"
            },
            {
                templeName: "Mount Timpanogos Utah",
                location: "American Fork, Utah, USA",
                dedicated: "1996, October, 9",
                area: 54000,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-36979-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/mount-timpanogos-utah-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/mount-timpanogos-utah-temple/photographs/",
                dedicatedYear: 1996,
                imageFolder: "images/temple-images/Mount-Timpanogos-Utah/mount-timpanogos-utah-temple-36979-main.jpg"
            },
            {
                templeName: "Nauvoo Illinois",
                location: "Nauvoo, Illinois, USA",
                dedicated: "2002, May, 1",
                area: 54000,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/nauvoo-illinois-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/nauvoo-illinois-temple/photographs/",
                dedicatedYear: 2002,
                imageFolder: "images/temple-images/Nauvoo-Illinois/nauvoo-illinois-temple-50576-main.jpg"
            },
            {
                templeName: "Oakland California",
                location: "Oakland, California, USA",
                dedicated: "1964, November, 23",
                area: 80157,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/oakland-california-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/oakland-california-temple/photographs/",
                dedicatedYear: 1964,
                imageFolder: "images/temple-images/Oakland-California/oakland-california-temple-2654-main.jpg"
            },
            {
                templeName: "Orem Utah",
                location: "Orem, Utah, USA",
                dedicated: "2021, March, 20",
                area: 71998,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-39549-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/orem-utah-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/orem-utah-temple/photographs/",
                dedicatedYear: 2021,
                imageFolder: "images/temple-images/Orem-Utah/orem-utah-temple-39549-main.jpg"
            },
            {
                templeName: "Payson Utah",
                location: "Payson, Utah, USA",
                dedicated: "2015, April, 5",
                area: 96630,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/payson-utah-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/payson-utah-temple/photographs/",
                dedicatedYear: 2015,
                imageFolder: "images/temple-images/Payson-Utah/payson-utah-temple-38451-main.jpg"
            },
            {
                templeName: "Phoenix Arizona",
                location: "Phoenix, Arizona, USA",
                dedicated: "2015, November, 18",
                area: 64870,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/phoenix-arizona-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/phoenix-arizona-temple/photographs/",
                dedicatedYear: 2015,
                imageFolder: "images/temple-images/Phoenix-Arizona/phoenix-arizona-temple-12711-main.jpg"
            },
            {
                templeName: "Provo City Center Utah",
                location: "Provo, Utah, USA",
                dedicated: "2016, March, 20",
                area: 85084,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/provo-city-center-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/provo-city-center-temple/photographs/",
                dedicatedYear: 2016,
                imageFolder: "images/temple-images/Provo-City-Center-Utah/provo-city-center-temple-56386-main.jpg"
            },
            {
                templeName: "Provo Rock Canyon Utah",
                location: "Provo, Utah, USA",
                dedicated: "To be announced",
                area: 128325,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-utah-rock-canyon-temple/provo-utah-rock-canyon-temple-45659-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/provo-utah-rock-canyon-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/provo-utah-rock-canyon-temple/photographs/",
                dedicatedYear: null,
                imageFolder: "images/temple-images/Provo-Rock-Canyon-Utah/provo-utah-rock-canyon-temple-45659-main.jpg"
            },
            {
                templeName: "Querétaro Mexico",
                location: "Querétaro, Querétaro, Mexico",
                dedicated: "To be announced",
                area: 27500,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/queretaro-mexico-temple/queretaro-mexico-temple-23845.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/queretaro-mexico-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/queretaro-mexico-temple/photographs/",
                dedicatedYear: null,
                imageFolder: "images/temple-images/Queretaro-Mexico/queretaro-mexico-temple-23845.jpg"
            },
            {
                templeName: "Rome Italy Temple",
                location: "Rome, Italy",
                dedicated: "2019, March, 12",
                area: 41010,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/rome-italy-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/rome-italy-temple/photographs/",
                dedicatedYear: 2019,
                imageFolder: "images/temple-images/Rome-Italy/rome-italy-temple-2642-main.jpg"
            },
            {
                templeName: "San Diego California",
                location: "San Diego, California, USA",
                dedicated: "2002, January, 1",
                area: 72000,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg",
                templeUrl: "https://churchofjesuschristtemples.org/san-diego-california-temple/",
                galleryURL: "https://churchofjesuschristtemples.org/san-diego-california-temple/photographs/",
                dedicatedYear: 2002,
                imageFolder: "images/temple-images/San-Diego-California/san-diego-california-temple-9060-main.jpg"
            },
        {
            templeName: "Washington DC",
            location: "Washington, D.C., USA",
            dedicated: "1975, November, 19",
            area: 156558,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg",
            templeUrl: "https://churchofjesuschristtemples.org/washington-d.c.-temple/",
            galleryURL: "https://churchofjesuschristtemples.org/washington-d.c.-temple/photographs/",
            dedicatedYear: 1975,
            imageFolder: "images/temple-images/Washington-DC/washington-d.c.-temple-14992-main.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
            templeURL:"https://churchofjesuschristtemples.org/yigo-guam-temple/",
            galleryURL:"https://churchofjesuschristtemples.org/yigo-guam-temple/photographs/",
            dedicatedYear: 2020,
            imageFolder: "images/temple-images/Yigo-Guam/yigo_guam_temple_2.jpg"
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
            
            // Constructing image path based on imageFolder and temple-specific image
            img.onerror = () => {
                // Default to temple-specific images from subfolder
                const localImagePath = `${temple.imageFolder}/${temple.templeName.toLowerCase().replace(/ /g, '-')}-main.jpg`;
                img.setAttribute("src", localImagePath);
            };

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
