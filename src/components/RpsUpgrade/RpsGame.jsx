import React, { useState } from "react";
import StartGame from "./StartGame";
import UserInput from "./UserInput";
import Results from "./Results";

const RpsGame = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleUserInput = (event) => {
    const userChoiceInput = event.target.value;
    setUserChoice(userChoiceInput);
  };

  const handleStartClick = () => {
    setShowResult((showResult) => true);
    const cpuChoices = ["rock", "paper", "scissors"];
    const cpuFinalGuess =
      cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
    setComputerChoice(cpuFinalGuess);
  };

  return (
    <div className="RpsGame">
      <h1>Welcome to RPS!</h1>
      <p>
        <b>Input:</b> "rock", "paper", or "scissors"
      </p>
      {/* store user input */}
      <UserInput handleUserInput={handleUserInput} />
      {/* start game with button */}
      <StartGame startClick={handleStartClick} />
      {/* results comparison */}
      {showResult && (
        <div>
          <Results computerChoice={computerChoice} userChoice={userChoice} />
        </div>
      )}
    </div>
  );
};

export default RpsGame;
