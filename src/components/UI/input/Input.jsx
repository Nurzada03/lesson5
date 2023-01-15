import React from "react";
import styled from  "./Input.module.css";

const Input = ({ inputType, id, labelName, value, onChange }) => {
  return (
    <form>
      <div>
        <label className={styled.labelStyle} htmlFor={id}>
          {labelName}
        </label>
        <br />
        <input
          value={value}
          onChange={onChange}
          type={inputType}
          className={styled.inputForm}
          id={id}
        />
      </div>
    </form>
  );
};

export default Input;
