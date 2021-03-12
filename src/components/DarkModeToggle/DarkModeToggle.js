import React, { useContext } from "react";
import { ThemeContext } from "../../theme/theme";

const DarkModeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isDark = () => {
    return theme === "dark";
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isDark()}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      ></input>
      Dark Mode
    </label>
  );
};

export default DarkModeToggle;
