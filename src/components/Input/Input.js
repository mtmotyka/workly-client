import React from "react";

const Input = (props) => {
  const {
    type,
    name,
    id,
    placeholder,
    value,
    onChange,
    required,
    className,
  } = props;
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      className={`${className} w-full px-4 py-4 outline-none text-lg border-0 rounded bg-gray-200`}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
