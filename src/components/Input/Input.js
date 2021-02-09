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
  } = props;
  return (
    <div className="input-gropup flex flex-col justify-start items-start w-full mb-8 relative">
      <label htmlFor={id} className="mb-1 text-sm opacity-60">
        {label}
      </label>
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
      {children}
    </div>
  );
};

export default Input;
