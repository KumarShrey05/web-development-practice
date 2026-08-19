const userInput = document.getElementById("userInput");
const output = document.getElementById("weatherResult");
const form = document.getElementById("weatherForm");

async function weather(val) {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${val}&count=1`,
    );

    const data = await response.json();

    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;
    const cityName = data.results[0].name;

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`,
    );

    const weatherData = await weatherResponse.json();

    const temperature = weatherData.current.temperature_2m;
    const humidity = weatherData.current.relative_humidity_2m;
    const windSpeed = weatherData.current.wind_speed_10m;
    const weatherCode = weatherData.current.weather_code;

    let condition;
    let icon;

    if (weatherCode === 0) {
      condition = "Clear Sky";
      icon = "☀️";
    } else if (weatherCode === 1 || weatherCode === 2) {
      condition = "Partly Cloudy";
      icon = "🌤️";
    } else if (weatherCode === 3) {
      condition = "Cloudy";
      icon = "☁️";
    } else if (weatherCode >= 51 && weatherCode <= 67) {
      condition = "Rainy";
      icon = "🌧️";
    } else if (weatherCode >= 71 && weatherCode <= 77) {
      condition = "Snowy";
      icon = "❄️";
    } else if (weatherCode >= 80 && weatherCode <= 82) {
      condition = "Rain Showers";
      icon = "🌦️";
    } else if (weatherCode >= 95) {
      condition = "Thunderstorm";
      icon = "⛈️";
    } else {
      condition = "Unknown";
      icon = "🌡️";
    }

    output.innerHTML = `
            <div class="weather-card">
                <h2>${cityName}</h2>

                <div class="weather-icon">
                    ${icon}
                </div>

                <h3>${temperature} °C</h3>

                <p>${condition}</p>

                <div class="weather-details">
                    <p>💧 Humidity: ${humidity}%</p>
                    <p>💨 Wind Speed: ${windSpeed} km/h</p>
                </div>
            </div>
        `;
  } catch (error) {
    console.log(error);

    output.innerHTML = `
            <div class="weather-details"><p>Unable to find weather information.</p></div>
        `;
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  await weather(userInput.value);
});
