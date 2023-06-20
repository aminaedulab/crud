import React, { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
interface User {
  id: number;
  name: string;
  email: string;
}
const Crud: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000");
      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching users: ", error);
    }
  };
  const createUser = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/users", { name});
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setName("");
    } catch (error) {
      console.log("Error creating user: ", error);
    }
  };
  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.log("Error deleting user: ", error);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={createUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((user) => (<>
          <li key={user.id}>
            {user.name} 
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
          </>
        ))}
      </ul>
    </div>
  );
};
export default Crud;