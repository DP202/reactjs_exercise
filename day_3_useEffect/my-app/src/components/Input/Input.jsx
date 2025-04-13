import React from "react";
import "./input.scss";

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input-field"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
