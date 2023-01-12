import React from "react";

import "./userListItem.css";

const UserListItem = ({ name, age }) => {
  const old = "years old";
  return (
    <div>
      <div className="itemsData">
        <p>{name}</p>
        <p>{`(${age} ${old})`}</p>
      </div>
    </div>
  );
};

export default UserListItem;
