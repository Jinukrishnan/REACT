// A Higher-Order Component (HOC) in React is a function that takes a component as an 
// argument and returns a new component. It is a pattern used for reusing component logic.
// HOCs are commonly used for tasks such as:
// Code reuse and logic abstraction.
// Managing cross-cutting concerns (e.g., authentication, logging, etc.).
// Adding additional functionality to components.
import React, { useState, useEffect } from 'react';
import DataDisplay from './BaseComponent';
import withLoader from './HOC';
// HOCs are essentially pure functions. They wrap a base component, enhance it, and return the enhanced component.
const EnhancedDataDisplay = withLoader(DataDisplay);

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetch
    setTimeout(() => {
      setData(['Item 1', 'Item 2', 'Item 3']);
      setIsLoading(false);
    }, 2000);
  }, []);

  return <EnhancedDataDisplay isLoading={isLoading} data={data} />;
};

export default App;
