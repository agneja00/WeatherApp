import { changeTheTheme } from "./js/changeTheTheme.js";
import { getWeather } from "./js/getWeather.js";
import { getForecastData } from "./js/getForecastData.js";

const weather_search = document.querySelector(".weather_search_form");
const searchInput = document.querySelector(".weather_search");
const weather_unit = document.querySelector('.weather_unit');
const toggle = document.getElementById('toggleDark');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const celsius = document.querySelector('.weather_unit_celsius');
const farenheit = document.querySelector('.weather_unit_farenheit');

let currCity = "Vilnius";
let units = "metric";

document.body.addEventListener('load', getWeather());
document.body.addEventListener('load', getForecastData());

toggle.addEventListener('click', changeTheTheme);

weather_search.addEventListener('submit', e => {
    e.preventDefault();
    currCity = searchInput.value;
    getWeather();
    getForecastData();
    searchInput.value = "";
})

celsius.addEventListener('click', () => {
    if (units !== "metric") {
        units = "metric";
        weather_unit.innerHTML = "Celsius";
        getWeather();
        getForecastData();
    }
})

farenheit.addEventListener('click', () => {
    if (units !== "imperial") {
        units = "imperial";
        weather_unit.innerHTML = "Farenheit";
        getWeather();
        getForecastData();
    }
})

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `${ampm}`;

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];

}, 1000);