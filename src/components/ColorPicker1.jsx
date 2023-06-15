import React, { useState } from "react";

function ColorPicker() {
  // TODO: Define the selectedColor state using useState
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelect = (color) => {
    // TODO: Update the selectedColor state with the selected color
    setSelectedColor(color);
  };

  return (
    <div>
      <h2>Selected Color: {selectedColor}</h2>
      <button onClick={() => handleColorSelect("red")}>Red</button>
      <button onClick={() => handleColorSelect("green")}>Green</button>
      <button onClick={() => handleColorSelect("blue")}>Blue</button>
      <button onClick={() => handleColorSelect("yellow")}>Yellow</button>
    </div>
  );
}

export default ColorPicker;
