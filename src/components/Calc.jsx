import React, { useState } from "react";

const Calc = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [operator, setOperator] = useState("+");
  const [finalValue, setFinalValue] = useState(0);

  const handleValueSets = (event) => {
    if (event.target.name === "firstValue") {
      setFirstValue(event.target.value);
    }
    if (event.target.name === "secondValue") {
      setSecondValue(event.target.value);
    }
    if (event.target.name === "operator") {
      setOperator(event.target.value);
    }
  };

  const handleCalculation = (event) => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    let result = 0;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      default:
        result = "Invalid Operator";
    }

    setFinalValue(result);
  };

  return (
    <div className="p-4">
      <div>{firstValue}</div>
      <div>{secondValue}</div>
      <input
        type="text"
        name="firstValue"
        id=""
        placeholder="first value"
        onChange={handleValueSets}
      />
      <input type="text" name="operator" id="" placeholder="operator" />
      <input
        type="text"
        name="secondValue"
        id=""
        placeholder="second value"
        onChange={handleValueSets}
      />
      <button onClick={handleCalculation}>Calculate</button>
      <h1>Equals: {finalValue}</h1>
    </div>
  );
};

export default Calc;
