var apiKey;

fetch('../config.json').
then(response => response.json())
.then(data => {
    console.log(data);
    apiKey = data['WEATHER_API_KEY'];
})
.catch(error => console.error('Error fetching JSON:', error));

 // Replace with your OpenWeatherMap API key
// const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const submitBtn = document.querySelector('.search-button');
const weatherApp = document.querySelector('.today-weather');

let CityName = '';
let temperature = '';
let weatherCondition = '';

submitBtn.addEventListener('click', (e) => {
    let cityName = document.querySelector('#cityName').value;
    getWeatherInformation(cityName);
});



function getWeatherInformation(cityName) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then((resolve) => {
            return resolve.json();
        })
        .then((data) => {
            if (data.cod === 200) {
                
                CityName = data.name;
                temperature = data.main['temp'] - 273.15;
                weatherCondition = data.weather[0]['main'];
                let src = '';

                if(weatherCondition === 'Clouds' || weatherCondition === 'Clear'){
                    src = './src/partly_cloudy.png';
                } else if(weatherCondition === 'Rain'){
                    src = './src/rain.png';
                } else if(weatherCondition === 'Sunny'){
                    src = './src/sunny.png';
                }else if(weatherCondition === 'Smoke'){
                    src = './src/fog.png';
                }else{
                    src = './src/WeatherAppFavicon.png';
                }
                const weatherShownTemplate = `
                    <div class="temperature-info">
                            <img src="${src}" alt="WeatherCondition" width="70" height="70">
                            <h1>${temperature.toFixed(2)}<sup>°C</span></h1>  
                    </div>
                    <div class="areaDetail">
                        <h2>City Name: <span>${CityName}</span></h2>
                        <h2>Weather Condition: <span>${weatherCondition}</span></h2>
                    </div>
                `;
                weatherApp.style.display = 'block';
                weatherApp.innerHTML = weatherShownTemplate;
                // console.log(`City: ${CityName}, Temperature ${temperature.toFixed(2)}°C, Weather Condition: ${weatherCondition}`);
                console.log(data);
            } else if (data.cod === 401) {
                throw new Error('Error 401 - Unauthorized');
            } else if (data.cod === 400) {
                throw new Error('Error 400 - Bad Request.');
            } else if (data.cod === 404) {
                throw new Error('Error 404 - Not Found.');
            } else if (data.cod === 429) {
                throw new Error('Error 429 - Too Many Requests.');
            } else {
                throw new Error('Error 400 - Bad Request.');
            }
        })
        .catch((reject) => {
            alert('Invalid Input')
            console.error(reject.message);
        });

}