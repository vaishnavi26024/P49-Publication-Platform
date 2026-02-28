import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaCreditCard, FaMobileAlt, FaTruck, FaCheckCircle } from 'react-icons/fa';
import Modal from '../common/Modal';
import '../../styles/auth.css';

const Checkout = () => {
  const { cartItems, placeOrder } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentStep, setPaymentStep] = useState('checkout'); // checkout, processing, success
  const [activeUpiApp, setActiveUpiApp] = useState(null);
  const [upiId, setUpiId] = useState('');
  const [isMobile] = useState(window.innerWidth < 1024);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + 50;

  const upiApps = [
    { name: 'Google Pay', icon: <FaMobileAlt />, color: '#4285F4' },
    { name: 'PhonePe', icon: <FaMobileAlt />, color: '#5f259f' },
    { name: 'Paytm', icon: <FaMobileAlt />, color: '#00BAF2' },
    { name: 'BharatPe', icon: <FaMobileAlt />, color: '#000000' },
    { name: 'PayPal', icon: <FaMobileAlt />, color: '#003087' },
  ];

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (paymentMethod === 'upi' && !isMobile && !upiId.includes('@')) {
      alert('Please enter a valid UPI ID');
      return;
    }
    
    setPaymentStep('processing');
    
    // Simulate payment processing flow
    setTimeout(() => {
      placeOrder({ paymentMethod, upiApp: activeUpiApp?.name });
      setPaymentStep('success');
    }, 2500);
  };

  const handleUpiAppClick = (app) => {
    setActiveUpiApp(app);
    setPaymentStep('redirecting');
    
    setTimeout(() => {
      setPaymentStep('processing');
      setTimeout(() => {
        placeOrder({ paymentMethod: 'upi', upiApp: app.name });
        setPaymentStep('success');
      }, 2000);
    }, 1500);
  };

  const PaymentStatus = () => (
    <div className="payment-status-overlay fade-in">
      <div className="status-content">
        {paymentStep === 'redirecting' && (
          <div className="status-anim">
            <div className="loader"></div>
            <h3>Redirecting to {activeUpiApp?.name}...</h3>
            <p>Please do not refresh or go back</p>
          </div>
        )}
        {paymentStep === 'processing' && (
          <div className="status-anim">
            <div className="loader"></div>
            <h3>Processing Payment...</h3>
            <p>Verifying with your bank</p>
          </div>
        )}
        {paymentStep === 'success' && (
          <div className="status-anim success">
            <FaCheckCircle className="success-icon" />
            <h3>Payment Successful!</h3>
            <p>Your order has been placed.</p>
            <button className="auth-btn mt-4" onClick={() => navigate('/orders')}>View My Orders</button>
          </div>
        )}
      </div>
    </div>
  );

  if (cartItems.length === 0 && paymentStep !== 'success') {
    return (
      <div className="page-container flex-centered">
        <h2>Your cart is empty.</h2>
        <button className="start-publishing-btn mt-4" onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2 className="page-title">Checkout</h2>

      {paymentStep !== 'checkout' && <PaymentStatus />}

      <div className="checkout-content">
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <div className="checkout-section">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <label className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}>
                <input 
                  type="radio" name="payment" value="card" 
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <FaCreditCard />
                <span>Card</span>
              </label>

              <label className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}>
                <input 
                  type="radio" name="payment" value="upi" 
                  checked={paymentMethod === 'upi'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <FaMobileAlt />
                <span>UPI</span>
              </label>

              <label className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}>
                <input 
                  type="radio" name="payment" value="cod" 
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <FaTruck />
                <span>Cash</span>
              </label>
            </div>
          </div>

          <div className="payment-details-area">
            {paymentMethod === 'card' && (
              <div className="card-inputs fade-in">
                <input type="text" placeholder="Card Number" className="checkout-input" required />
                <div className="input-row">
                  <input type="text" placeholder="MM/YY" className="checkout-input" required />
                  <input type="text" placeholder="CVV" className="checkout-input" required />
                </div>
                <input type="text" placeholder="Card Holder Name" className="checkout-input" required />
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="upi-selection fade-in">
                {isMobile ? (
                  <div className="upi-apps-grid">
                    {upiApps.map(app => (
                      <div 
                        key={app.name} 
                        className="upi-app-card"
                        onClick={() => handleUpiAppClick(app)}
                      >
                        <div className="app-icon" style={{ background: app.color }}>
                          {app.icon}
                        </div>
                        <span>{app.name}</span>
                      </div>
                    ))}
                    <div className="divider"><span>OR</span></div>
                    <div className="manual-upi">
                      <input 
                        type="text" placeholder="Enter UPI ID" 
                        className="checkout-input"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="manual-upi">
                    <input 
                      type="text" placeholder="Enter UPI ID (e.g. user@okaxis)" 
                      className="checkout-input"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      required
                    />
                    <p className="helper-text">App selection is available on mobile devices.</p>
                  </div>
                )}
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="cod-info fade-in">
                <p>Pay with cash upon delivery. Convenience fee of ₹50 applied.</p>
              </div>
            )}
          </div>

          <button type="submit" className="place-order-btn">
            {paymentMethod === 'cod' ? 'Confirm Order' : `Pay ₹${total}`}
          </button>
        </form>

        <div className="checkout-summary-sticky">
          <div className="cart-summary">
            <h3>Details</h3>
            <div className="summary-items-list mini">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item-mini">
                  <span>{item.title}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row"><span>Total</span><span>₹{total}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
