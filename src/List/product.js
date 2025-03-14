import React from "react";
import ProductList from "./components/ProductList";

const products = [
  { id: 1, name: "Modern Programming", price: 95, image: "/images/modern-programming.jpg" },
  { id: 2, name: "HTML", price: 80, image: "/images/html.jpg" },
  { id: 3, name: "CSS", price: 30, image: "/images/css.jpg" },
  { id: 4, name: "JavaScript", price: 20, image: "/images/js.jpg" },
];

function App() {
  return <ProductList products={products} />;
}

export default Appw;