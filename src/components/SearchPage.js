import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import '../style/SearchPage.css';

const SearchPage = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      // 在此处调用 API 获取搜索结果 (模拟结果)
      const results = [
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        { id: 3, name: 'Product 3', price: '$30' },
        // 添加更多结果
      ];
      setSearchResults(results);
    }
  }, [query]);

  return (
    <div className="search-page">
      <Navbar />
      <div className="search-header">
        <input type="text" placeholder="Search..." defaultValue={query} />
        <button className="search-btn">Search</button>
        <button className="sort-btn">Sort by</button>
      </div>

      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div className="result-item" key={result.id}>
              <div className="item-image">{result.name}</div>
              <div className="item-price">{result.price}</div>
              <button className="comparison-btn">+ Comparison</button>
            </div>
          ))
        ) : (
          <div>No results found for "{query}"</div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
