export const displayForecastData = (data) => {
  const day_one = document.querySelector(".day-one");
  const day_two = document.querySelector(".day-two");
  const day_three = document.querySelector(".day-three");
  const day_four = document.querySelector(".day-four");
  const day_five = document.querySelector(".day-five");
  const day_one_temp = document.querySelector(".day-one-temp");
  const day_two_temp = document.querySelector(".day-two-temp");
  const day_three_temp = document.querySelector(".day-three-temp");
  const day_four_temp = document.querySelector(".day-four-temp");
  const day_five_temp = document.querySelector(".day-five-temp");

  day_one.textContent = data.list[5].dt_txt;
  day_two.textContent = data.list[13].dt_txt;
  day_three.textContent = data.list[21].dt_txt;
  day_four.textContent = data.list[29].dt_txt;
  day_five.textContent = data.list[37].dt_txt;
  day_one_temp.textContent = data.list[5].main.temp.toFixed() + "°";
  day_two_temp.textContent = data.list[13].main.temp.toFixed() + "°";
  day_three_temp.textContent = data.list[21].main.temp.toFixed() + "°";
  day_four_temp.textContent = data.list[29].main.temp.toFixed() + "°";
  day_five_temp.textContent = data.list[37].main.temp.toFixed() + "°";

  const icon_one = document.createElement("img");
  const icon_two = document.createElement("img");
  const icon_three = document.createElement("img");
  const icon_four = document.createElement("img");
  const icon_five = document.createElement("img");

  icon_one.src = `https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`;
  icon_two.src = `https://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`;
  icon_three.src = `https://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`;
  icon_four.src = `https://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`;
  icon_five.src = `https://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`;

  icon_one.alt = "Weather Icon";
  icon_two.alt = "Weather Icon";
  icon_three.alt = "Weather Icon";
  icon_four.alt = "Weather Icon";
  icon_five.alt = "Weather Icon";

  day_one.append(icon_one);
  day_two.append(icon_two);
  day_three.append(icon_three);
  day_four.append(icon_four);
  day_five.append(icon_five);
};
