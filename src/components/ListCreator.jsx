import React from "react";
import { useState } from "react";

const ListCreator = () => {
  const [count, setCount] = useState(1);
  const [list, setListItems] = useState([]);

  const handleListItems = () => {
    setCount(count + 1);
    setListItems([...list, count]);
  };

  return (
    <div>
      <h1>List</h1>
      <button onClick={handleListItems}>Press Me</button>
      <h2>New Items:</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListCreator;
