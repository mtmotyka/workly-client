import React from "react";
import { ButtonType, ButtonSize } from "../../theme/theme";

const Button = (props) => {
  const { type, color, size, children, className } = props;
  return (
    <button
      type={type}
      className={`${ButtonType[color]} ${ButtonSize[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
