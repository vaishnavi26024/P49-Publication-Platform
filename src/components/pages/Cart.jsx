import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaTrash, FaHeart, FaBookmark, FaPlus, FaMinus } from 'react-icons/fa';
import '../../styles/auth.css';

const Cart = () => {
  const { 
    cartItems, 
    savedItems, 
    updateQty, 
    removeFromCart, 
    moveToWishlist, 
    saveForLater, 
    moveToCart 
  } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="page-container">
      <h2 className="page-title">Shopping Cart</h2>
      
      <div className="cart-content">
        <div className="cart-left-section">
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p className="empty-msg">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-img-container">
                    <img src={item.image} alt={item.title} className="item-thumb" />
                  </div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p className="item-price">₹{item.price}</p>
                    <div className="item-actions">
                      <button onClick={() => saveForLater(item.id)} className="action-link secondary">
                        <FaBookmark /> Save for Later
                      </button>
                      <button onClick={() => moveToWishlist(item.id)} className="action-link secondary">
                        <FaHeart /> Move to Wishlist
                      </button>
                      <button onClick={() => removeFromCart(item.id)} className="action-link danger">
                        <FaTrash /> Remove
                      </button>
                    </div>
                  </div>
                  <div className="item-controls">
                    <button onClick={() => updateQty(item.id, -1)} className="qty-btn"><FaMinus /></button>
                    <span className="qty">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="qty-btn"><FaPlus /></button>
                  </div>
                </div>
              ))
            )}
          </div>

          {savedItems.length > 0 && (
            <div className="saved-section">
              <h3 className="section-subtitle">Saved for Later</h3>
              <div className="saved-items">
                {savedItems.map((item) => (
                  <div key={item.id} className="cart-item saved">
                    <div className="item-img-container">
                      <img src={item.image} alt={item.title} className="item-thumb" />
                    </div>
                    <div className="item-details">
                      <h3>{item.title}</h3>
                      <p className="item-price">₹{item.price}</p>
                      <div className="item-actions">
                        <button onClick={() => moveToCart(item.id)} className="action-link primary">
                          Move to Cart
                        </button>
                        <button onClick={() => removeFromCart(item.id)} className="action-link danger">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button 
            className="checkout-btn"
            disabled={cartItems.length === 0}
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
