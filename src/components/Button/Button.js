import React from "react";

const Button = (props) => {
  const { type, textColor, bgColor, className, children } = props;
  return (
    <button
      type={type}
      className={`bg-${bgColor} text-${textColor} ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
