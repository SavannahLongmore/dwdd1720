import {friends} from "../data/friends.js"
//console.log(friends)

// grab the HTML references
const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')

const monthName = ["January", "February","March", "April","May", "June","July", "August","September", "October","November", "December"]

// nav items
friends.forEach(friend => {
    console.log(friend)
    const myButton = document.createElement('button')
    myButton.textContent = `${friend.first} ${friend.last}`
    myButton.addEventListener('click', () => showFriend(friend)
)
    myNav.appendChild(myButton)
})

 function showFriend(friend) {
    console.log(friend)

    let friendSection = document.createElement("section")
    let friendName = document.createElement("h2")
    let friendPhoto = document.createElement("img")
    let friendBirthday = document.createElement("p")
    let friendEmployment = document.createElement('p')
    let friendHobbies = document.createElement('ul')

    friendName.textContent = `${friend.first} ${friend.last}`
    friendPhoto.src = `images/${friend.photo}`
    friendPhoto.alt = friend.first
    friendEmployment.textContent = `EMPLOYMENT: ${friend.employment}`
    friendBirthday.textContent = `BIRTHDAY: ${monthName[(friend.bornMonth)-1]} ${friend.bornDay}, ${friend.bornYear}`
    friend.hobbies.forEach(hobby => {
        //console.log(hobby)
        let theHobby = document.createElement('li')
        theHobby.textContent = hobby
        friendHobbies.appendChild(theHobby)
    })


    friendSection.appendChild(friendName)
    friendSection.appendChild(friendPhoto)
    friendSection.appendChild(friendBirthday)
    friendSection.appendChild(friendEmployment)
    friendSection.appendChild(friendHobbies)

    myViewer.textContent = ""
    myViewer.appendChild(friendSection)
 }