import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Modal from '../common/Modal';
import '../../styles/auth.css';

const Orders = () => {
  const { orders } = useCart();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openOrderDetails = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Order History</h2>
      
      {orders.length === 0 ? (
        <div className="empty-orders">
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <div className="order-main-info">
                <div className="order-header-info">
                  <span className="order-id">{order.id}</span>
                  <span className="order-date">{order.date}</span>
                </div>
                <div className="order-pricing">
                  <span className="order-total">₹{order.total}</span>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </div>
              </div>
              <button 
                className="view-details-btn"
                onClick={() => openOrderDetails(order)}
              >
                View Order Details
              </button>
            </div>
          ))}
        </div>
      )}

      <Modal 
        isOpen={!!selectedOrder} 
        onClose={() => setSelectedOrder(null)}
        title={`Order Details - ${selectedOrder?.id}`}
      >
        {selectedOrder && (
          <div className="order-details-modal">
            <div className="details-section">
              <h4>Items</h4>
              {selectedOrder.items.map((item, idx) => (
                <div key={idx} className="detail-item-row">
                  <span>{item.title} (x{item.quantity})</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div className="details-section">
              <h4>Summary</h4>
              <div className="detail-row">
                <span>Total Amount</span>
                <span className="accent-text">₹{selectedOrder.total}</span>
              </div>
              <div className="detail-row">
                <span>Status</span>
                <span className={`status-text ${selectedOrder.status.toLowerCase()}`}>
                  {selectedOrder.status}
                </span>
              </div>
            </div>

            <div className="details-section">
              <h4>Delivery & Payment</h4>
              <p><strong>Method:</strong> {selectedOrder.deliveryInfo?.paymentMethod || 'Credit Card'}</p>
              <p><strong>Delivery Address:</strong> Simulated Address, P49 Platform</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Orders;
