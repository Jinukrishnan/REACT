// Content.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";


const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#444",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
      }}
    >
      <p>
        This is the {theme === "light" ? "light" : "dark"} theme. You can toggle
        the theme using the button above.
      </p>
    </main>
  );
};

export default Content;
