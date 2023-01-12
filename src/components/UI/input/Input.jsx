import React from "react";
import "./Input.css";

const Input = ({ inputType, id, labelName, value, onChange }) => {
  return (
    <form>
      <div>
        <label className="labelStyle" htmlFor={id}>
          {labelName}
        </label>
        <br />
        <input
          value={value}
          onChange={onChange}
          type={inputType}
          className="inputForm"
          id={id}
        />
      </div>
      <div></div>
    </form>
  );
};

export default Input;
