
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={RegistrationForm} />
        <Route path="/login" Component={LoginForm} />
        <Route path="/welcome" element={<Welcome/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
