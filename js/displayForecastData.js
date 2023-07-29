export const displayForecastData = (data) => {
  const day_one = document.querySelector(".day_one");
  const day_two = document.querySelector(".day_two");
  const day_three = document.querySelector(".day_three");
  const day_four = document.querySelector(".day_four");
  const day_five = document.querySelector(".day_five");
  const day_one_temp = document.querySelector(".day_one_temp");
  const day_two_temp = document.querySelector(".day_two_temp");
  const day_three_temp = document.querySelector(".day_three_temp");
  const day_four_temp = document.querySelector(".day_four_temp");
  const day_five_temp = document.querySelector(".day_five_temp");

  day_one.innerHTML = data.list[5].dt_txt;
  day_two.innerHTML = data.list[13].dt_txt;
  day_three.innerHTML = data.list[21].dt_txt;
  day_four.innerHTML = data.list[29].dt_txt;
  day_five.innerHTML = data.list[37].dt_txt;
  day_one_temp.innerHTML = data.list[5].main.temp.toFixed() + "&#176";
  day_two_temp.innerHTML = data.list[13].main.temp.toFixed() + "&#176";
  day_three_temp.innerHTML = data.list[21].main.temp.toFixed() + "&#176";
  day_four_temp.innerHTML = data.list[29].main.temp.toFixed() + "&#176";
  day_five_temp.innerHTML = data.list[37].main.temp.toFixed() + "&#176";

  const icon_one = document.createElement("img");
  const icon_two = document.createElement("img");
  const icon_three = document.createElement("img");
  const icon_four = document.createElement("img");
  const icon_five = document.createElement("img");

  icon_one.src = `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`;
  icon_two.src = `http://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`;
  icon_three.src = `http://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`;
  icon_four.src = `http://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`;
  icon_five.src = `http://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png`;

  day_one.append(icon_one);
  day_two.append(icon_two);
  day_three.append(icon_three);
  day_four.append(icon_four);
  day_five.append(icon_five);
};
