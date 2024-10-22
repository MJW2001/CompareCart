import React from 'react';
import '../style/Navbar.css'; // Update path to correct folder

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/path-to-logo" alt="CompareCart" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Comparison</li>
        <li>Contact Us</li>
        <li><button className="location-btn">Location</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
