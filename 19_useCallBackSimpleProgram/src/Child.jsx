// Child.js
import React from "react";

const Child = React.memo(({ addNumber }) => {
  console.log("Child component re-rendered!");

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={addNumber}>Add Number</button>
    </div>
  );
});

export default Child;
