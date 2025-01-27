import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import { FaHome, FaUser, FaChartBar } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Client, Account } from 'appwrite'; 
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('66ef10510008d8d30400'); 

  const account = new Account(client);

  
  useEffect(() => {
    const storedSession = localStorage.getItem('userSession');
    if (storedSession) {
      setIsAuthenticated(true); 
    } else {
      console.warn('No session found in localStorage');
      setIsAuthenticated(false); 
    }
  }, []);

  
  const handleLogout = useCallback(async () => {
    if (!isAuthenticated) {
      console.warn('User is not authenticated. Cannot log out.');
      return;
    }

    try {
      await account.deleteSession('current'); 
      console.log('Successfully logged out.');
      
      localStorage.clear();
      sessionStorage.clear();
      
      
      window.location.href = "https://accounts.google.com/logout";
      
      setIsAuthenticated(false); 
      navigate('/'); 
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  }, [account, isAuthenticated, navigate]);

  const navItems = [
    { icon: <FaHome />, label: "Profile", path: "/profile" },
    { icon: <FaChartBar />, label: "Resource", path: "/details" },
    { icon: <IoSettingsSharp />, label: "Settings", path: "/settings" },
    { icon: <FiLogOut />, label: "Logout", path: "/", action: handleLogout },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); 
  };

  
  return (
    <div className="horizontal-navbar">
      <div className="nav-title">
        <h1 className="title-text">STUDENT DASHBOARD</h1>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {/* Hamburger Icon */}

        {menuOpen ? "✖" : "☰"}

      </div>
      <div className={`nav-items-container ${menuOpen ? 'open' : ''}`}>
        <div className="nav-items">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="nav-item"
              onClick={item.label === "Logout" ? item.action : null} 
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
