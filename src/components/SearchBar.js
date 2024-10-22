import React from 'react';
import '../style/SearchBar.css'; // Update path to correct folder

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button className="search-btn">Search now</button>
    </div>
  );
};

export default SearchBar;
