import React, { useState } from "react";

export const ButtonRender = () => {
  const [numberState, setNumberState] = useState();
  const handleButtonClick = (event) => {
    setNumberState(event.target.name);
  };

  return (
    <div>
      <button name="1" key="1" onClick={handleButtonClick}>
        1
      </button>
      <button name="2" key="2" onClick={handleButtonClick}>
        2
      </button>
      <button name="3" key="3" onClick={handleButtonClick}>
        3
      </button>
      <button name="4" key="4" onClick={handleButtonClick}>
        4
      </button>
      <button name="5" key="5" onClick={handleButtonClick}>
        5
      </button>

      <h1>Returns: {numberState}</h1>
    </div>
  );
};
