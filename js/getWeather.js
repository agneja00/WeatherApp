import { displayForecastData } from "./displayForecastData.js";

const weather_search = document.querySelector(".weather_search_form");
const searchInput = document.querySelector(".weather_search");
const city = document.querySelector(".weather_city");
const weather_name = document.querySelector(".weather_name");
const weather_temperature = document.querySelector(".weather_temperature");
const weather_icon = document.querySelector(".weather_icon");
const weather_unit = document.querySelector(".weather_unit");
const celsius = document.querySelector(".weather_unit_celsius");
const farenheit = document.querySelector(".weather_unit_farenheit");
const weather_min = document.querySelector(".weather_min");
const weather_max = document.querySelector(".weather_max");
const weather_realfeel = document.querySelector(".weather_realfeel");
const weather_humidity = document.querySelector(".weather_humidity");
const weather_wind = document.querySelector(".weather_wind");
const weather_pressure = document.querySelector(".weather_pressure");
const location_btn = document.querySelector(".location_btn");

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
      city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`;
      weather_name.innerHTML = `${data.weather[0].main}`;
      weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`;
      weather_icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
      weather_min.innerHTML = `Min: ${data.main.temp_min.toFixed()}&#176`;
      weather_max.innerHTML = `Max: ${data.main.temp_max.toFixed()}&#176`;
      weather_realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
      weather_humidity.innerHTML = `${data.main.humidity}%`;
      weather_wind.innerHTML = `${data.wind.speed} ${
        units === "imperial" ? "mph" : "m/s"
      }`;
      weather_pressure.innerHTML = `${data.main.pressure} hPa`;
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
