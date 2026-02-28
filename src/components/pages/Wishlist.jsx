import React from 'react';
import { useCart } from '../../context/CartContext';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import '../../styles/auth.css';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, moveToCart } = useCart();

  return (
    <div className="page-container">
      <h2 className="page-title">My Wishlist</h2>
      
      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is currently empty.</p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-card-img">
                <img src={book.image} alt={book.title} className="book-image" />
                <button 
                  className="remove-wish-btn"
                  onClick={() => removeFromWishlist(book.id)}
                  title="Remove from wishlist"
                >
                  <FaTrash />
                </button>
              </div>
              <div className="book-details">
                <h3>{book.title}</h3>
                <p>{book.author || 'P49 Publication'}</p>
                <div className="card-footer">
                  <span className="price">₹{book.price}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => moveToCart(book.id, 'wishlist')}
                  >
                    <FaShoppingCart /> Move to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
