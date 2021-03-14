import React, { useContext } from "react";
import { ThemeContext } from "../../theme/theme";
import { FiSun, FiMoon } from "react-icons/fi";

import "./dark_mode_toggle.scss";

const DarkModeToggle = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isDark = () => {
    return theme === "dark";
  };

  return (
    <div className={`${props.className} dark-mode-toggle`}>
      <label>
        <input
          checked={isDark()}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          class="toggle-checkbox"
          type="checkbox"
        ></input>
        <div class="toggle-slot">
          <div class="sun-icon-wrapper">
            <FiSun
              style={{ color: "ffbb52" }}
              size="6em"
              className="absolute -top-2"
            />
          </div>
          <div class="toggle-button"></div>
          <div class="moon-icon-wrapper">
            <FiMoon
              style={{ color: "#fff" }}
              size="6em"
              className="absolute -top-2"
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
