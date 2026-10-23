# 🌤️ Weather & Air Quality Dashboard

A responsive, lightweight web application built with Vanilla JavaScript (ES6+), HTML5, and CSS3. It fetches real-time weather metrics and Air Quality Index (AQI) data for cities worldwide using the Open-Meteo REST API and provides persistent saved cities via browser `localStorage`.

---

## 🔗 Live Demo & Links
* **Live Application:** [https://hemangini230507.github.io/weather-dashboard/](https://hemangini230507.github.io/weather-dashboard/)
* **GitHub Repository:** [https://github.com/hemangini230507/weather-dashboard](https://github.com/hemangini230507/weather-dashboard)

---

## ✨ Features
* **Global Search:** Instant city lookup powered by geocoding API.
* **Real-Time Weather Metrics:** Current temperature (°C), humidity (%), and wind speed (km/h).
* **Air Quality Index (AQI):** Visual indicators for overall AQI status along with PM2.5 and PM10 pollutant concentrations.
* **Persistent Saved Cities:** Quick-access location chips stored locally in `localStorage` across browser sessions.
* **Responsive Layout:** Clean, mobile-friendly interface designed using CSS Flexbox & Grid.

---

## 🛠️ Tech Stack
* **Frontend:** Vanilla JavaScript (ES6+ Modules), HTML5, CSS3
* **API Integration:** Open-Meteo REST API (Geocoding, Forecast, and Air Quality endpoints)
* **Storage:** Browser `localStorage`
* **Deployment:** GitHub Pages

---

## 📂 Project Structure
```text
weather-dashboard/
├── css/
│   └── style.css       # Layout & styling rules
├── js/
│   ├── api.js          # API service layer (Open-Meteo endpoints)
│   ├── app.js          # Main controller & DOM rendering logic
│   └── storage.js      # LocalStorage management
├── index.html          # Main HTML markup
└── README.md           # Project documentation