import React, { useState } from "react";

function ColorPicker2() {
  // TODO: Define the selectedColor state using useState
  const [selectedColor, setSelectedColor] = useState("");
  const colorOptions = ["red", "green", "blue", "yellow", "magenta", "teal"];

  const handleColorSelect = (color) => {
    // TODO: Update the selectedColor state with the selected color
    setSelectedColor(color);
  };

  return (
    <div>
      <h2>Selected Color: {selectedColor}</h2>
      {colorOptions.map((color) => (
        <button key={color} onClick={() => handleColorSelect(color)}>
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColorPicker2;
