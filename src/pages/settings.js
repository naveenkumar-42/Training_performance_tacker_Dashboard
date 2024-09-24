import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import './settings.css';

const SettingsPage = () => {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem('settings');
    return savedSettings ? JSON.parse(savedSettings) : {
      notifications: true,
      darkMode: false,
      language: 'English',
    };
  });

  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem('profile');
    return savedProfile ? JSON.parse(savedProfile) : {
      username: '',
      email: '',
      password: '',
    };
  });

  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  const handleToggle = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.checked
    });
  };


  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Handle feedback submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback(''); // Clear feedback
  };

  // Handle language selection
  const handleLanguageChange = (e) => {
    setSettings({ ...settings, language: e.target.value });
  };

  return (
    <div className="settings">
      <NavBar />
      <section className="settings-page">
        <h2>Settings</h2>

        {/* Profile Settings */}
        <div className="settings-section profile-settings">
          <h3>Profile Settings</h3>
          <div className="setting-item">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="setting-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="setting-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
              placeholder="Enter a new password"
            />
          </div>
        </div>

        {/* Basic Settings */}
        <div className="settings-section basic-settings">
          <h3>Basic Settings</h3>
          <div className="setting-item">
            <label htmlFor="notifications">Enable Notifications</label>
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={settings.notifications}
              onChange={handleToggle}
            />
          </div>
          <div className="setting-item">
            <label htmlFor="darkMode">Enable Dark Mode</label>
            <input
              type="checkbox"
              id="darkMode"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleToggle}
            />
          </div>
          <div className="setting-item">
            <label htmlFor="language">Preferred Language</label>
            <select id="language" value={settings.language} onChange={handleLanguageChange}>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
        </div>

        {/* Theme Selection */}
        <div className="settings-section theme-settings">
          <h3>Theme Selection</h3>
          <div className="theme-options">
            <button className={`theme-btn ${settings.darkMode ? 'active' : ''}`}>
              Dark Theme
            </button>
            <button className={`theme-btn ${!settings.darkMode ? 'active' : ''}`}>
              Light Theme
            </button>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="settings-section privacy-settings">
          <h3>Privacy Settings</h3>
          <div className="setting-item">
            <label htmlFor="data-sharing">Allow Data Sharing</label>
            <input
              type="checkbox"
              id="data-sharing"
              name="dataSharing"
              checked={settings.dataSharing}
              onChange={handleToggle}
            />
          </div>
        </div>

        {/* Feedback Section */}
        <div className="feedback-section">
          <h3>Feedback</h3>
          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              placeholder="Your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;