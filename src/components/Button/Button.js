import React from "react";
import { ButtonType, ButtonSize, ButtonRounded } from "../../theme/theme";

const Button = (props) => {
  const { type, color, size, rounded, children, className } = props;
  return (
    <button
      type={type}
      className={`${ButtonType[color]} ${ButtonSize[size]} ${ButtonRounded[rounded]} ${className} transition-all`}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
