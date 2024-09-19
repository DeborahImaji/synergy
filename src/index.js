
function displayWeather(response) {
    let headTempElement = document.querySelector("#heading-temperature");
    let headTemp = response.data.temperature.current;

    let cityHeading = document.querySelector("#city-heading");
    let cityCondElement = document.querySelector("#heading-description");
    let currentHumidityElement = document.querySelector("#current-humidity");
    let windSpeedElement = document.querySelector("#current-windspeed");
    let dayTimeElement = document.querySelector("#current-daytime");
    let currentDate = new Date(response.data.time * 1000);

    let iconElement = document.querySelector("#icon");

    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="heading-icon">`;

    cityHeading.innerHTML = response.data.city;
    cityCondElement.innerHTML = response.data.condition.description;
    headTempElement.innerHTML = Math.round(headTemp);
    currentHumidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;

    dayTimeElement.innerHTML = formatDate(currentDate);
}

function formatDate(currentDate) {

    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[currentDate.getDay()];

    if (hour < 10) {
        hour = `0${hour}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hour}:${minutes}`;
}

function searchCity(city) {
    let apiKey = "5c8o643ae4ebb3ft8e1b94e99eafcfb0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
}

function handleSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

searchCity("Seoul");