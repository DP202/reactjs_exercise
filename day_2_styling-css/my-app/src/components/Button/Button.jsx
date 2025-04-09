import React, { useState } from "react";
import "./button.scss";

const Button = ({ handleClick }) => {
  return (
    <div className="btn-load">
      <button onClick={() => handleClick}>Load more</button>
    </div>
  );
};

export default Button;
