import React from "react";
import {
  ButtonType,
  ButtonSize,
  ButtonRounded,
  IconType,
} from "../../theme/theme";

const Button = (props) => {
  const { type, color, size, rounded, children, className, icon } = props;
  return (
    <button
      type={type}
      className={`${ButtonType[color]} ${ButtonSize[size]} ${ButtonRounded[rounded]} ${className} transition-all flex items-center justify-between`}
      onClick={props.onClick}
    >
      {IconType[icon]}
      {children}
    </button>
  );
};

export default Button;
