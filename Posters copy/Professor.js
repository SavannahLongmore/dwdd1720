import films from '../data/films.js';

const btnList = document.querySelector("#list");
const btnGrid = document.querySelector("#grid");
const homeDiv = document.querySelector("body");
const imagePath = "//starwars.dgmuvu.com/films/";
//https is a secure page. This may cause an error if you launch your website on a non-secure site. To mitigate this, leave the "https:" off.

btnList.addEventListener('click', () => homeDiv.className = "paintList");
btnGrid.addEventListener('click', () => homeDiv.className = "paintGrid");

const homePage = document.querySelector('.cardContainer');

// Create a new div for the h1 and buttons
const headerDiv = document.createElement('div');
headerDiv.classList.add('headerDiv');

// Create and append the h1 element
const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = 'Star Wars Movie Posters';
headerDiv.appendChild(h1);

// Create and append the buttons
const buttonsSection = document.createElement('section');
buttonsSection.classList.add('Buttons');

const gridButton = document.createElement('img');
gridButton.src = 'Images/grid.svg';
gridButton.alt = 'Grid Button';
gridButton.id = 'grid';
buttonsSection.appendChild(gridButton);

const listButton = document.createElement('img');
listButton.src = 'Images/list.svg';
listButton.alt = 'List Button';
listButton.id = 'list';
buttonsSection.appendChild(listButton);

headerDiv.appendChild(buttonsSection);

const figureContainer = document.createElement('div')
figureContainer.classList.add('figureContainer');

homePage.appendChild(figureContainer);

// Append the headerDiv to the homePage
//homePage.appendChild(headerDiv);

for (let x = 0; x < films.length; x++) {
    let mTitle = document.createElement('div');

    // The following code creates and appends elements from my JSON data file.
    mTitle.innerHTML = `<p>${films[x].title}</p>`;
    mTitle.classList.add('mTitle');

    // Creating image element.
    let imageFigCaptionContainer = document.createElement('div');
    imageFigCaptionContainer.classList.add('imageFigCaptionContainer');

    let figCaptionDiv = document.createElement('div');
    figCaptionDiv.classList.add('figCaptionDiv');

    let mImage = document.createElement('img');
    mImage.classList.add('mImage');
    mImage.setAttribute("src", films[x].image);

    // Creating director element.
    let mDirector = document.createElement('figcaption');
    mDirector.innerHTML = `<p>Directed by: ${films[x].director}</p>`;

    // Creating producer element.
    let mProducer = document.createElement('figcaption');
    mProducer.innerHTML = `<p>Produced by: ${films[x].producer}</p>`;

    // Creating "release date" element.
    let mRelease = document.createElement('figcaption');
    mRelease.innerHTML = `<p>Released on: ${films[x].release_date}</p>`;

    // Creating figure element (Parent element over the image, alt, and figcaption.)
    let mFigure = document.createElement('figure');

    figCaptionDiv.appendChild(mDirector);
    figCaptionDiv.appendChild(mRelease);
    figCaptionDiv.appendChild(mProducer);

    mFigure.appendChild(mTitle);
    imageFigCaptionContainer.appendChild(mImage);
    imageFigCaptionContainer.appendChild(figCaptionDiv);
    mFigure.appendChild(imageFigCaptionContainer);

    figureContainer.appendChild(mFigure);
}
// end of posters loop
