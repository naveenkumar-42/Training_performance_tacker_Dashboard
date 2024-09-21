import React, { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";  // Import useNavigate
import { FaHome, FaUser, FaChartBar, FaCog } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Client, Account } from 'appwrite'; // Import Appwrite SDK
import "./NavBar.css";

const HorizontalNavbar = () => {
  const navigate = useNavigate(); // Initialize navigation
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('66ef10510008d8d30400'); // Your Appwrite project ID

  const account = new Account(client); // Initialize Account

  const handleLogout = useCallback(async () => {
    try {
      await account.deleteSession('current'); // Log out the current user
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  }, [account, navigate]);

  const navItems = [
    { icon: <FaHome />, label: "Profile", path: "/Profile" },
    { icon: <FaUser />, label: "Admin", path: "/Admin" },
    { icon: <FaChartBar />, label: "Resource", path: "/details" },
    { icon: <FaCog />, label: "Settings", path: "/typeoflogin" },
    { icon: <FiLogOut />, label: "Logout", path: "/", onClick: handleLogout }, // Add onClick for logout
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
              activeClassName="active"
              exact
              onClick={item.onClick} // Attach the onClick handler for logout
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

export default HorizontalNavbar;
