import { people } from '../data/people.js'
console.log(people)


const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
const numStars = 100;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * pageWidth + 'px';
  star.style.top = Math.random() * pageHeight + 'px';
  star.style.animationDelay = Math.random() * 5 + 's';
  document.body.appendChild(star);
}
window.addEventListener('resize', () => {
  document.querySelectorAll('.star').forEach(star => star.remove());
  const pageWidth = window.innerWidth;
  const pageHeight = window.innerHeight;
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * pageWidth + 'px';
    star.style.top = Math.random() * pageHeight + 'px';
    star.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(star);
  }
});
// -------tag the HTML elements---------

const myNavigation = document.querySelector('nav')
const myParent = document.querySelector('#peopleHere')

//-----create an all people button-------
const btnAll = document.createElement('button')
btnAll.textContent = "All People"
btnAll.classList.add('all-btn')
//Once we hear a click, we are going to call the function displayPeople(people)
//we're going to send all the people array to the function displayPeople on line 17
btnAll.addEventListener('click', () => displayPeople(people))

//------create a female button with filter-------
const btnFemale = document.createElement('button')
btnFemale.textContent = "Females"
btnFemale.classList.add('female-btn')
btnFemale.addEventListener('click', () => {
    //when someone clicks on this button, we will filter all 87 people and assign them 
    // to the varible "person" and then we will check the person.gender, and if they 
    // are exactly female, we add them to the arrayfemale
    const arrayFemale = people.filter(person => person.gender === 'female')
        displayPeople(arrayFemale)
})  
//---------end of female button-------

//------create a male button with filter-------
const btnMale = document.createElement('button')
btnMale.textContent = "Males"
btnMale.classList.add('male-btn')
btnMale.addEventListener('click', () => {
    const arrayMale = people.filter(person => person.gender === 'male')
        displayPeople(arrayMale)
})  
//---------end of male button-------

//------create other genders button with filter-------
const btnOther = document.createElement('button')
btnOther.textContent = "Other"
btnOther.classList.add('other-btn')
btnOther.addEventListener('click', () => {
    const arrayOther = people.filter(person => person.gender != 'male' && person.gender != 'female')
        displayPeople(arrayOther)
})  
//---------end of other genders button-------

//-------add buttons to page---------
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)
myNavigation.appendChild(btnOther)

//--------- loop through all the people--------
function displayPeople (x) {
    //or could put innerHTML. It will still erase
    // myParent to only show what filter is being pressed
    myParent.textContent = ""
    x.forEach(person => {
       const myFigure = document.createElement('figure')

        const myImage = document.createElement('img')
        //console.log(person.url)
        const explodedArray = person.url.split('/')
        // console.log(explodedArray)
        const charNumber = explodedArray[5]
        myImage.src=`https://starwars.dgmuvu.com/characters/${charNumber}.jpg`
        myImage.alt= person.name

       const myCaption = document.createElement('figcaption')
       //.textContent is a javascript code that put "person" 
       // from the forEach loop and grabs their name and 
       // puts it in the caption text
       myCaption.textContent = person.name
       

        // --------assign gender class-----
        //if person.gender equales female, then assign the class name female
        //to the figure tag and then break (break means skip all the rest of 
        // the lines and jump to the end of the switch)
        console.log(person.gender)
        switch (person.gender) {
            case "female":
                myFigure.className = "female"
            break;
            case "male":
              myFigure.className = "male"
            break;
            default:
              myFigure.className = "other"
        }

        // -----assemble the parts-------
        //we attach the image to the figure, and the caption to the figure
        myFigure.appendChild(myImage)
        myFigure.appendChild(myCaption)

        //-----attach to the html page------
        //myparent is a reference to the people
        myParent.appendChild(myFigure)

    }//------end of fat arrow------
    
    )//--------end of loop---------
} //-------end of funcion---------

//------ call the function---------

displayPeople(people);

