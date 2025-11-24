// references to the html
const parentTag = document.querySelector('#weatherCard')

// writing a default zipcode
let zip = localStorage.getItem('myZipCode')
if (zip == null) {
    let defaultZip = " "
    localStorage.setItem('myZipCode', defaultZip)
    zip = defaultZip
}

console.log(zip)

// setting the path to the API on weather
const myKey = "289145b79339b1b08813d741cbde7b87"
const myPath = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${myKey}&units=imperial`

fetch(myPath)
  .then((response) => response.json())
  .then((allData) => {
      currentWeather(allData)
  })

// fetch the remote JSON data for the current weather
function currentWeather(weatherResults) {
    console.log(weatherResults)
    console.log(weatherResults.weather[0].icon)

    // ===== DAY / NIGHT + WEATHER BACKGROUND =====
    const iconCode = weatherResults.weather[0].icon           // e.g. "01d"
    const isDay = iconCode.includes("d")
    const isNight = iconCode.includes("n")
    const weatherType = weatherResults.weather[0].main.toLowerCase()

    // remove any previous bg / night-sky classes
    document.body.classList.remove(
        "bg-clear-day", "bg-clear-night",
        "bg-clouds-day", "bg-clouds-night",
        "bg-rain-day", "bg-rain-night",
        "bg-snow-day", "bg-snow-night",
        "bg-default",
        "night-sky"
    )

    if (weatherType.includes("clear")) {
        document.body.classList.add(isDay ? "bg-clear-day" : "bg-clear-night")
    } else if (weatherType.includes("cloud")) {
        document.body.classList.add(isDay ? "bg-clouds-day" : "bg-clouds-night")
    } else if (weatherType.includes("rain") || weatherType.includes("drizzle")) {
        document.body.classList.add(isDay ? "bg-rain-day" : "bg-rain-night")
    } else if (weatherType.includes("snow")) {
        document.body.classList.add(isDay ? "bg-snow-day" : "bg-snow-night")
    } else {
        // fallback
        document.body.classList.add(isDay ? "bg-clear-day" : "bg-clear-night")
    }

    // ⭐ stars at night
    if (isNight) {
        document.body.classList.add("night-sky")
    }

    // ===== TOWN NAME =====
    const myTown = document.querySelector('#town')
    myTown.textContent = `Weather for ${weatherResults.name}`

    // ===== DATE =====
    const myDate = document.createElement('p')
    myDate.className = "date"
    const d = new Date()
    myDate.textContent = d.toDateString()
    parentTag.appendChild(myDate)

    // ===== ICON =====
    const myWeatherIcon = document.createElement('img')
    myWeatherIcon.src = `https://openweathermap.org/img/wn/${weatherResults.weather[0].icon}@2x.png`
    myWeatherIcon.alt = weatherResults.weather[0].description
    parentTag.appendChild(myWeatherIcon)

    // ===== CURRENT TEMP =====
    const myCurrentTemp = document.createElement('p')
    myCurrentTemp.className = "temperature"
    myCurrentTemp.innerHTML = `${weatherResults.main.temp}&deg;F`
    parentTag.appendChild(myCurrentTemp)

    // ===== FEELS LIKE =====
    const myCurrentFeelsLike = document.createElement('p')
    myCurrentFeelsLike.className = "feels-like"
    myCurrentFeelsLike.innerHTML = `Feels like: ${weatherResults.main.feels_like}&deg;F`
    parentTag.appendChild(myCurrentFeelsLike)

    // ===== HUMIDITY =====
    const myCurrentHumidity = document.createElement('p')
    myCurrentHumidity.className = "humidity"
    myCurrentHumidity.innerHTML = `Humidity: ${weatherResults.main.humidity}%`
    parentTag.appendChild(myCurrentHumidity)

    // ===== WEATHER DESCRIPTION =====
    const myCurrentWeatherMain = document.createElement('p')
    myCurrentWeatherMain.className = "weather-main"
    myCurrentWeatherMain.innerHTML = weatherResults.weather[0].description
    parentTag.appendChild(myCurrentWeatherMain)
}



// ask for a new zipcode
const theModalBox = document.querySelector('aside')
const theSettings = document.querySelector('#settings')

theSettings.addEventListener('click', () => {
    theModalBox.classList.toggle("show")
})

// set the new zip
const myButton = document.querySelector('#applyZip')
myButton.addEventListener('click', () => {
    console.log("you clicked me")
    theModalBox.className = ""
    let theZipCode = document.querySelector('#newZip').value
    if (theZipCode.length === 5) {
        localStorage.setItem('myZipCode', theZipCode)
    }
    window.location.reload()
})

// data validation for the zipcode
const myInput = document.querySelector('#newZip')
myInput.addEventListener('input', () => {
   myInput.value = myInput.value.slice(0, 5)
})
