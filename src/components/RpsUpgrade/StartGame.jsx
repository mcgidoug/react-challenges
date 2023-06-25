import React from "react";

const StartGame = ({ startClick }) => {
  return (
    <div>
      <button onClick={startClick}>GO!</button>
    </div>
  );
};

export default StartGame;
