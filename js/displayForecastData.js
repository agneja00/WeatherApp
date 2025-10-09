export const displayForecastData = (data) => {
  const days = [
    { day: ".day-one", temp: ".day-one-temp", index: 5 },
    { day: ".day-two", temp: ".day-two-temp", index: 13 },
    { day: ".day-three", temp: ".day-three-temp", index: 21 },
    { day: ".day-four", temp: ".day-four-temp", index: 29 },
    { day: ".day-five", temp: ".day-five-temp", index: 37 },
  ];

  days.forEach(({ day, temp, index }) => {
    const dayEl = document.querySelector(day);
    const tempEl = document.querySelector(temp);

    dayEl.textContent = data.list[index].dt_txt;
    tempEl.textContent = data.list[index].main.temp.toFixed() + "°";

    const icon = document.createElement("img");
    icon.src = `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}@2x.png`;
    icon.alt = "Weather Icon";
    icon.width = 80;
    icon.height = 80;
    icon.loading = "lazy";

    dayEl.append(icon);
  });
};
