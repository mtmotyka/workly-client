import React from "react";
import {
  ButtonType,
  ButtonSize,
  ButtonRounded,
  ButtonShadow,
  IconType,
} from "../../theme/theme";

const Button = (props) => {
  const {
    type,
    color,
    size,
    rounded,
    shadow,
    children,
    className,
    icon,
  } = props;
  return (
    <button
      type={type}
      className={`${ButtonType[color]} ${ButtonSize[size]} ${ButtonRounded[rounded]} ${ButtonShadow[shadow]} ${className} transition-all flex items-center justify-between`}
      onClick={props.onClick}
    >
      {IconType[icon]}
      {children}
    </button>
  );
};

export default Button;
