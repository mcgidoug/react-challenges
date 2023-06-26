import React, { useEffect, useState } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handlePasswordInput = (event) => {
    const userInput = event.target.value;
    setPassword(userInput);
    console.log(password);
  };

  const handleResponseMessage = () => {
    if (password.length >= 8) {
      setResponse("Strong");
    } else if (password.length >= 6) {
      setResponse("Medium");
    } else {
      setResponse("Weak");
    }
  };

  useEffect(() => {
    handleResponseMessage();
  });

  return (
    <div>
      <h1>Password Strength:</h1>
      <input type="text" placeholder="password" onInput={handlePasswordInput} />
      <p>{response}</p>
    </div>
  );
};

export default PasswordStrength;
