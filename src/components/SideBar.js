import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaChartBar, FaCog } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { icon: <FaHome />, label: "Home", path: "/" },
    { icon: <FaUser />, label: "Profile", path: "/profile" },
    { icon: <FaChartBar />, label: "Statistics", path: "/stats" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="sidebar">
      <div className="content">
        <img className="logo" src="/image-12@2x.png" alt="Logo" />
        <div className="title">
          <span className="title-text">STUDENT DASHBOARD</span>
        </div>
      </div>
      <div className="navigation">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="nav-item"
            onClick={() => navigate(item.path)}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
