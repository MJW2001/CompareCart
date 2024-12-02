import React from "react";
import "./../style/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.img_reference || "placeholder.jpg"}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <p>Store: {product.store}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.star} stars</p>
    </div>
  );
};

export default ProductCard;
