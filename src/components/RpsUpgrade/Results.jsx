import React, { useEffect, useState } from "react";

const Results = ({ userChoice, computerChoice }) => {
  const [results, setResults] = useState("");

  useEffect(() => {
    handleResultMessage();
  });

  const handleResultMessage = () => {
    if (!["rock", "paper", "scissors"].includes(userChoice)) {
      setResults("Please make a valid choice.");
    } else if (computerChoice === userChoice) {
      setResults("IT'S A TIE!");
    } else if (computerChoice === "rock" && userChoice === "scissors") {
      setResults("YOU LOSE!");
    } else if (computerChoice === "scissors" && userChoice === "paper") {
      setResults("YOU LOSE!");
    } else if (computerChoice === "paper" && userChoice === "rock") {
      setResults("YOU LOSE!");
    } else {
      setResults("YOU WIN!");
    }
  };

  return (
    <div>
      {results === "Please make a valid choice." ? (
        <p>{results}</p>
      ) : (
        <p>
          You chose {userChoice} & the computer chose {computerChoice}...{" "}
          {results}
        </p>
      )}
    </div>
  );
};

export default Results;
