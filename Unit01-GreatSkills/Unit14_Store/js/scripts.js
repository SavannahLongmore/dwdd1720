// js/scripts.js
import { animals } from "../data/animals.js";

const myNav = document.querySelector("nav");
const myViewer = document.querySelector("#viewer");

// Build nav buttons
animals.forEach((animal) => {
  const myButton = document.createElement("button");
  myButton.textContent = animal.name;
  myButton.addEventListener("click", () => showAnimal(animal));
  myNav.appendChild(myButton);
});

// Show the first animal by default
if (animals.length > 0) {
  showAnimal(animals[0]);
}

function showAnimal(animal) {
  console.log("Showing:", animal);

  // Clear previous content
  myViewer.innerHTML = "";

  // Outer card
  const animalsSection = document.createElement("section");
  animalsSection.classList.add("animal-card");

  // Image
  const animalsImage = document.createElement("img");
  animalsImage.src = animal.image;
  animalsImage.alt = animal.name;

  // Text elements
  const animalsName = document.createElement("h2");
  animalsName.textContent = animal.name;

  const animalsAppearance = document.createElement("p");
  animalsAppearance.textContent = `Appearance: ${animal.appearance}`;

  const animalsSize = document.createElement("p");
  animalsSize.textContent = `Size: ${animal.size}`;

  const animalsCareLevel1 = document.createElement("p");
  animalsCareLevel1.textContent = `Care level: ${animal.careLevel}`;

  const animalsHogwartsApproved = document.createElement("p");
  animalsHogwartsApproved.textContent = `Hogwarts approved: ${
    animal.hogwartsApproved === true
      ? "Yes"
      : animal.hogwartsApproved === false
      ? "No"
      : animal.hogwartsApproved
  }`;

  const animalsSafe = document.createElement("p");
  animalsSafe.textContent = `Safe for students: ${
    animal.isSafeForStudents ? "Yes" : "No"
  }`;

  const personalityLabel = document.createElement("p");
  personalityLabel.textContent = "Personality:";

  const animalsPersonality = document.createElement("ul");
  animal.personality.forEach((trait) => {
    const li = document.createElement("li");
    li.textContent = trait;
    animalsPersonality.appendChild(li);
  });

  const animalsSellingPoint = document.createElement("p");
  animalsSellingPoint.textContent = animal.sellingPoint;

  // Text wrapper (so all text is one column)
  const textWrapper = document.createElement("div");
  textWrapper.classList.add("animal-text");

  textWrapper.appendChild(animalsName);
  textWrapper.appendChild(animalsAppearance);
  textWrapper.appendChild(animalsSize);
  textWrapper.appendChild(animalsCareLevel1);
  textWrapper.appendChild(animalsHogwartsApproved);
  textWrapper.appendChild(animalsSafe);
  textWrapper.appendChild(personalityLabel);
  textWrapper.appendChild(animalsPersonality);
  textWrapper.appendChild(animalsSellingPoint);

  // Put image on left, text on right
  animalsSection.appendChild(animalsImage);
  animalsSection.appendChild(textWrapper);

  myViewer.appendChild(animalsSection);
}
