import React from "react";

import styled from "./userListItem.module.css";

const UserListItem = ({ name, age }) => {
  const old = "years old";
  return (
    <div>
      <div className={styled.itemsData}>
        <p>{name}</p>
        <p>{`(${age} ${old})`}</p>
      </div>
    </div>
  );
};

export default UserListItem;
