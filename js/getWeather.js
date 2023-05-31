const city = document.querySelector(".weather_city");
const weather_name = document.querySelector('.weather_name');
const weather_temperature = document.querySelector(".weather_temperature");
const weather_icon = document.querySelector(".weather_icon");
const weather_min = document.querySelector('.weather_min');
const weather_max = document.querySelector('.weather_max');
const weather_realfeel = document.querySelector('.weather_realfeel');
const weather_humidity = document.querySelector('.weather_humidity');
const weather_wind = document.querySelector('.weather_wind');
const weather_pressure = document.querySelector('.weather_pressure');

const baseUrl = 'https://api.openweathermap.org/data/2.5'
const API_KEY = '250ac7c5ffbe9aa051b541cce46679ac'

let currCity = "Vilnius";
let units = "metric";

function convertCountryCode(country) {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(country)
}

export const getWeather = () => {
    fetch(`${baseUrl}/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(res => res.json()).then(data => {
        city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`;
        weather_name.innerHTML = `${data.weather[0].main}`;
        weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`;
        weather_icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        weather_min.innerHTML = `Min: ${data.main.temp_min.toFixed()}&#176`;
        weather_max.innerHTML = `Max: ${data.main.temp_max.toFixed()}&#176`;
        weather_realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
        weather_humidity.innerHTML = `${data.main.humidity}%`;
        weather_wind.innerHTML = `${data.wind.speed} ${units === "imperial" ? "mph" : "m/s"}`;
        weather_pressure.innerHTML = `${data.main.pressure} hPa`;
    })
}