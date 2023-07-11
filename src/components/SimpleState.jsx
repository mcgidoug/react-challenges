import React, { useState } from "react";

const SimpleState = () => {
  const [nameState, setNameState] = useState("");

  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    setNameState(inputValue);
  };

  return (
    <div>
      <h1>Enter your name</h1>
      <input type="text" placeholder="your name" onChange={handleNameChange} />

      <h2>Your name is:</h2>
      <p>{nameState}</p>
    </div>
  );
};

export default SimpleState;
