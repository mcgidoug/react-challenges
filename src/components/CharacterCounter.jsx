import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleTextChange = (event) => {
    // TODO: Update the state with the entered text and the character count
    const updatedText = event.target.value;
    setText(updatedText);
    setCharacterCount(updatedText.length);
  };

  return (
    <div>
      <label>
        Text:
        <input
          type="text"
          placeholder="enter your text"
          value={text}
          onChange={handleTextChange}
        />
      </label>
      <p>Character Count: {characterCount}</p>
    </div>
  );
}

export default CharacterCounter;
