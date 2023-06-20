import React, { useState } from 'react';
import axios from 'axios';
import {  NavLink} from "react-router-dom";


const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('/register', { email, password });

      // Redirect to the login page
      // Replace '/login' with your login route
      window.location.href = '/login';
    } catch (error) {
      console.error(error);
      // Display error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
   

    </form>
  );
};

export default RegistrationForm;
