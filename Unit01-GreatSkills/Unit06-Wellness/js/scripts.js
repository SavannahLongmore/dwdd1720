// --- 1. CONFIGURATION (Color Map) ---
const emotionColors = {
    'Joyful': '#fff9c8ff',
    'Sad': '#d2f1ffff',
    'Angry': '#ffc9c9ff',
    'Fearful': '#e2d2ffff',
    'Disgusted': '#c7ffc9ff',
    'Anxious': '#ffcfc0ff',
    'Jealous': '#b2ffedff',
    'Embarassed': '#ffb8d2ff',
    'Bored': '#bad0dbff'
};
// --- JAVASCRIPT ANIMATION LOGIC for future use! ---


// 1. Define the colors you want to cycle through
const animationColors = [
    '#D32F2F', // Red
    '#0031b9ff', // Blue
    '#d6c100ff', // Yellow
    '#00a22bff'  // Green
];


// 2. Initialize a counter
let colorIndex = 0;


// 3. Get ALL elements to change using querySelectorAll
//    This selects the h1 inside #newProfile AND the h2 inside #myProfile
const headingElements = document.querySelectorAll('#newProfile h1, #myProfile h1');


// 4. Create the function to cycle the color
function cycleTextColor() {
    // Get the current color from the array
    const newColor = animationColors[colorIndex];
   
    // Loop through the list of selected headings and apply the color to each one
    headingElements.forEach(heading => {
        heading.style.color = newColor;
    });
   
    // Move to the next color, resetting to 0 when the array ends
    colorIndex = (colorIndex + 1) % animationColors.length;
}


// 5. Start the animation loop (e.g., every 3 seconds)
setInterval(cycleTextColor, 3000);
// --- 2. SAVE PROFILE LOGIC ---
const saveBtn = document.querySelector('#saveProfile');
const profileForm = document.querySelector('form');


saveBtn.addEventListener('click', () => {
    if (profileForm.checkValidity()) {
       
        let fn = document.querySelector('input[name="first"]');
        localStorage.setItem('wellness-first', fn.value);
       
        let ln = document.querySelector('input[name="last"]');
        localStorage.setItem('wellness-last', ln.value);
       
        let select = document.querySelector('#physical');
       
        let ev = select.options[select.selectedIndex].value;
        localStorage.setItem('wellness-emoji', ev);
       
        let et = select.options[select.selectedIndex].text;
        localStorage.setItem('wellness-text', et);
       
        // Save the background color based on the selected text
        const color = emotionColors[et];
        localStorage.setItem('wellness-color', color);
       
        location.reload();
    }
});


// --- 3. DELETE PROFILE LOGIC ---
const deleteBtn = document.querySelector('#delProfile');
deleteBtn.addEventListener('click' , () => {
    localStorage.removeItem('wellness-first');
    localStorage.removeItem('wellness-last');
    localStorage.removeItem('wellness-emoji');
    localStorage.removeItem('wellness-text');
    localStorage.removeItem('wellness-color');
    location.reload();
});


// --- 4. DISPLAY PROFILE LOGIC (Runs every time the page loads) ---
const check = localStorage.getItem('wellness-first');


if (check === null) {
    document.querySelector('#newProfile').className = 'showMe';
    document.querySelector('#myProfile').className = 'hideMe';
} else {
    document.querySelector('#newProfile').className = 'hideMe';
    document.querySelector('#myProfile').className = 'showMe';
   
    document.querySelector('#first').textContent = localStorage.getItem('wellness-first');
    document.querySelector('#last').textContent = localStorage.getItem('wellness-last');
    document.querySelector('#emotion').textContent = localStorage.getItem('wellness-text');
   
    document.querySelector('#emoji').src = localStorage.getItem('wellness-emoji');
   
    // 💥 FIX: Get the saved color and apply it to the border of the #emoji element 💥
    const savedColor = localStorage.getItem('wellness-color');
    document.querySelector('#emoji').style.borderColor = savedColor;
   
    // Make sure you have the base border style set up in your CSS:
    // #emoji { border: 10px solid transparent; }
}
if (check === null) {
    // ... (show newProfile, hide myProfile) ...
} else {
    // ... (Your existing display code is here) ...
   
    // Set the SVG image source (path)
    document.querySelector('#emoji').src = localStorage.getItem('wellness-emoji');
   
    // Get the saved color
    const savedColor = localStorage.getItem('wellness-color');
   
    // 💥 CRITICAL CHANGE: Apply the color to the background of the #emoji element 💥
    document.querySelector('#emoji').style.backgroundColor = savedColor;
}

