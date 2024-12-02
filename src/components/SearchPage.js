import React, { useState } from "react";
import "../style/SearchPage.css";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    fetch(`http://127.0.0.1:5000/api/items/search?keyword=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSearchResults(data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
      });
  };

  const handleReset = () => {
    setSearchQuery("");
    setSearchResults([]);
    setError(null);
  };

  return (
    <div className="search-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {searchResults.length === 0 && !error && <p>No results found.</p>}
      <div className="search-results">
        {searchResults.map((result) => (
          <div key={result.id} className="result-card">
            {result.img_reference && (
              <img
                src={result.img_reference}
                alt={result.title}
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
            <h3>{result.title}</h3>
            <p>
              <strong>Store:</strong> {result.store}
            </p>
            <p>
              <strong>Price:</strong> ${result.price}
            </p>
            <p>
              <strong>Rating:</strong> {result.star} stars
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
