
function displayWeather(response) {
    let headTempElement = document.querySelector("#heading-temperature");
    let headTemp = response.data.temperature.current;

    let cityHeading = document.querySelector("#city-heading");
    cityHeading.innerHTML = response.data.city;

    headTempElement.innerHTML = Math.round(headTemp);

    console.log(response.data);
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