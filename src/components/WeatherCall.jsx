import React, { useEffect, useState, useCallback } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeatherData = useCallback(async () => {
    try {
      const apiKey = "f1ca64ad1d9048ede6bc992bc906defa";
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setWeatherData(data);
      setCity(data.city.name);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  return (
    <div>
      <h1 className="text-white text-3xl">WEATHER</h1>
      {weatherData && (
        <div>
          <h2>Current Weather in {city} is ...</h2>
        </div>
      )}
    </div>
  );
}
