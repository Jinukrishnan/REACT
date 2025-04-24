// App.js
import React from "react";

import Header from "./Header";
import Content from "./Content";
import { ThemeProvider } from "./ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
};

export default App;
