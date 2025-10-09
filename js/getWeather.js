import { displayForecastData } from "./displayForecastData.js";

const weather_search = document.querySelector(".weather-search-form");
const searchInput = document.querySelector(".weather-search");
const city = document.querySelector(".city");
const weather_name = document.querySelector(".weather-name");
const weather_temperature = document.querySelector(".temp");
const weather_icon = document.querySelector(".weather-icon");
const weather_unit = document.querySelector(".current-unit");
const celsius = document.querySelector(".unit-celsius");
const farenheit = document.querySelector(".unit-farenheit");
const weather_min = document.querySelector(".temp-min");
const weather_max = document.querySelector(".temp-max");
const weather_realfeel = document.querySelector(".weather-realfeel");
const weather_humidity = document.querySelector(".weather-humidity");
const weather_wind = document.querySelector(".weather-wind");
const weather_pressure = document.querySelector(".weather-pressure");
const location_btn = document.querySelector(".location-btn");

const baseUrl = "https://api.openweathermap.org/data/2.5";
const API_KEY = "250ac7c5ffbe9aa051b541cce46679ac";

let currCity = "Bali";
let units = "metric";

function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return regionNames.of(country);
}

weather_search.addEventListener("submit", (e) => {
  let search = searchInput;
  e.preventDefault();
  currCity = search.value;
  getWeather();
  getForecastData();
  search.value = "";
});

celsius.addEventListener("click", () => {
  if (units !== "metric") {
    units = "metric";
    weather_unit.textContent = "Celsius";
    getWeather();
  }
});

farenheit.addEventListener("click", () => {
  if (units !== "imperial") {
    units = "imperial";
    weather_unit.textContent = "Farenheit";
    getWeather();
  }
});

export const getCurrentLocation = () => {
  fetch("https://api.db-ip.com/v2/free/self")
    .then((res) => res.json())
    .then((dataLocation) => {
      currCity = dataLocation.city;
      getWeather();
    })
    .catch((err) => console.error(err));
};

location_btn.addEventListener("click", getCurrentLocation);

const getWeather = () => {
  fetch(`${baseUrl}/weather?q=${currCity}&appid=${API_KEY}&units=${units}`)
    .then((res) => res.json())
    .then((data) => {
      city.textContent = `${data.name}, ${convertCountryCode(
        data.sys.country
      )}`;
      weather_name.textContent = `${data.weather[0].main}`;
      weather_temperature.textContent = `${data.main.temp.toFixed()}°`;
      weather_icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
      weather_min.textContent = `Min: ${data.main.temp_min.toFixed()}°`;
      weather_max.textContent = `Max: ${data.main.temp_max.toFixed()}°`;
      weather_realfeel.textContent = `${data.main.feels_like.toFixed()}°`;
      weather_humidity.textContent = `${data.main.humidity}%`;
      weather_wind.textContent = `${data.wind.speed} ${
        units === "imperial" ? "mph" : "m/s"
      }`;
      weather_pressure.textContent = `${data.main.pressure} hPa`;
    })
    .catch((err) => console.error(err));
  getForecastData();
};

const getForecastData = () => {
  fetch(`${baseUrl}/forecast?q=${currCity}&appid=${API_KEY}&units=${units}`)
    .then((res) => res.json())
    .then((data) => {
      displayForecastData(data);
    });
};
