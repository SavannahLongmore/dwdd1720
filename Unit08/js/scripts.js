import films from '../data/films.js';
// console.log(films); // Uncomment for debugging

// The base path for your images. I am assuming image files are named by episode_id (e.g., 'image/4.jpg').
const IMAGE_PATH_BASE = 'image/https://starwars.dgmuvu.com/films/1.webp'; 
const myTarget = document.querySelector('#cards'); // The container for the film cards

const btnGrid = document.querySelector("#gridImage");
const btnList = document.querySelector("#listImage");
const pageBody = document.querySelector("body");

// --- View Switching Logic ---
btnGrid.addEventListener('click', () => {
    // Switch to Grid View
    pageBody.classList.remove("list-view");
    pageBody.classList.add("grid-view");
});

btnList.addEventListener('click', () => {
    // Switch to List View
    pageBody.classList.remove("grid-view");
    pageBody.classList.add("list-view");
});

// Set initial view to grid (matching the first screenshot)
// NOTE: I am removing the 'paintGreen' class for a cleaner look matching the screenshots' black/dark background.
pageBody.classList.remove("paintGreen");
pageBody.classList.add("grid-view"); 
document.querySelector('.parent').style.display = 'none'; 

/**
 * Renders the film cards to the DOM.
 * @param {Array<Object>} data - The array of film objects.
 */
function renderFilmCards(data) {
    myTarget.innerHTML = ''; // Clear existing content
    
    // Sort films by episode_id to display in chronological Star Wars order
    const sortedFilms = data.sort((a, b) => a.episode_id - b.episode_id);

    sortedFilms.forEach(film => {
        // --- Card Element ---
        let myCard = document.createElement('div');
        myCard.classList.add('film-card');

        // The film title is crucial for the list view header and grid view styling
        let theTitle = document.createElement('h2');
        theTitle.textContent = film.title;
        myCard.appendChild(theTitle);

        // --- Image ---
        let myImage = document.createElement('img');
        const imageFile = `${film.episode_id}.jpg`; // e.g., '4.jpg'
        myImage.setAttribute("src", IMAGE_PATH_BASE + imageFile);
        myImage.setAttribute("alt", `${film.title} poster`);
        myCard.appendChild(myImage);
        
        // --- Details Content ---
        let myContent = document.createElement('div');
        myContent.classList.add('card-content');
        
        let theDetails = document.createElement('p');
        // Note the use of <br> for line breaks and <strong> for the labels
        theDetails.innerHTML = `
            <strong class="label">DIRECTOR:</strong> ${film.director} <br>
            <strong class="label">PRODUCER:</strong> ${film.producer} <br>
            <strong class="label">RELEASED:</strong> ${film.release_date}
        `;
        myContent.appendChild(theDetails);
        myCard.appendChild(myContent);

        // --- Append to Target ---
        myTarget.appendChild(myCard);
    });
}

// Initial call to render the film cards
renderFilmCards(films);