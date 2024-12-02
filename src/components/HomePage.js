import React from "react";
import "../style/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="welcome-section">
        <h1>Welcome to CompareCart</h1>
        <p>
          CompareCart is your one-stop destination to compare prices and
          products across multiple online stores. Save time, save money, and
          shop smarter!
        </p>
      </div>
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Compare prices across multiple platforms</li>
          <li>Find the best deals and save money</li>
          <li>Accurate and up-to-date product information</li>
          <li>User-friendly interface for easy navigation</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
