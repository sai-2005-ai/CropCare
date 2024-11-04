import React, { useState, useEffect } from 'react';

const WeatherConditions = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Simulate weather fetching. In a real scenario, you would use an API like OpenWeatherMap.
    const fetchWeather = () => {
      setWeather({
        temperature: 28,
        humidity: 75,
        condition: "Sunny",
      });
    };
    fetchWeather();
  }, []);

  return (
    <div>
      <h2>Weather and Soil Conditions</h2>
      {weather ? (
        <div>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Condition: {weather.condition}</p>
          <p>
            Suggestion: {weather.condition === "Sunny" ? "Water the crops" : "Monitor for fungal diseases."}
          </p>
        </div>
      ) : (
        <p>Loading weather conditions...</p>
      )}
    </div>
  );
};

export default WeatherConditions;