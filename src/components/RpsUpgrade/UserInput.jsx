import React from "react";

const UserInput = ({ handleUserInput }) => {
  return (
    <div className="userInput">
      <input type="text" placeholder="your choice" onChange={handleUserInput} />
    </div>
  );
};

export default UserInput;
