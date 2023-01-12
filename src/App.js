import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

const dataList = [
  {
    name: "Bayaman",
    age: 90,
  },
  {
    name: "Zhumabek",
    age: 25,
  },
  {
    name: "Nurbolot",
    age: 24,
  },
  {
    name: "Zhasmina",
    age: 23,
  },
  {
    name: "Feruza",
    age: 19,
  },
  {
    name: "Nurzada",
    age: 18,
  },
];

function App() {
  const [userList, setuserList] = useState(dataList);
  console.log(userList);

  const addNewExpenseHadler = (data) => {
    const upUserList = [...userList];
    upUserList.push(data);
    setuserList(upUserList);
  };

  userList.sort((a, b) => {
    return b.age - a.age;
  });

  return (
    <div className="App">
      <div className="form-container">
        <AddUser onNewList={addNewExpenseHadler} />
      </div>
      <div className="list-container">
       
        <UserList expenses={userList} />
      </div>
    </div>
  );
}

export default App;
