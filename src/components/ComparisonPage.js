import React, { useState } from 'react';
import Navbar from './Navbar';
import '../style/ComparisonPage.css';

const ComparisonPage = () => {
  const [comparisonItems, setComparisonItems] = useState([
    { id: 1, name: 'Product 1', price: '$10', rate: '4.5/5', source: 'Store A' },
    { id: 2, name: 'Product 2', price: '$20', rate: '4.2/5', source: 'Store B' },
    { id: 3, name: 'Product 3', price: '$30', rate: '4.8/5', source: 'Store C' }
  ]);

  return (
    <div className="comparison-page">
      <Navbar />
      <div className="back-button">
        <button onClick={() => window.history.back()}>← Back</button>
      </div>
      <div className="comparison-table">
        <div className="comparison-header">
          <div>Image</div>
          <div>Price</div>
          <div>Rate</div>
          <div>Source</div>
        </div>

        <div className="comparison-items">
          {comparisonItems.map((item) => (
            <div className="comparison-item" key={item.id}>
              <div className="item-image">{item.name}</div>
              <div className="item-price">{item.price}</div>
              <div className="item-rate">{item.rate}</div>
              <div className="item-source">{item.source}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
