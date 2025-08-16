import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const email = localStorage.getItem('userEmail');
    
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    setUserEmail(email || 'User');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h1>Welcome to Dashboard</h1>
          <p>You have successfully logged in!</p>
        </div>
        
        <div className="user-info">
          <div className="user-avatar">
            {userEmail.charAt(0).toUpperCase()}
          </div>
          <div className="user-details">
            <h3>Hello, {userEmail}</h3>
            <p>Your account is active and secure</p>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Profile Views</h3>
              <p className="stat-number">1,234</p>
              <span className="stat-change positive">+12%</span>
            </div>
            <div className="stat-card">
              <h3>Messages</h3>
              <p className="stat-number">56</p>
              <span className="stat-change positive">+5%</span>
            </div>
            <div className="stat-card">
              <h3>Projects</h3>
              <p className="stat-number">23</p>
              <span className="stat-change neutral">0%</span>
            </div>
            <div className="stat-card">
              <h3>Tasks</h3>
              <p className="stat-number">89</p>
              <span className="stat-change negative">-3%</span>
            </div>
          </div>
        </div>

        <div className="dashboard-actions">
          <button className="action-button primary">View Profile</button>
          <button className="action-button secondary">Settings</button>
          <button className="action-button danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
