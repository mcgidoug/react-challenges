import React, { useState } from "react";

function SimpleCalculator() {
  // TODO: Define the states for number1, number2, and sum using useState
  const [numOneState, setNumOneState] = useState(0);
  const [numTwoState, setNumTwoState] = useState(0);
  const [sum, setSum] = useState(0);

  // TODO: Implement event handlers for number1 and number2 input fields
  const handleNumOneChange = (event) => {
    const newNumOne = parseInt(event.target.value);
    setNumOneState(newNumOne);
    const newSum = newNumOne + numTwoState;
    setSum(newSum);
  };

  const handleNumTwoChange = (event) => {
    const newNumTwo = parseInt(event.target.value);
    setNumTwoState(newNumTwo);
    const newSum = newNumTwo + numOneState;
    setSum(newSum);
  };

  return (
    <div>
      <label>
        Number 1:
        <input
          type="number"
          value={numOneState}
          onChange={handleNumOneChange}
        />
      </label>
      <label>
        Number 2:
        <input
          type="number"
          value={numTwoState}
          onChange={handleNumTwoChange}
        />
      </label>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SimpleCalculator;
