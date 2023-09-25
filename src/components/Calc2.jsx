import React, { useState } from "react";

const Calc2 = () => {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const [operator, setOperator] = useState("");
  const [finalValue, setFinalValue] = useState(0);

  const handleInputs = (event) => {
    if (event.target.id === "first-input") {
      setFirstInput(event.target.value);
    }
    if (event.target.id === "operator-input") {
      setOperator(event.target.value);
    }
    if (event.target.id === "second-input") {
      setSecondInput(event.target.value);
    }
  };

  const handleCalculation = (event) => {
    let num1 = parseInt(firstInput);
    let num2 = parseInt(secondInput);
    let value = 0;

    switch (operator) {
      case "+":
        value = num1 + num2;
        break;
      case "-":
        value = num1 - num2;
        break;
      case "/":
        value = num1 / num2;
        break;
      case "*":
        value = num1 * num2;
        break;
      default:
        value = "Invalid Operator";
    }

    setFinalValue(value);
  };

  return (
    <div>
      <input
        type="text"
        id="first-input"
        placeholder="First Input"
        onChange={handleInputs}
      />
      <input
        type="text"
        id="operator-input"
        placeholder="Operator Input"
        onChange={handleInputs}
      />
      <input
        type="text"
        id="second-input"
        placeholder="Second Input"
        onChange={handleInputs}
      />

      <p>First Input: {firstInput}</p>
      <p>Operator: {operator}</p>
      <p>Second Input: {secondInput}</p>
      <button onClick={handleCalculation}>Calculate!</button>
      <h1>Returns: {finalValue}</h1>
    </div>
  );
};

export default Calc2;
