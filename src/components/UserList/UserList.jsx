// import React, { useState } from "react";

import UserListItem from "../userListItem/UserListItem";

const UserList = ({ expenses }) => {
  return (
    <div>
      <ul>
        {expenses.map((item, index) => {
          return <UserListItem name={item.name} age={item.age} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
