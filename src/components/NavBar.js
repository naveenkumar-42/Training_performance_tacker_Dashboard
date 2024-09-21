import React from "react";
import { NavLink } from "react-router-dom";  // Import NavLink
import { FaHome, FaUser, FaChartBar, FaCog } from "react-icons/fa";
import "./NavBar.css";

const HorizontalNavbar = () => {
  const navItems = [
    { icon: <FaHome />, label: "Profile", path: "/" },
    { icon: <FaUser />, label: "Admin", path: "/Admin" },
    { icon: <FaChartBar />, label: "Resource", path: "/details" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
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
