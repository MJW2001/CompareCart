import React from "react";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>CompareCart</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
