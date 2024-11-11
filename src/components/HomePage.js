import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../style/HomePage.css';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="home-page">
      <Navbar />
      <div className="home-content">
        <h1>Find What’s Most Cost-Effective for you</h1>
        <img src="/path-to-your-image" alt="Products" className="home-image" />
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-btn">
            Search now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
