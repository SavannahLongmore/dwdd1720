// add links to the html
const myNavigation = document.querySelector('nav')
const myViewer = document.querySelector('main')



//---------go grab the data and then wait for the result. --------
//we've grabbed the data, waited for it, then assigned 
// the data to be a json object, then once it's come in, 
// we've assigned it to a verable called shipArray. 
// WE then pass that veriable to a function to populate 
//the navbar and then we've rendered it out.
fetch("./data/starships.json")
    .then((responce) => responce.json())
    .then((shipArray) => {
        console.log(shipArray)
        populateNav(shipArray)
    })

    //populate the nav bar
    function populateNav(allShips){
        console.log(allShips)
        allShips.forEach(ship => {
            let myButton = document.createElement('button')
            console.log(ship.name)
            myButton.textContent = ship.name
            myButton.addEventListener('click', () => showShip(ship))
            myNavigation.appendChild(myButton)
        })// end of loop
    }// end of nav populate

    // ship viewer
    function showShip(shipData) {
        console.log(shipData)
        //create a figure and its parts
        let myFigure = document.createElement('figure')
        let myImage = document.createElement('img')
        let myCaption = document.createElement('figcaption')
        //assign data to the figure
        console.log(shipData.url)
        let urlArray = shipData.url.split('/')
        console.log(urlArray[5])
        myImage.src=`https://starwars.dgmuvu.com/ships/${urlArray[5]}.jpg`
        myCaption.textContent = shipData.name
        
        // errow checking for image
        myImage.addEventListener('error', () => {
            console.log("oops")
            myImage.src = "https://starwars.dgmuvu.com/ships/placeholder.jpg"
            myCaption.textContent = `The ${shipData.name} has been sucked into a black hole!`
        })  

        //asemble the figure
        myFigure.appendChild(myImage)
        myFigure.appendChild(myCaption)

        //add the figure to the html
        myViewer.textContent = ''
        myViewer.appendChild(myFigure)
    }//end of viewer
function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  // random start position
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight * 0.3; // top area only
  star.style.left = `${startX}px`;
  star.style.top = `${startY}px`;

  // random length & duration
  const duration = 1.5 + Math.random() * 1.5;
  star.style.animationDuration = `${duration}s`;

  document.body.appendChild(star);

  // remove after animation ends → prevents a pile of divs
  setTimeout(() => star.remove(), duration * 1000 + 50);
}

// randomly create stars
setInterval(() => {
  if (Math.random() < 0.4) {  // chance per interval (can tune)
    createShootingStar();
  }
}, 800);
    for (let i = 0; i < 300; i++) {
    const star = document.createElement('div')
    star.classList.add("stars")
    star.style.top = Math.random()*100 + "vh"
    star.style.left = Math.random()*100 + "vw"
    star.style.animationDelay = Math.random()*3 + "s"
    document.body.appendChild(star)
}


