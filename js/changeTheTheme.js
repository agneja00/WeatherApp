const body = document.querySelector("body");
const container = document.querySelector(".container");
const weather_search = document.querySelector(".weather_search_form");
const location_btn = document.querySelector(".location_btn");
const weather_card = document.querySelectorAll(".weather_card");
const forecast_card = document.querySelectorAll(".weather_forecast_item");

export const changeTheTheme = (e) => {
  e.target.classList.toggle("bi-moon");
  if (e.target.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "#021624";
    body.style.color = "white";
    body.style.transition = "2s";
    container.style.background = "#022035";
    location_btn.style.background = "#022035";
    location_btn.style.color = "white";
    location_btn.style.borderBottom = "1px solid white";
    weather_card[0].style.background = "#010c14";
    weather_card[1].style.background = "#010c14";
    weather_card[2].style.background = "#010c14";
    weather_card[3].style.background = "#010c14";
    forecast_card[0].style.background = "#010c14";
    forecast_card[1].style.background = "#010c14";
    forecast_card[2].style.background = "#010c14";
    forecast_card[3].style.background = "#010c14";
    forecast_card[4].style.background = "#010c14";
    weather_search[0].style.background = "#010c14";
    weather_search[0].style.color = "white";
  } else {
    body.style.background = "#0765a7";
    body.style.color = "black";
    body.style.transition = "2s";
    container.style.background = "#0a8de8";
    location_btn.style.background = "#0a8de8";
    location_btn.style.color = "black";
    location_btn.style.borderBottom = "1px solid black";
    weather_card[0].style.background = "#2fa4f6";
    weather_card[1].style.background = "#2fa4f6";
    weather_card[2].style.background = "#2fa4f6";
    weather_card[3].style.background = "#2fa4f6";
    forecast_card[0].style.background = "#2fa4f6";
    forecast_card[1].style.background = "#2fa4f6";
    forecast_card[2].style.background = "#2fa4f6";
    forecast_card[3].style.background = "#2fa4f6";
    forecast_card[4].style.background = "#2fa4f6";
    weather_search[0].style.background = "#2fa4f6";
    weather_search[0].style.color = "black";
  }
};
