import React from 'react'

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button className="toggle-btn" onClick={toggleDarkMode}> 
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;