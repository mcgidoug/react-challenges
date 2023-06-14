import React, { useState } from "react";

function ToggleableMessage() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggleClick}>{isVisible ? "HIDE" : "SHOW"}</button>
      {isVisible && <h1>IT'S VISIBLE</h1>}
    </div>
  );
}

export default ToggleableMessage;
