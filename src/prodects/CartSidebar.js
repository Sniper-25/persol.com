import React, { useState } from 'react';

const CartSidebar = ({ cart = [], handleIncreaseQuantity, handleDecreaseQuantity, calculateTotalPrice, handleCheckout: propHandleCheckout }) => {
  const [showCardForm, setShowCardForm] = useState(false); // حالة لإظهار نموذج البطاقة
  const [popupProduct, setPopupProduct] = useState(null); // حالة لتخزين المنتج الذي يتم النقر عليه

  const closeCardForm = () => {
    setShowCardForm(false); // إغلاق نافذة نموذج البطاقة
  };

  const closePopup = () => {
    setPopupProduct(null); // إغلاق نافذة عرض تفاصيل المنتج
  };

  const localHandleCheckout = () => {
    setShowCardForm(true); // عرض نموذج البطاقة عند الضغط على شراء
  };

  const closeCartSidebar = () => {
    // إغلاق السلة (يمكنك تعديل هذا إذا كنت تستخدم حالة لتغيير عرض السلة)
    document.getElementById('cart-sidebar').style.display = 'none';
  };

  return (
    <div id="cart-sidebar" className="cart-sidebar">
      
      <h2>Product Basket</h2>
      <div className="container">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product.id} className="product">
              <img src={product.imgSrc} alt={product.model} />
              <div>
                <p><b>{product.brand}</b></p>
                <p>{product.model}</p>
                <p>${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
              <button id='bot' onClick={() => handleIncreaseQuantity(product.id)}> + </button>
              <span>{product.quantity}</span>
              <button id='bot' onClick={() => handleDecreaseQuantity(product.id)}> - </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="total-price">
        <h3>Total: ${calculateTotalPrice(cart)}</h3>
      </div>
      <button className="checkout-btn" onClick={localHandleCheckout}>
        Buying
      </button>
      <span className="close-btn" onClick={closeCartSidebar}>×</span>

      {/* عرض تفاصيل المنتج عند النقر عليه */}
      {popupProduct && (
        <div className="popup-overlay" style={{ display: 'flex' }}>
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>×</span>
            <h2>{popupProduct.brand} - {popupProduct.model}</h2>
            <img src={popupProduct.imgSrc} alt={popupProduct.model} />
            <p>Price: ${popupProduct.price}</p>
            <p>Quantity: {popupProduct.quantity}</p>
          </div>
        </div>
      )}

      {/* عرض نموذج البطاقة عند الضغط على شراء */}
      {showCardForm && (
        <div className="popup-overlay" style={{ display: 'flex' }}>
          <div className="popup-content">
            <span className="close-btn" onClick={closeCardForm}>×</span>
            <h2>Card</h2>
            <form className='feedback-form'>
              <label>Card Number :</label><br/>
              <input className='feedback-input' type="text" placeholder="XXXX XXXX XXXX XXXX" /><br/>
              <label>Expiry Date :</label><br/>
              <input className='feedback-input' type="text" placeholder="MM/YY" /><br/>
              <label>Security Code :(CVV):</label><br/>
              <input className='feedback-input' type="text" placeholder="XXX" /><br/>
              <button type="submit" className='feedback-button'>Complete</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
