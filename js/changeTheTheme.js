const body = document.querySelector("body");
const weather_search = document.querySelector(".weather-search");
const theme_mode = document.querySelector(".theme-mode");
const location_btn = document.querySelector(".location-btn");
const celsius = document.querySelector(".unit-celsius");
const farenheit = document.querySelector(".unit-farenheit");
const weather_card = document.querySelectorAll(".weather-card");
const forecast_card = document.querySelectorAll(".weather-forecast-card");

export const changeTheTheme = (e) => {
  e.target.classList.toggle("bi-brightness-high-fill");
  if (e.target.classList.toggle("bi-moon")) {
    body.style.backgroundColor = "#4accfe";
    body.style.color = "black";
    body.style.transition = "2s";
    weather_search.style.backgroundColor = "#0197d0";
    theme_mode.textContent = "Dark mode:";
    location_btn.style.backgroundColor = "#0197d0";
    location_btn.style.color = "black";
    weather_card[0].style.backgroundColor = "#01a3e1";
    weather_card[1].style.backgroundColor = "#01a3e1";
    weather_card[2].style.backgroundColor = "#01a3e1";
    weather_card[3].style.backgroundColor = "#01a3e1";
    forecast_card[0].style.backgroundColor = "#01a3e1";
    forecast_card[1].style.backgroundColor = "#01a3e1";
    forecast_card[2].style.backgroundColor = "#01a3e1";
    forecast_card[3].style.backgroundColor = "#01a3e1";
    forecast_card[4].style.backgroundColor = "#01a3e1";
    weather_search.addEventListener("focusin", (event) => {
      event.target.style.backgroundColor = "#017eae";
    });
    weather_search.addEventListener("focusout", (event) => {
      event.target.style.backgroundColor = "#0197d0";
    });
    location_btn.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "#017eae";
    });
    location_btn.addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "#0197d0";
    });
    // light
  } else {
    body.style.backgroundColor = "#00415a";
    body.style.color = "white";
    body.style.transition = "2s";
    weather_search.style.backgroundColor = "#002838";
    theme_mode.textContent = "Light mode:";
    location_btn.style.backgroundColor = "#002838";
    location_btn.style.color = "white";
    weather_card[0].style.backgroundColor = "#001016";
    weather_card[1].style.backgroundColor = "#001016";
    weather_card[2].style.backgroundColor = "#001016";
    weather_card[3].style.backgroundColor = "#001016";
    forecast_card[0].style.backgroundColor = "#001016";
    forecast_card[1].style.backgroundColor = "#001016";
    forecast_card[2].style.backgroundColor = "#001016";
    forecast_card[3].style.backgroundColor = "#001016";
    forecast_card[4].style.backgroundColor = "#001016";
    weather_search.addEventListener("focusin", (event) => {
      event.target.style.backgroundColor = "#001016";
    });
    weather_search.addEventListener("focusout", (event) => {
      event.target.style.backgroundColor = "#002838";
    });
    location_btn.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "#001016";
    });
    location_btn.addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "#002838";
    });
  }
};