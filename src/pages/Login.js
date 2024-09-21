import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Client, Account } from 'appwrite'; // Appwrite SDK for authentication
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('66ef10510008d8d30400'); // Your Appwrite project ID

  const account = new Account(client);

  const handleGoogleLogin = useCallback(async () => {
    try {
      await account.createOAuth2Session('google', 'http://localhost:3000/profile/', 'http://localhost:3000/');
      // If successful, user is redirected
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
            <img className="social-media-logo" alt="google-logo" src="/google-logo.svg" />
            <span className="continue-with-google">Continue with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
