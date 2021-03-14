import React from "react";

const Input = (props) => {
  const {
    type,
    name,
    id,
    label,
    placeholder,
    value,
    onChange,
    required,
    className,
    children,
    disabled,
  } = props;
  return (
    <div className="input-gropup relative flex flex-col items-start justify-start mb-8 w-full">
      <label htmlFor={name} className="mb-2 text-primary text-sm opacity-40">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        className={`${className} w-full bg-primary px-4 py-2 outline-none text-md border border-solid placeholder-disabled focus:border-purple-main border-input  ${
          disabled ? "text-disabled" : "text-primary"
        }`}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      {children}
    </div>
  );
};

export default Input;
