// --- PLAYER OBJECT AND UI ELEMENTS ---

const BET_AMOUNT = 5; 

let player = {
    name: "Player", 
    chips: 200
}
const nameInput = document.getElementById('name-input');
const saveButton = document.getElementById('save-button');

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el"); 


// --- GAME STATE VARIABLES ---
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""


// --- INITIAL SETUP AND EVENT LISTENERS ---


function updatePlayerDisplay() {
    playerEl.textContent = player.name + ": $" + player.chips;
}

updatePlayerDisplay();
saveButton.addEventListener('click', function() {
    const newName = nameInput.value;
    if (newName.trim() !== "") {
        player.name = newName; 
        updatePlayerDisplay();
        console.log("Player name saved as:", player.name);
    }
    nameInput.value = ""; 
});


// --- GAME CORE LOGIC ---

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {

    if (player.chips >= BET_AMOUNT) {
        player.chips -= BET_AMOUNT;
        updatePlayerDisplay();
        
        isAlive = true
        hasBlackJack = false
        
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        
        renderGame()
    } else {
        messageEl.textContent = `You don't have enough chips to place the $${BET_AMOUNT} bet!`;
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true

        player.chips += BET_AMOUNT * 2; 
        updatePlayerDisplay();
        
    } else {
        message = "You're out of the game!"
        isAlive = false
        
        updatePlayerDisplay(); 
    }
    messageEl.textContent = message
}



function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame() 
    }
}