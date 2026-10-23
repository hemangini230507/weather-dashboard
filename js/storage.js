const STORAGE_KEY = 'weather_saved_cities';

export function getSavedCities() {
  const cities = localStorage.getItem(STORAGE_KEY);
  return cities ? JSON.parse(cities) : ['Prague', 'London', 'Tokyo'];
}

export function saveCity(cityName) {
  const cities = getSavedCities();
  if (!cities.map(c => c.toLowerCase()).includes(cityName.toLowerCase())) {
    cities.push(cityName);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cities));
  }
}