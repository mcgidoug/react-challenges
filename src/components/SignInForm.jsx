import React, { useState } from "react";

const SignInForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [nameList, setNameList] = useState([]);

  const handleInputChange = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
  };

  const handleAddName = () => {
    setMessage("A NAME WAS ADDED!");
    setTimeout(() => {
      setMessage("");
    }, 1000);

    const newName = {
      id: nameList.length + 1,
      text: inputValue,
    };

    setNameList([...nameList, newName]);
    setInputValue("");
  };

  const handleDeleteNames = () => {
    setNameList([]);
  };

  return (
    <div>
      <h1>Sign-in Form</h1>
      <input type="text" placeholder="your name" onChange={handleInputChange} />
      <button onClick={handleAddName}>Save</button>
      <button onClick={handleDeleteNames}>Reset</button>
      <h3>Names:</h3>
      <ul>
        {nameList.map((name) => (
          <li key={name.id}>{name.text}</li>
        ))}
      </ul>
      <p>{message}</p>
    </div>
  );
};

export default SignInForm;
