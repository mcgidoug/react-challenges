import React, { useState } from "react";

function TemperatureConverter() {
  const [fahrenheit, setFahrenheit] = useState(0);
  const [celsius, setCelsius] = useState(0);

  const handleFahrenheitChange = (event) => {
    const newFahrenheit = parseFloat(event.target.value);
    setFahrenheit(newFahrenheit);
    const newCelsius = (newFahrenheit - 32) * (5 / 9);
    setCelsius(newCelsius);
  };

  const handleCelsiusChange = (event) => {
    const newCelsius = parseFloat(event.target.value);
    setCelsius(newCelsius);
    const newFahrenheit = newCelsius * (9 / 5) + 32;
    setFahrenheit(newFahrenheit);
  };

  return (
    <div>
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange} // Assign the event handler here
        />
      </label>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange} // Assign the event handler here
        />
      </label>
    </div>
  );
}

export default TemperatureConverter;
