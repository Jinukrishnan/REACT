// Header.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        padding: "10px",
        backgroundColor: theme === "light" ? "#f4f4f4" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Theme App</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "5px 10px",
          border: "none",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
        }}
      >
        Toggle Theme
      </button>
    </header>
  );
};

export default Header;
