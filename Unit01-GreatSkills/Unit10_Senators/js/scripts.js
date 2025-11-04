import { senators } from '../data/senators.js'
console.log(senators)

const myNavigation = document.querySelector('nav')
const myParent = document.querySelector('#senatorsHere')

// All Senators
const btnAll = document.createElement('button')
btnAll.textContent = "All Senators"
btnAll.classList.add('all-btn')
btnAll.addEventListener('click', () => displaySenators(senators))

// Female Senators
const btnWomen = document.createElement('button')
btnWomen.textContent = "Women Senators"
btnWomen.classList.add('women-btn')
btnWomen.addEventListener('click', () => {
  const arrayWomen = senators.filter(senator => senator.gender === 'F')
  displaySenators(arrayWomen)
})

// Male Senators
const btnMen = document.createElement('button')
btnMen.textContent = "Men Senators"
btnMen.classList.add('men-btn')
btnMen.addEventListener('click', () => {
  const arrayMen = senators.filter(senator => senator.gender === 'M')
  displaySenators(arrayMen)
})

// Republican Senators
const btnRepublican = document.createElement('button')
btnRepublican.textContent = "Republican Senators"
btnRepublican.classList.add('republican-btn')
btnRepublican.addEventListener('click', () => {
  const arrayRepublican = senators.filter(senator => senator.party === 'R')
  displaySenators(arrayRepublican)
})

// Democrat Senators
const btnDemocrat = document.createElement('button')
btnDemocrat.textContent = "Democrat Senators"
btnDemocrat.classList.add('democrat-btn')
btnDemocrat.addEventListener('click', () => {
  const arrayDemocrat = senators.filter(senator => senator.party === 'D')
  displaySenators(arrayDemocrat)
})
// Independent Senators
const btnIndependent = document.createElement('button')
btnIndependent.textContent = "Independent Senators"
btnIndependent.classList.add('independent-btn')
btnIndependent.addEventListener('click', () => {
  const arrayIndependent = senators.filter(senator => 
  senator.party === 'I' || senator.party === 'ID' || senator.party === 'Ind'
)
displaySenators(arrayIndependent)
})
// Add buttons to the page
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnWomen)
myNavigation.appendChild(btnMen)
myNavigation.appendChild(btnRepublican)
myNavigation.appendChild(btnDemocrat)
myNavigation.appendChild(btnIndependent)

// Display function
function displaySenators(list) {
  myParent.textContent = ""
  list.forEach(senator => {
    const myFigure = document.createElement('figure')
    const myImage = document.createElement('img')
    const myCaption = document.createElement('figcaption') // moved this up!

  myImage.src = `https://unitedstates.github.io/images/congress/225x275/${senator.id}.jpg`

    myImage.alt = `${senator.first_name} ${senator.last_name}`
    myCaption.innerHTML = `
      <strong>${senator.first_name} ${senator.last_name}</strong><br>
      Party: ${senator.party}<br>
      State: ${senator.state}<br>
      DOB: ${senator.date_of_birth}<br>
      Phone: ${senator.phone}
    `;

switch (senator.gender) {
      case "F":
        myFigure.className = "female"
        break
      case "M":
        myFigure.className = "male"
        break
      default:
        myFigure.className = "other"
    }
switch (senator.party) {
  case "R":
    myFigure.classList.add("republican")
    break
  case "D":
    myFigure.classList.add("democrat")
    break
  default:
    myFigure.classList.add("independent")
}
    myFigure.appendChild(myImage)
    myFigure.appendChild(myCaption)
    myParent.appendChild(myFigure)
  })
}

// Show all by default
displaySenators(senators)
