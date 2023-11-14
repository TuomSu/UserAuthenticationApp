
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      // Send registration request to the backend
      const response = await axios.post('http://localhost:3001/api/auth/register', {
        email,
        password,
      });
      console.log('Registration response:', response);
      // Handle success (you can redirect to login page or show a success message)
      console.log('Registration successful:', response.data);
    } catch (error) {
      // Handle registration error (show error message)
      console.error('Registration failed:', error.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationForm;
