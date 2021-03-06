import React, { useEffect, useState, createContext } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { IoMdAddCircleOutline } from "react-icons/io";

/* ---=== DARK MODE ===--- */

const getInitialTheme = (_) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "dark";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(
    (_) => {
      rawSetTheme(theme);
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/* ---=== BUTTONS ===--- */

export const ButtonType = {
  transparent:
    "bg-transparent text-gray-400 font-light text-center hover:bg-gray-300 hover:text-gray-500 hover:bg-opacity-20 border border-solid border-gray-300",
  green: "bg-green-main hover:bg-green-600 font-light text-white text-center",
  grereden: "bg-red-main hover:bg-red-600 font-light text-white text-center",
  greenTransparent:
    "bg-transparent hover:bg-green-300 hover:bg-opacity-20 hover:text-green-main border border-green-main text-green-main font-light text-center",
  redTransparent:
    "bg-transparent hover:bg-red-700 hover:bg-opacity-20 hover:text-red-700 border border-red-main text-red-main text-center",
  yellow: "bg-yellow-100 hover:bg-yellow-200 text-yellow-600 text-center",
  gray: "bg-gray-200 hover:bg-gray-300 text-gray-600 text-center",
};

export const ButtonSize = {
  xxs: "py-1 px-4 text-xs",
  xs: "py-2 px-5 text-xs",
  sm: "py-2 px-7 text-sm",
  md: "py-3 px-12 text-md",
};

export const ButtonRounded = {
  xs: "rounded-xs",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export const ButtonShadow = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
};

export const IconType = {
  complete: <FcCheckmark className="mr-2" size="1.2em" />,
  edit: <BsPencil className="mr-2" size="1.3em" />,
  delete: <AiOutlineDelete className="mr-2" size="1.3em" />,
  add: <IoMdAddCircleOutline className="mr-2" size="1.3em" />,
};
