import { getCoordinates, getWeatherData } from './api.js';
import { getSavedCities, saveCity } from './storage.js';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const favoritesList = document.getElementById('favoritesList');
const weatherDisplay = document.getElementById('weatherDisplay');
const statusMsg = document.getElementById('statusMsg');
const saveFavBtn = document.getElementById('saveFavBtn');

let currentCity = '';

async function loadWeather(city) {
  showStatus('Fetching weather data...', false);
  try {
    const coords = await getCoordinates(city);
    const { weather, aqi } = await getWeatherData(coords.latitude, coords.longitude);
    
    currentCity = coords.name;
    document.getElementById('cityName').textContent = `${coords.name}, ${coords.country || ''}`;
    document.getElementById('temperature').textContent = Math.round(weather.current_weather.temperature);
    document.getElementById('weatherDesc').textContent = `Windspeed: ${weather.current_weather.windspeed} km/h`;
    document.getElementById('humidity').textContent = `${weather.hourly.relativehumidity_2m[0]}%`;
    document.getElementById('windSpeed').textContent = `${weather.current_weather.windspeed} km/h`;

    const usAqi = aqi.current.us_aqi || 30;
    document.getElementById('aqiBadge').textContent = usAqi;
    document.getElementById('aqiStatus').textContent = usAqi <= 50 ? 'Good Air Quality' : 'Moderate / Unhealthy';
    document.getElementById('pm25').textContent = aqi.current.pm2_5 || '--';
    document.getElementById('pm10').textContent = aqi.current.pm10 || '--';

    statusMsg.classList.add('hidden');
    weatherDisplay.classList.remove('hidden');
  } catch (err) {
    showStatus(err.message, true);
  }
}

function showStatus(msg, isError) {
  statusMsg.textContent = msg;
  statusMsg.style.color = isError ? '#ff6b6b' : '#fff';
  statusMsg.classList.remove('hidden');
  weatherDisplay.classList.add('hidden');
}

function renderFavorites() {
  const cities = getSavedCities();
  favoritesList.innerHTML = '';
  cities.forEach(city => {
    const chip = document.createElement('span');
    chip.className = 'fav-chip';
    chip.textContent = city;
    chip.onclick = () => loadWeather(city);
    favoritesList.appendChild(chip);
  });
}

searchBtn.onclick = () => {
  if (cityInput.value.trim()) loadWeather(cityInput.value.trim());
};

saveFavBtn.onclick = () => {
  if (currentCity) {
    saveCity(currentCity);
    renderFavorites();
  }
};

// Initial Load
renderFavorites();
loadWeather('Prague');