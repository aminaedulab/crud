import React from 'react'
import {  Route, Link, Routes } from "react-router-dom";
import "./App.css"


import RegistrationForm from './RegistrationForm';
import Crud from './Crud';
import LoginForm from './LoginForm';


const App = () => {
  return (
    <div className="App">
    <div className="navbar">
      <ul>
   <li><Link to="/"> Login  </Link></li> 
   <li><Link to="/createposts">Registration</Link></li>
   <li><Link to="/post">crud</Link></li>
</ul>
</div>

   <Routes>
      <Route path="/" element={<LoginForm/>} />
      <Route path="/createposts"  element={<RegistrationForm/>}/>
      <Route path="/post"  element={<Crud/>}/>
      </Routes>
  </div>
      
  )
}

export default App




// import React, { useState, useEffect } from "react";
// import axios from "axios"
// import "./App.css";
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
// const App: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [name, setName] = useState("");
  
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000");
//       setUsers(response.data);
//     } catch (error) {
//       console.log("Error fetching users: ", error);
//     }
//   };
//   const createUser = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/users", { name});
//       setUsers((prevUsers) => [...prevUsers, response.data]);
//       setName("");
//     } catch (error) {
//       console.log("Error creating user: ", error);
//     }
//   };
//   const deleteUser = async (id: number) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/users/${id}`);
//       setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
//     } catch (error) {
//       console.log("Error deleting user: ", error);
//     }
//   };



//   return (
//     <div>
//       <h1>Users</h1>
//       <form onSubmit={createUser}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
       
//         <button type="submit">Add User</button>
//       </form>
//       <ul>
//         {users.map((user) => (<>
//           <li key={user.id}>
//             {user.name} 
//             <button onClick={() => deleteUser(user.id)}>Delete</button>
//           </li>
//           </>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default App;





// import  { FC, ChangeEvent, useState, useEffect } from "react";
// import "./App.css";
// import TodoTask from "./Components/TodoTask";
// import { ITask } from "./Interfaces";
// import axios from "axios";

// const App: FC = () => {
//   const [task, setTask] = useState<string>("");
//   const [deadline, setDealine] = useState<number>(0);
//   const [todoList, setTodoList] = useState<ITask[]>([]);
// useEffect(()=>{
//  axios.get("http://localhost:5000").then((res)=>{
// console.log(res.data)
//  })
// },[])
// // const getData = async()=>{
// //   try {
// //     const response = await axios.get("http://localhost:5000")
// //     console.log(setTask)
// //   } catch (error) {
// //     console.log("error in get data",error)
// //   }
// // }

//   const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
   
//     if (event.target.name === "task") {
//       setTask(event.target.value);
//     } else {
//       setDealine(Number(event.target.value));
//     }
//   };

//   const addTask = (): void => {
//     const newTask = { taskName: task, deadline: deadline };
//     setTodoList([...todoList, newTask]);
//     setTask("");
//     setDealine(0);
//   };

//   const completeTask = (taskNameToDelete: string): void => {
//     setTodoList(
//       todoList.filter((task) => {
//         return task.taskName !== taskNameToDelete;
//       })
//     );
//   };

//   return (
//     <div className="App">
//       <div className="header">
//         <div className="inputContainer">
//           <input
//             type="text"
//             placeholder="Task..."
//             name="task"
//             value={task}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             placeholder="Deadline (in Days)..."
//             name="deadline"
//             value={deadline}
//             onChange={handleChange}
//           />
//         </div>
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div className="todoList">
//         {todoList.map((task: ITask, key: number) => {
//           return <>
//           <TodoTask key={key} task={task} completeTask={completeTask}  />;
//           </>
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;
