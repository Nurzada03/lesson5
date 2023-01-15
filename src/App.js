import { useState } from "react";
import styles from "./App.module.css";
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

  const addNewExpenseHadler = (data) => {
    const upUserList = [...userList];
    upUserList.push(data);
    setuserList(upUserList);
  };

  userList.sort((a, b) => {
    return b.age - a.age;
  });

  return (
    <div className={styles.App}>
      <div className={styles.formContainer}>
        <AddUser onNewList={addNewExpenseHadler} />
      </div>
      <div className={styles.listContainer}>
        <UserList expenses={userList} />
      </div>
    </div>
  );
}

export default App;
