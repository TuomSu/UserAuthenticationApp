
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        password,
      });

      // Handle success (you can redirect to the dashboard or show a success message)
      console.log('Login successful:', response.data);

      // Redirect to the dashboard
      history.push('/dashboard');
    } catch (error) {
      // Handle login error (show error message)
      console.error('Login failed:', error.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
