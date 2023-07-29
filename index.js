import { changeTheTheme } from "./js/changeTheTheme.js";
import { getCurrentLocation } from "./js/getWeather.js";

const toggle = document.getElementById("toggleDark");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

document.body.addEventListener("load", getCurrentLocation());

toggle.addEventListener("click", changeTheTheme);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  timeEl.innerHTML =
    (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    " " +
    `${ampm}`;

  dateEl.innerHTML = days[day] + ", " + date + " " + months[month];
}, 1000);
