import React from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <img src={product.image} alt={product.name} className="product-image" />
        <p className="breadcrumb">Home / Books</p>
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">Price: ${product.price}</p>
        <label>Quantity:</label>
        <select>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductModal;