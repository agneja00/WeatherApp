const body = document.querySelector('body');
const weather_search = document.querySelector(".weather_search_form");
const weather_card = document.querySelectorAll('.weather_card');
const forecast_card = document.querySelectorAll('.weather_forecast_item');
const glass = document.querySelector('.fa-magnifying-glass');

export const changeTheTheme = (e) => {
    e.target.classList.toggle('bi-moon');
    if (e.target.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        weather_card[0].style.background = '#1e1e1e';
        weather_card[1].style.background = '#1e1e1e';
        weather_card[2].style.background = '#1e1e1e';
        weather_card[3].style.background = '#1e1e1e';
        forecast_card[0].style.background = '#1e1e1e';
        forecast_card[1].style.background = '#1e1e1e';
        forecast_card[2].style.background = '#1e1e1e';
        forecast_card[3].style.background = '#1e1e1e';
        forecast_card[4].style.background = '#1e1e1e';
        weather_search[0].style.background = '#1e1e1e';
        weather_search[0].style.color = 'white';
        glass.style.color = 'white';
    } else {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        weather_card[0].style.background = 'grey';
        weather_card[1].style.background = 'grey';
        weather_card[2].style.background = 'grey';
        weather_card[3].style.background = 'grey';
        forecast_card[0].style.background = 'grey';
        forecast_card[1].style.background = 'grey';
        forecast_card[2].style.background = 'grey';
        forecast_card[3].style.background = 'grey';
        forecast_card[4].style.background = 'grey';
        weather_search[0].style.background = 'grey';
        weather_search[0].style.color = 'black';
        glass.style.color = 'black';
    }
}

