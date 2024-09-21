import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './TypeofLogin.css';
import { FaUserTie, FaUserGraduate, FaUsers } from 'react-icons/fa';

function App() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginRedirect = () => {
    navigate('/'); // Navigate to the login page
  };

  return (
    <div className="container">
      <div className="login-card">
        <img src="/image-11@2x.png" alt="logo" className="logo" />
        <h2>Welcome to Training Performance Tracker</h2>
        <p>Log in as</p>
        <div className="button-container">
          <button className="login-button" onClick={handleLoginRedirect}>
            <FaUserTie /> ADMIN
          </button>
          <button className="login-button" onClick={handleLoginRedirect}>
            <FaUserGraduate /> Student
          </button>
          <button className="login-button" onClick={handleLoginRedirect}>
            <FaUsers /> Parents
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
