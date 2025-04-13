import React from "react";
import "./button.scss";
const Button = ({ handleClick }) => {
  return (
    <button className="btn-submit" onClick={handleClick}>
      Login
    </button>
  );
};

export default Button;
