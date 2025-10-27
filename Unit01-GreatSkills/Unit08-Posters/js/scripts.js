import films from '../data/films.js';

const btnList = document.querySelector("#list");
const btnGrid = document.querySelector("#grid");
const homeDiv = document.querySelector("body");
const homePage = document.querySelector('.cardContainer');
const imagePath = "//starwars.dgmuvu.com/films/"; 

// --- FUNCTION TO DRAW CARDS ---
function drawCards(viewMode) {
    // 1. Clear existing content
    homePage.innerHTML = '';
    
    // 2. Re-create the buttons and header (Since we cleared homePage.innerHTML)
    const buttonsSection = document.createElement('section');
    buttonsSection.classList.add('Buttons');
    buttonsSection.innerHTML = `
        <h1 class="h1">Star Wars Movie Posters</h1>
        <img src="Images/grid.svg" alt="Grid Button" id="grid">
        <img src="Images/list.svg" alt="List Button" id="list">
    `;
    homePage.appendChild(buttonsSection);

    const figureContainer = document.createElement('div');
    figureContainer.classList.add('figureContainer');
    homePage.appendChild(figureContainer);

    // 3. Loop and build cards based on viewMode
    for (let x = 0; x < films.length; x++) {
        let mTitle = document.createElement('div');
        mTitle.innerHTML = `<p>${films[x].title}</p>`;
        mTitle.classList.add('mTitle');

        let imageFigCaptionContainer = document.createElement('div');
        imageFigCaptionContainer.classList.add('imageFigCaptionContainer');

        let figCaptionDiv = document.createElement('div');
        figCaptionDiv.classList.add('figCaptionDiv');

        let mImage = document.createElement('img');
        mImage.classList.add('mImage');
        mImage.setAttribute("src", films[x].image);

        let mDirector = document.createElement('figcaption');
        mDirector.innerHTML = `<p>DIRECTOR: ${films[x].director}</p>`;

        let mProducer = document.createElement('figcaption');
        mProducer.innerHTML = `<p>PRODUCER: ${films[x].producer}</p>`;

        let mRelease = document.createElement('figcaption');
        mRelease.innerHTML = `<p>RELEASED: ${films[x].release_date}</p>`;

        let mFigure = document.createElement('figure');

        // Append metadata text
        figCaptionDiv.appendChild(mDirector);
        figCaptionDiv.appendChild(mProducer);
        figCaptionDiv.appendChild(mRelease);

        // --- CONDITIONAL STRUCTURE LOGIC ---
        mFigure.appendChild(mTitle);

        if (viewMode === 'paintList') {
            // LIST STRUCTURE: Image and text together inside the flex container
            imageFigCaptionContainer.appendChild(mImage);
            imageFigCaptionContainer.appendChild(figCaptionDiv);
            mFigure.appendChild(imageFigCaptionContainer);
        } else { // 'paintGrid' or default
            // GRID STRUCTURE: Image is a direct child of figure for ABSOLUTE positioning
            mFigure.appendChild(mImage);
            
            // Text is inside the container, which is appended to figure
            imageFigCaptionContainer.appendChild(figCaptionDiv);
            mFigure.appendChild(imageFigCaptionContainer);
        }

        figureContainer.appendChild(mFigure);
    }
    
    // 4. Re-attach listeners to the new buttons
    document.querySelector("#list").addEventListener('click', () => {
        homeDiv.className = "paintList";
        drawCards('paintList');
    });
    document.querySelector("#grid").addEventListener('click', () => {
        homeDiv.className = "paintGrid";
        drawCards('paintGrid');
    });
}

// --- INITIAL PAGE LOAD ---
drawCards('paintGrid'); // Draw the page initially in Grid mode (based on HTML body class)


