import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (!storedUser) {
      navigate('/'); 
    } else {
      setUsername(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <div className="container pt-5">
      <div className="sidebar">
        <h2 style={{ fontFamily: 'Pacifico, cursive' }}>ManishGram</h2>
        <ul>
          <li>🏠 Home</li>
          <li>🔍 Search</li>
          <li>🧭 Explore</li>
          <li>🎥 Reels</li>
          <li>✉️ Messages</li>
          <li>🔔 Notifications</li>
          <li>➕ Create</li>
          <li>👤 Profile</li>
          <li>☰ More</li>
        </ul>
      </div>

      <div className="rightbar">
        <div className="profile-box">
          <div className="dp"></div>
          <div>
            <strong>{username}</strong>
            <p style={{ fontSize: '12px' }}>Switch</p>
          </div>
        </div>
        <h4>Suggested for you</h4>
      </div>

    </div>
  );
};

export default Home;
