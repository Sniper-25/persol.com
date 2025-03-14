import React, { useState } from "react";
import ProductModal from "./ProductModal";
import "./ProductList.css"; // تأكد من وجود تنسيق مناسب

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)}>
          <img src={product.image} alt={product.name} className="product-thumbnail" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default ProductList;