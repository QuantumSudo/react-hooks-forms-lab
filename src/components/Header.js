import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
}

export default Header;
