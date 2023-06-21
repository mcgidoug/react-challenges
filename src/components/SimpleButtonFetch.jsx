import React, { useState, useEffect } from "react";

const SimpleButtonFetch = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isFetching) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((actualData) => setData(actualData))
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [isFetching]);

  const handleFetchClick = () => {
    setIsFetching(true);
  };

  return (
    <div>
      <h1>API Results</h1>
      <button onClick={handleFetchClick}>Fetch Data</button>
      {data.map((item) => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
    </div>
  );
};

export default SimpleButtonFetch;
