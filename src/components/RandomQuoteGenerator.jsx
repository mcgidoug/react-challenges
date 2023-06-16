import React from "react";
import { useState } from "react";

export const RandomQuoteGenerator = () => {
  const quotes = ["hello", "im here", "this is great", "nice 2 meet u"];

  const [quote, setQuote] = useState("");

  const handleRandomQuote = () => {
    let quotesArray = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(quotesArray);
  };

  return (
    <div>
      <h1>Quote: {quote}</h1>
      <button onClick={handleRandomQuote}>Generate</button>
    </div>
  );
};
