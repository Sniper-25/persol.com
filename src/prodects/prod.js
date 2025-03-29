import React, { useState } from 'react';
import './prod.css'; // تأكد من إضافة CSS هنا إذا كان لديك ملفات CSS
import { Link } from 'react-router-dom';
import Footer from '../hader_footer/footer';
// بيانات المنتجات الأولية
const allProducts = [
  {
    id: 1,
    brand: 'Ray-Ban',
    model: 'Classic Round',
    price: '$150',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 2,
    brand: 'Oakley',
    model: 'Clear Vision',
    price: '$120',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 3,
    brand: 'Gucci',
    model: 'Retro Circle',
    price: '$250',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 4,
    brand: 'Nike',
    model: 'Speed Vision',
    price: '$350',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 5,
    brand: 'Versace',
    model: 'Luxury Frame',
    price: '$400',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 6,
    brand: 'Dior',
    model: 'Elegant Shades',
    price: '$300',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  // مجموعة جديدة من المنتجات التي سيتم تحميلها عند التبديل
  {
    id: 7,
    brand: 'Prada',
    model: 'Modern Square',
    price: '$500',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 8,
    brand: 'Fendi',
    model: 'Luxury Oval',
    price: '$550',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 9,
    brand: 'Chanel',
    model: 'Chic Cat-Eye',
    price: '$650',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 10,
    brand: 'Balenciaga',
    model: 'Bold Rectangular',
    price: '$700',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 11,
    brand: 'Louis Vuitton',
    model: 'Vintage Round',
    price: '$750',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 12,
    brand: 'Celine',
    model: 'Elegant Oval',
    price: '$800',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 13,
    brand: 'Chanel',
    model: 'Chic Cat-Eye',
    price: '$650',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 14,
    brand: 'Balenciaga',
    model: 'Bold Rectangular',
    price: '$700',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 15,
    brand: 'Louis Vuitton',
    model: 'Vintage Round',
    price: '$750',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 16,
    brand: 'Celine',
    model: 'Elegant Oval',
    price: '$800',
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },

];

const Prod = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [popupProduct, setPopupProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // الصفحة الحالية

  const productsPerPage = 8; // عدد المنتجات في كل صفحة

  const handleAddToCart = (product) => {
    setCart([...cart, product]); // إضافة المنتج إلى السلة
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId)); // إزالة المنتج من السلة
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleProductClick = (product) => {
    setPopupProduct(product);
  };

  const closePopup = () => {
    setPopupProduct(null);
  };

  // تصفية المنتجات بناءً على النص في شريط البحث
  const filteredProducts = allProducts.filter((product) => 
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // الحصول على المنتجات للصفحة الحالية
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // دالة لتغيير الصفحة عند النقر على المربع
  const handleChangePage = () => {
    setCurrentPage(currentPage === 1 ? 2 : 1); // التبديل بين الصفحة 1 و 2
  };

  return (
    <div className="app-container">
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="sort-button">Sort By Price</button>
      </div>

      <div className="header">
        <img src="../Desktop/APPS/frist-project/public/logo192.png" alt="Logo" />
        <h1>OAKLEY</h1>
        <div className="cart" onClick={() => document.getElementById('cart-sidebar').style.display = 'block'}>
          🛒 سلة المنتجات ({cart.length})
        </div>
      </div>

      <div className="container">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="product"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.imgSrc} alt={product.model} />
            <p><b>Brand:</b> {product.brand}</p>
            <p><b>Model:</b> {product.model}</p>
            <p><b>Price:</b> {product.price}</p>
   
          </div>
        ))}
      </div>

      {popupProduct && (
        <div className="popup-overlay" style={{ display: 'flex' }}>
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>×</span>
            <img src={popupProduct.imgSrc} alt={popupProduct.model} />
            <p><b>Brand:</b> {popupProduct.brand}</p>
            <p><b>Model:</b> {popupProduct.model}</p>
            <p><b>Price:</b> {popupProduct.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(popupProduct)}
            >
              إضافة للسلة
            </button>
          </div>
        </div>
      )}

   

      {/* مربعات المنتجات الخاصة بالتبديل */}
      <div className="products-container">
        {[...Array(1)].map((_, index) => (
          <div
            key={index}
            
            onClick={handleChangePage}
          >
            <div className="product arrow-box">
          <span className="arrow">&#8594;</span>
        </div>
          </div>
        ))}

      </div>
      <Link to = 'Loc' className="back-button"> Back</Link>
      {/* سلة المنتجات الجانبية */}
      <div id="cart-sidebar" className="cart-sidebar">
        <h2>سلة المنتجات</h2>
        <div className="container">
          {cart.map((product) => (
            <div key={product.id} className="product">
              <img src={product.imgSrc} alt={product.model} />
              <div>
                <p><b>{product.brand}</b></p>
                <p>{product.model}</p>
                <p>{product.price}</p>
              </div>
              <button onClick={() => handleRemoveFromCart(product.id)}>إزالة</button>
            </div>
          ))}
        </div>
        <button className="back-button" onClick={() => document.getElementById('cart-sidebar').style.display = 'none'}>إغلاق</button>
      </div>
      <Footer/>
    </div>
  );
};

export default Prod;
