import React, { useState } from "react";

function ButtonCounter() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default ButtonCounter;
