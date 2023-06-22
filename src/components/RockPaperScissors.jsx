import React, { useState } from "react";

const RockPaperScissors = () => {
  const [computerGuess, setComputerGuess] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  // start game with button
  const handleStartClick = () => {
    setShowResult((showResult) => false);
    const computerChoices = ["rock", "paper", "scissors"];
    const computerFinalGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
    setComputerGuess(computerFinalGuess);
  };

  // save user input
  const handleUserInput = (event) => {
    const userChoiceInput = event.target.value;
    setUserChoice(userChoiceInput);
  };

  // compare user & computer and announce winner
  const handleResultMessage = () => {
    setShowResult((showResult) => true);
    if (computerGuess === userChoice) {
      setResult("IT'S A TIE!");
    } else if (computerGuess === "rock" && userChoice === "scissors") {
      setResult("YOU LOSE!");
    } else if (computerGuess === "scissors" && userChoice === "paper") {
      setResult("YOU LOSE!");
    } else if (computerGuess === "paper" && userChoice === "rock") {
      setResult("YOU LOSE!");
    } else {
      setResult("YOU WIN!");
    }
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <h3>Please type in lowercase</h3>
      <h4>Your choices:</h4>
      <ul style={{ listStyleType: "none" }}>
        <li>rock</li>
        <li>paper</li>
        <li>scissors</li>
      </ul>
      {/* inputs */}
      <button onClick={handleStartClick}>Start Game</button>
      <br />
      <input type="text" placeholder="your guess" onChange={handleUserInput} />
      <button onClick={handleResultMessage}>Submit</button>
      {showResult && (
        <div>
          The computer chose {computerGuess} & you chose {userChoice}...{" "}
          {result}
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
