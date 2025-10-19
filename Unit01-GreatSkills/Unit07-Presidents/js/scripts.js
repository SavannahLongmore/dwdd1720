import {presidents} from '../data/presidents.js';
console.log(presidents);

const pathStart = "//www.loc.gov/static/portals/free-to-use/public-domain/presidential-portraits/" 
const myTarget = document.querySelector('#cards');


for (let x = 0; x < presidents.length; x++) {
    let myFigure = document.createElement('figure');
    myFigure.classList.add('president-card'); 


    let myImageWrapper = document.createElement('div');
    myImageWrapper.classList.add('card-image-wrapper');


    let myImage = document.createElement('img');
    myImage.setAttribute("src", pathStart + presidents[x].photo)
    myImage.setAttribute("alt", presidents[x].name)
    
  
    myImageWrapper.appendChild(myImage);


    let myContent = document.createElement('div');
    myContent.classList.add('card-content');

    let theName = document.createElement('h2');
    theName.textContent = presidents[x].name;
    

    let theDetails = document.createElement('p');
    theDetails.innerHTML = `Served ${presidents[x].took_office} to ${presidents[x].left_office} <br> Party: ${presidents[x].party}`;


    myContent.appendChild(theName);
    myContent.appendChild(theDetails);


    myFigure.appendChild(myImageWrapper);
    myFigure.appendChild(myContent);

    myTarget.appendChild(myFigure)
} // end of loop