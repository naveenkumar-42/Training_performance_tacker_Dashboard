import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaChartBar, FaCog } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Client, Account } from 'appwrite'; // Appwrite SDK for authentication
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('66ef10510008d8d30400'); // Your Appwrite project ID

  const account = new Account(client);

  // Check if the user is authenticated by restoring session from localStorage
  useEffect(() => {
    const storedSession = localStorage.getItem('userSession');
    if (storedSession) {
      setIsAuthenticated(true); // Mark user as authenticated
    } else {
      console.warn('No session found in localStorage');
      setIsAuthenticated(false); // No session, set to false
    }
  }, []);

  // Handle logout
  const handleLogout = useCallback(async () => {
    if (!isAuthenticated) {
      console.warn('User is not authenticated. Cannot log out.');
      return;
    }

    try {
      await account.deleteSession('current'); // Log out the current session
      console.log('Successfully logged out.');
      
      // Clear session storage
      localStorage.clear();
      sessionStorage.clear();
      
      // Optionally log out of Google as well
      window.location.href = "https://accounts.google.com/logout";
      
      setIsAuthenticated(false); // Mark user as logged out
      navigate('/'); // Redirect to login
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  }, [account, isAuthenticated, navigate]);

  const navItems = [
    { icon: <FaHome />, label: "Profile", path: "/profile" },
    { icon: <FaUser />, label: "Admin", path: "/Admin" },
    { icon: <FaChartBar />, label: "Resource", path: "/details" },
    { icon: <FiLogOut />, label: "Logout", path: "/", action: handleLogout },
  ];

  return (
    <div className="horizontal-navbar">
      <div className="nav-title">
        <h1 className="title-text">STUDENT DASHBOARD</h1>
      </div>
      <div className="nav-items-container">
        <div className="nav-items">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="nav-item"
              onClick={item.label === "Logout" ? item.action : null} // Attach logout handler
              exact
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
