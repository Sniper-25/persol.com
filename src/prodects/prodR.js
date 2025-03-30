import React, { useState } from 'react';
import './prod.css'; // تأكد من إضافة CSS هنا إذا كان لديك ملفات CSS
import { Link } from 'react-router-dom';
import Footer from '../hader_footer/footer';
import Image from '../PO_header_persol_logo.svg';
// بيانات المنتجات الأولية
const allProducts = [
  {
    id: 1,
    brand: 'Ray-Ban',
    model: 'Classic Round',
    price: 1000,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 2,
    brand: 'Oakley',
    model: 'Clear Vision',
    price: 499,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 3,
    brand: 'Gucci',
    model: 'Retro Circle',
    price: 250,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 4,
    brand: 'Nike',
    model: 'Speed Vision',
    price: 350,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 5,
    brand: 'Versace',
    model: 'Luxury Frame',
    price: 799,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 6,
    brand: 'Dior',
    model: 'Elegant Shades',
    price: 850,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  // مجموعة جديدة من المنتجات التي سيتم تحميلها عند التبديل
  {
    id: 7,
    brand: 'Prada',
    model: 'Modern Square',
    price: 300,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 8,
    brand: 'Fendi',
    model: 'Luxury Oval',
    price: 340,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 9,
    brand: 'Chanel',
    model: 'Chic Cat-Eye',
    price: 999,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 10,
    brand: 'Balenciaga',
    model: 'Bold Rectangular',
    price: 599,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 11,
    brand: 'Louis Vuitton',
    model: 'Vintage Round',
    price: 400,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 12,
    brand: 'Celine',
    model: 'Elegant Oval',
    price: 800,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 13,
    brand: 'Chanel',
    model: 'Chic Cat-Eye',
    price: 650,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 14,
    brand: 'Balenciaga',
    model: 'Bold Rectangular',
    price: 700,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 15,
    brand: 'Louis Vuitton',
    model: 'Vintage Round',
    price: 750,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },
  {
    id: 16,
    brand: 'Celine',
    model: 'Elegant Oval',
    price: 650,
    imgSrc: '../Desktop/APPS/frist-project/public/logo192.png'
  },

];
const ProdR = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [popupProduct, setPopupProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // الصفحة الحالية
  const [sortByPrice, setSortByPrice] = useState(false); // تحديد إذا كان يجب فرز المنتجات حسب السعر

  const productsPerPage = 8; // عدد المنتجات في كل صفحة

  // دالة لإضافة المنتج إلى السلة
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // إذا كان المنتج موجوداً مسبقاً، فقط قم بزيادة الكمية
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // إذا لم يكن المنتج موجود، أضف المنتج مع quantity = 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  
  const closeCardForm = () => {
    setShowCardForm(false);
  };
  const handleCheckout = () => {
    setShowCardForm(true); // عرض نموذج البطاقة عند الضغط على شراء
  };
  const [showCardForm, setShowCardForm] = useState(false); // حالة لإظهار نموذج البطاقة

  // دالة لزيادة الكمية
  const handleIncreaseQuantity = (productId) => {
    setCart(prevCart => prevCart.map(item => 
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // دالة لتقليل الكمية
  const handleDecreaseQuantity = (productId) => {
    setCart(prevCart => prevCart.map(item => 
      item.id === productId && item.quantity >= 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // حساب الإجمالي
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // تصفية المنتجات بناءً على النص في شريط البحث
  const filteredProducts = allProducts.filter((product) => 
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // فرز المنتجات حسب السعر
  const sortedProducts = sortByPrice ? [...filteredProducts].sort((a, b) => a.price - b.price) : filteredProducts;

  // الحصول على المنتجات للصفحة الحالية
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // دالة لتغيير الصفحة
  const handleChangePage = () => {
    setCurrentPage(currentPage === 1 ? 2 : 1); // التبديل بين الصفحة 1 و 2
  };

  // دالة للتبديل بين حالة الفرز حسب السعر
  const toggleSortByPrice = () => {
    setSortByPrice(!sortByPrice);
  };

  // البحث
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // دالة لتبديل سلة المشتريات
  const toggleCartSidebar = () => {
    const cartSidebar = document.getElementById('cart-sidebar');
    const isVisible = cartSidebar.style.display === 'block';
    cartSidebar.style.display = isVisible ? 'none' : 'block';
  };

  // عرض تفاصيل المنتج عند النقر عليه
  const handleProductClick = (product) => {
    setPopupProduct(product);
  };

  // إغلاق نافذة تفاصيل المنتج
  const closePopup = () => {
    setPopupProduct(null);
  };

  return (
  
    <div className="app-container">
        <div className='co'>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="sort-button" onClick={toggleSortByPrice}>
          {sortByPrice ? 'Sort by Default' : 'Sort by Price'}
        </button>
      </div>

      <div className="header">
        <img src={Image} alt="Logo" />
        <h1>RAY-BAN</h1>
        <div className="cart" onClick={toggleCartSidebar}>
          🛒{cart.reduce((acc, item) => acc + item.quantity, 0)}
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
            <p><b>Price:</b> ${product.price}</p>
            
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
            <p><b>Price:</b> ${popupProduct.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(popupProduct)}
            >
              إضافة للسلة
            </button>
            
            <div className="total-price">
        <h3>الإجمالي: {calculateTotalPrice()} ريال</h3>
        
      </div>
  
            
          </div>
          
        </div>
      )}

      {/* مربعات المنتجات الخاصة بالتبديل */}
      <div className="products-container">
        <div onClick={handleChangePage} className="product arrow-box">
          <span className="arrow">&#8594;</span>
        </div>
      </div>
      <Link to='/product' className="back-button"> Back</Link>

      {/* سلة المنتجات الجانبية */}
      <div>
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
              <p>الكمية: {product.quantity}</p>
            </div>
            <button onClick={() => handleIncreaseQuantity(product.id)}> + </button>
            <span>{product.quantity}</span>
            <button onClick={() => handleDecreaseQuantity(product.id)}> - </button>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h3>الإجمالي: {calculateTotalPrice()} ريال</h3>
      </div>
      <button className="checkout-btn" onClick={handleCheckout}>
        إتمام الشراء
      </button>
      <button className="back-button" onClick={() => document.getElementById('cart-sidebar').style.display = 'none'}>إغلاق</button>
    </div>

    {/* نافذة منبثقة لإدخال بيانات البطاقة */}
    {showCardForm && (
      <div className="popup-overlay" style={{ display: 'flex' }}>
        <div className="popup-content">
          <span className="close-btn" onClick={closeCardForm}>×</span>
          <h2>أدخل تفاصيل بطاقتك</h2>
          <form>
            <label>رقم البطاقة:</label><br/>
            <input type="text" placeholder="XXXX XXXX XXXX XXXX" /><br/>
            <label>تاريخ الانتهاء:</label><br/>
            <input type="text" placeholder="MM/YY" /><br/>
            <label>رمز الأمان (CVV):</label><br/>
            <input type="text" placeholder="XXX" /><br/>
            <button type="submit">إتمام الدفع</button>
          </form>
        </div>
      </div>
    )}
  </div>
     
      
    </div>
    <Footer />
    </div>
  );
};

export default ProdR;