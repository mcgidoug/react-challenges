import React, { useState, useEffect } from "react";

const SimpleFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h1>API Results</h1>
      {data.map((item) => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
    </div>
  );
};

export default SimpleFetch;

// https://jsonplaceholder.typicode.com/posts
