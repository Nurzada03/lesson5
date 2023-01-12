import React from "react";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const enabled = name.length > 0 && age.length > 0;

  const submitHandler = (e) => {
    e.preventDefault();

    const UserList = {
      name,
      age,
    };

    props.onNewList(UserList);

    setName("");
    setAge("");
  };

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  const onChangeYearHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <form>
      <Input
        labelName="Username"
        inputType="text"
        id="name"
        value={name}
        onChange={onChangeNameHandler}
      />
      <Input
        onChange={onChangeYearHandler}
        labelName="Age"
        inputType="number"
        id="age"
        value={age}
      />

      <Button
        title="Add"
        value={name}
        disabled={!enabled}
        onClick={submitHandler}
      />
    </form>
  );
};

export default AddUser;
