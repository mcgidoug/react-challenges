import React, { useEffect, useState } from "react";

const BackgroundColorButton = () => {
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log("something has changed");
    if (word === "red") {
      document.body.style.backgroundColor = "red";
    } else if (word === "yellow") {
      document.body.style.backgroundColor = "yellow";
    } else if (word === "green") {
      document.body.style.backgroundColor = "green";
    } else if (word === "blue") {
      document.body.style.backgroundColor = "blue";
    }
  }, [word]);

  const handleClick = () => {
    const words = ["red", "yellow", "green", "blue"];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
  };

  return (
    <div>
      <h1>Random Word</h1>
      <button onClick={handleClick}>Get Word</button>
      <p>{word}</p>
    </div>
  );
};

export default BackgroundColorButton;
