import React, { useState } from "react";

const RandListCreator = () => {
  const [list, setList] = useState([]);

  const handleButtonClick = () => {
    let words = ["hi", "dog", "banana", "pop", "bye", "good"];
    let random = words[Math.floor(Math.random() * words.length)];
    setList([...list, random]);
  };

  return (
    <div>
      <h1>List Items:</h1>
      <button onClick={handleButtonClick}>Press Me</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandListCreator;
