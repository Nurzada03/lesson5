import React from "react";

import "./button.css";
const Button = ({ onClick, disabled, title }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="form-btn">
      {title}
    </button>
  );
};

export default Button;
