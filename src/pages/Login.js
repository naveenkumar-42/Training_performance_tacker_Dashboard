import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client, Account } from 'appwrite';
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('66ef10510008d8d30400'); 

  const account = new Account(client);

  
  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.get(); 
        console.log('User session found:', session);
        localStorage.setItem('userSession', JSON.stringify(session)); 
        setIsAuthenticated(true); 
        navigate('/profile'); 
      } catch (error) {
        console.error('No session found:', error.message);
        setIsAuthenticated(false); 
      }
    };

    const storedSession = localStorage.getItem('userSession');
    if (storedSession) {
      const session = JSON.parse(storedSession);
      console.log('Restored session from localStorage:', session);
      setIsAuthenticated(true);
    } else {
      checkSession(); 
    }
  }, [account, navigate]);

  
  const handleGoogleLogin = useCallback(async () => {
    try {
      await account.createOAuth2Session('google', 'http://localhost:3000/profile/', 'http://localhost:3000/');
      const session = await account.get();  
      localStorage.setItem('userSession', JSON.stringify(session));  
      console.log('Google OAuth session created:', session);
      setIsAuthenticated(true); 
    } catch (error) {
      console.error('Google OAuth failed:', error.message);
    }
  }, [account]);

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-section">
          <img className="logo" alt="logo" src="/image-11@2x.png" />
          <h3 className="welcome-message">Welcome to Training Performance Tracker</h3>
        </div>

        <div className="input-section">
          <input type="text" className="input-field" placeholder="Username" />
          <input type="password" className="input-field" placeholder="Password" />
          <button className="login-btn">Login</button>
          <div className="forgot-password">Forgot password?</div>
        </div>

        <div className="separator">OR</div>

        {/* Google OAuth Login */}
        <div className="social-media-signuplogin" onClick={handleGoogleLogin}>
          <div className="google-button">
            <FcGoogle className="social-media-logo" />
            <span className="continue-with-google">Continue with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
