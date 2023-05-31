import { displayForecastData } from "./displayForecastData.js";

const baseUrl = 'https://api.openweathermap.org/data/2.5'
const API_KEY = '250ac7c5ffbe9aa051b541cce46679ac'

let currCity = "Vilnius";
let units = "metric";

export const getForecastData = () => {
    fetch(`${baseUrl}/forecast?q=${currCity}&appid=${API_KEY}&units=${units}`).then(res => res.json()).then(data => {
        displayForecastData(data);
    })
}