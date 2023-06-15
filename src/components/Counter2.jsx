import React, { useState } from "react";

function Counter() {
  // TODO: Define the count state using useState
  const [counter, setCounter] = useState(0);

  // TODO: Implement event handlers for increment, decrement, and reset
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      {/* TODO: Render the count value */}
      <h2>Count: {counter}</h2>
      {/* TODO: Implement the increment, decrement, and reset buttons */}
      <button onClick={() => handleDecrement()}>Decrement</button>
      <button onClick={() => handleIncrement()}>Increment</button>
    </div>
  );
}

export default Counter;
