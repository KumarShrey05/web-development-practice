import { useState } from 'react'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const UserInput = (e) => { setCity(e.target.value) };

  const search = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
    const data = await response.json();
    const location = data.results[0];
    const { latitude, longitude, name } = location;
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`);
    const weatherData = await weatherResponse.json();

    setWeather({
      name,
      temperature: weatherData.current.temperature_2m,
      humidity: weatherData.current.relative_humidity_2m,
      windSpeed: weatherData.current.wind_speed_10m,
      weatherCode: weatherData.current.weather_code,
    });
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input placeholder="Enter Location..." value={city} onChange={UserInput}></input>
      <button onClick={search}>Search</button>
      {weather && (
        <div>
          <h2>Name: {weather.name}</h2>
          <h2>Temperature: {weather.temperature}°C</h2>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.windSpeed} km/h</p>
        </div>
      )}
    </div>
  )
}

export default App
