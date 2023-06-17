import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // TODO: Implement the timer logic using setInterval

    // Function to increment the seconds state
    const tick = () => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    };

    // Start the timer when the component mounts
    const intervalId = setInterval(tick, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>Timer</h1>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default Timer;
