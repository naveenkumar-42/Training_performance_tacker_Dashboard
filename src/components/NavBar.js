import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaHome, FaUser, FaChartBar } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { createClient } from "@supabase/supabase-js";
import "./NavBar.css";

// 🔹 Supabase configuration
const SUPABASE_URL = "https://vqknuxdcxrzqpwrfholw.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxa251eGRjeHJ6cXB3cmZob2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMDk3MjYsImV4cCI6MjA3Njc4NTcyNn0.sxBFHomezK5IsnuOY8lpVnKmeEX7SmAFvloUupS0yoQ";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const NavBar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Check for Supabase session
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        console.log("✅ Supabase session active:", session);
        setIsAuthenticated(true);
      } else {
        console.warn("❌ No Supabase session found.");
        setIsAuthenticated(false);
      }
    };

    checkSession();

    // Listen for auth state changes (login/logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        console.log("🟢 Session updated:", session);
        setIsAuthenticated(true);
      } else {
        console.log("🔴 Session ended.");
        setIsAuthenticated(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // 🔹 Logout using Supabase
  const handleLogout = useCallback(async () => {
    if (!isAuthenticated) {
      console.warn("User is not authenticated. Cannot log out.");
      return;
    }

    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      console.log("✅ Successfully logged out from Supabase.");

      localStorage.clear();
      sessionStorage.clear();

      // Optional: logout from Google completely
      window.open("https://accounts.google.com/logout", "_blank");

      setIsAuthenticated(false);
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  }, [isAuthenticated, navigate]);

  const navItems = [
    { icon: <FaHome />, label: "Profile", path: "/profile" },
    { icon: <FaUser />, label: "Placement Summary", path: "/placement-summary" },
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
        {menuOpen ? "✖" : "☰"}
      </div>

      <div className={`nav-items-container ${menuOpen ? "open" : ""}`}>
        <div className="nav-items">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="nav-item"
              onClick={item.label === "Logout" ? item.action : null}
              exact="true"
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
