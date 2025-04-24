// App.js
import React, { useState, useCallback } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // Memoized callback function
  const handleAddNumber = useCallback(() => {
    setNumbers((prevNumbers) => [...prevNumbers, prevNumbers.length + 1]);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
      <div style={{ marginTop: "20px" }}>
        {numbers.map((num, index) => (
          <div key={index}>Number: {num}</div>
        ))}
      </div>
      <Child addNumber={handleAddNumber} />
    </div>
  );
};

export default App;
