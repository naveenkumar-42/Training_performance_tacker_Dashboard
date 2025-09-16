import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import './settings.css';

const SettingsPage = () => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('settings');
    return saved
      ? JSON.parse(saved)
      : {
          notifications: true,
          darkMode: false,
          language: 'English',
          region: 'India',
          dataSharing: false,
          twoFactorAuth: false,
        };
  });

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('profile');
    return saved
      ? JSON.parse(saved)
      : {
          username: '',
          email: '',
          password: '',
          profileImage: '',
        };
  });

  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('General');

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  const handleToggle = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.checked });
  };

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback:', { feedbackType, feedback });
    setFeedback('');
  };

  const handleLanguageChange = (e) => {
    setSettings({ ...settings, language: e.target.value });
  };

  const handleRegionChange = (e) => {
    setSettings({ ...settings, region: e.target.value });
  };

  const handleAccountAction = (action) => {
    if (window.confirm(`Are you sure you want to ${action} your account?`)) {
      console.log(`${action} account triggered`);
    }
  };

  return (
    <div className="settings">
      <NavBar />
      <section className="settings-page">
        <h2>Account Settings</h2>

        {/* Profile */}
        <div className="settings-section">
          <h3>Profile Information</h3>
          <div className="profile-img">
            {profile.profileImage ? (
              <img src={profile.profileImage} alt="Profile" />
            ) : (
              <div className="placeholder">No Image</div>
            )}
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
          <div className="setting-item">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="setting-item">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="setting-item">
            <label>Change Password</label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
              placeholder="Enter new password"
            />
          </div>
        </div>

        {/* Preferences */}
        <div className="settings-section">
          <h3>Preferences</h3>
          <div className="setting-item">
            <label>Notifications</label>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleToggle}
            />
          </div>
          <div className="setting-item">
            <label>Theme</label>
            <select
              value={settings.darkMode ? 'Dark' : 'Light'}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  darkMode: e.target.value === 'Dark',
                })
              }
            >
              <option value="System">System Default</option>
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Language</label>
            <select value={settings.language} onChange={handleLanguageChange}>
              <option>English</option>
              <option>Spanish</option>
              <option>German</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Region</label>
            <select value={settings.region} onChange={handleRegionChange}>
              <option>India</option>
              <option>United States</option>
              <option>UK</option>
              <option>Germany</option>
            </select>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="settings-section">
          <h3>Privacy & Security</h3>
          <div className="setting-item">
            <label>Allow Data Sharing</label>
            <input
              type="checkbox"
              name="dataSharing"
              checked={settings.dataSharing}
              onChange={handleToggle}
            />
          </div>
          <div className="setting-item">
            <label>Two-Factor Authentication</label>
            <input
              type="checkbox"
              name="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onChange={handleToggle}
            />
          </div>
          <div className="account-actions">
            <button
              className="danger-btn"
              onClick={() => handleAccountAction('deactivate')}
            >
              Deactivate Account
            </button>
            <button
              className="danger-btn"
              onClick={() => handleAccountAction('delete')}
            >
              Delete Account
            </button>
          </div>
        </div>

        {/* Feedback */}
        <div className="settings-section">
          <h3>Feedback & Support</h3>
          <form onSubmit={handleFeedbackSubmit}>
            <div className="setting-item">
              <label>Category</label>
              <select
                value={feedbackType}
                onChange={(e) => setFeedbackType(e.target.value)}
              >
                <option>General</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
              </select>
            </div>
            <textarea
              placeholder="Share your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
