import React from "react";
import { useState } from "react";

const InputList = () => {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    setList([...list, userInput]);
    setUserInput("");
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter" && userInput.trim() !== "") {
      setList([...list, userInput]);
      setUserInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={handleUserInput}
        onKeyDown={handleInputKeyPress}
      />
      <button onClick={handleButtonClick}>Add</button>
      <h1>List Item to be added: </h1>
      <h3>{userInput}</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputList;
