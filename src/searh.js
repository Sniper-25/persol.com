import { useState } from "react";

const productsData = [
  { id: 1, img: "../Desktop/WEP/html/images.png", name: "Ray-Ban Classic", desc: "Polarized Sunglasses", price: 150 },
  { id: 2, img: "product2.jpg", name: "Oakley Clear Vision", desc: "Optical Glasses", price: 120 },
  { id: 3, img: "product3.jpg", name: "Ray-Ban Classic", desc: "Polarized Sunglasses", price: 150 },
];

export default function ProductCenter() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(productsData);

  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSort}>
            Sort by Price
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {products
            .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
              <div key={product.id} className="border p-4 rounded shadow">
                <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded" />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-600">{product.desc}</p>
                <div className="text-blue-500 font-bold mt-2">${product.price}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <div className="header_search">
        <div className="search-sort">
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="sort">Sort by Price</button>
        </div>
      </div>
      <div className="products">
        <div className="product">
          <img src="../Desktop/WEP/html/images.png" alt="Product 1" />
          <h3>Ray-Ban Classic</h3>
          <p>Polarized Sunglasses</p>
          <div className="price">$150</div>
        </div>
        <div className="product">
          <img src="product2.jpg" alt="Product 2" />
          <h3>Oakley Clear Vision</h3>
          <p>Optical Glasses</p>
          <div className="price">$120</div>
        </div>
        <div className="product">
          <img src="product3.jpg" alt="Product 3" />
          <h3>Ray-Ban Classic</h3>
          <p>Polarized Sunglasses</p>
          <div className="price">$150</div>
        </div>
      </div>
    </div>
  );
};

;
