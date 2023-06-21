import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleIsRunning = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      // Start the timer when isRunning is true
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Clean up the interval when the component unmounts or isPaused is false
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Timer</h1>
      <p>Seconds: {seconds}</p>
      <button onClick={handleIsRunning}>{isRunning ? "Pause" : "Start"}</button>
    </div>
  );
}

export default Timer;
