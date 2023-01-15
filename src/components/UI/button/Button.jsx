import React from "react";

import styled from  "./button.module.css";
const Button = ({ onClick, disabled, title }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styled.form_Btn}>
      {title}
    </button>
  );
};

export default Button;
