import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

// 🔹 Supabase configuration
const SUPABASE_URL = "https://vqknuxdcxrzqpwrfholw.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxa251eGRjeHJ6cXB3cmZob2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMDk3MjYsImV4cCI6MjA3Njc4NTcyNn0.sxBFHomezK5IsnuOY8lpVnKmeEX7SmAFvloUupS0yoQ";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const Login = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 🔹 Check if user session already exists
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (session) {
        console.log("User session found:", session);
        localStorage.setItem("userSession", JSON.stringify(session));
        setIsAuthenticated(true);
        navigate("/profile");
      } else {
        console.error("No session found:", error?.message || "No active session");
        setIsAuthenticated(false);
      }
    };

    const storedSession = localStorage.getItem("userSession");
    if (storedSession) {
      const session = JSON.parse(storedSession);
      console.log("Restored session from localStorage:", session);
      setIsAuthenticated(true);
    } else {
      checkSession();
    }
  }, [navigate]);

  // 🔹 Google OAuth Login
  const handleGoogleLogin = useCallback(async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) throw error;

      console.log("Redirecting to Google OAuth:", data);
      // Supabase automatically redirects to Google login
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  }, []);

  // 🔹 Basic email/password login (optional)
  const handleEmailLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      console.log("Login successful:", data);
      localStorage.setItem("userSession", JSON.stringify(data.session));
      setIsAuthenticated(true);
      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-section">
          <img className="logo" alt="logo" src="/image-11@2x.png" />
          <h3 className="welcome-message">
            Welcome to Training Performance Tracker
          </h3>
        </div>

        <form className="input-section" onSubmit={handleEmailLogin}>
          <input
            name="email"
            type="email"
            className="input-field"
            placeholder="Email"
            required
          />
          <input
            name="password"
            type="password"
            className="input-field"
            placeholder="Password"
            required
          />
          <button type="submit" className="login-btn">
            Login
          </button>
          <div className="forgot-password">Forgot password?</div>
        </form>

        <div className="separator">OR</div>

        {/* 🔹 Google OAuth Login */}
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
