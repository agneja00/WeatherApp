import { displayForecastData } from "./displayForecastData.js";

const weather_search = document.querySelector(".weather-search-form");
const searchInput = document.querySelector(".weather-search");
const cityEl = document.querySelector(".city");
const weatherNameEl = document.querySelector(".weather-name");
const tempEl = document.querySelector(".temp");
const iconEl = document.querySelector(".weather-icon");
const unitEl = document.querySelector(".current-unit");
const celsiusBtn = document.querySelector(".unit-celsius");
const fahrenheitBtn = document.querySelector(".unit-farenheit");
const tempMinEl = document.querySelector(".temp-min");
const tempMaxEl = document.querySelector(".temp-max");
const realFeelEl = document.querySelector(".weather-realfeel");
const humidityEl = document.querySelector(".weather-humidity");
const windEl = document.querySelector(".weather-wind");
const pressureEl = document.querySelector(".weather-pressure");
const locationBtn = document.querySelector(".location-btn");

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "250ac7c5ffbe9aa051b541cce46679ac";

let currentCity = "Bali";
let units = "metric";

function convertCountryCode(code) {
  return new Intl.DisplayNames(["en"], { type: "region" }).of(code);
}

weather_search.addEventListener("submit", (e) => {
  e.preventDefault();
  currentCity = searchInput.value;
  fetchWeather();
  fetchForecast();
  searchInput.value = "";
});

celsiusBtn.addEventListener("click", () => {
  if (units !== "metric") {
    units = "metric";
    unitEl.textContent = "Celsius";
    fetchWeather();
  }
});

fahrenheitBtn.addEventListener("click", () => {
  if (units !== "imperial") {
    units = "imperial";
    unitEl.textContent = "Fahrenheit";
    fetchWeather();
  }
});

export const getCurrentLocation = () => {
  fetch("https://api.db-ip.com/v2/free/self")
    .then((res) => res.json())
    .then((data) => {
      currentCity = data.city;
      fetchWeather();
    })
    .catch(console.error);
};

locationBtn.addEventListener("click", getCurrentLocation);

const fetchWeather = () => {
  fetch(`${BASE_URL}/weather?q=${currentCity}&appid=${API_KEY}&units=${units}`)
    .then((res) => res.json())
    .then((data) => {
      const unitSymbol = units === "metric" ? "°C" : "°F";

      cityEl.textContent = `${data.name}, ${convertCountryCode(
        data.sys.country
      )}`;
      weatherNameEl.textContent = data.weather[0].main;
      tempEl.textContent = `${data.main.temp.toFixed()}${unitSymbol}`;
      iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
      tempMinEl.textContent = `Min: ${data.main.temp_min.toFixed()}${unitSymbol}`;
      tempMaxEl.textContent = `Max: ${data.main.temp_max.toFixed()}${unitSymbol}`;
      realFeelEl.textContent = `${data.main.feels_like.toFixed()}${unitSymbol}`;
      humidityEl.textContent = `${data.main.humidity}%`;
      windEl.textContent = `${data.wind.speed} ${
        units === "imperial" ? "mph" : "m/s"
      }`;
      pressureEl.textContent = `${data.main.pressure} hPa`;
    })
    .catch(console.error);

  fetchForecast();
};

const fetchForecast = () => {
  fetch(`${BASE_URL}/forecast?q=${currentCity}&appid=${API_KEY}&units=${units}`)
    .then((res) => res.json())
    .then((data) => displayForecastData(data, units))
    .catch(console.error);
};
