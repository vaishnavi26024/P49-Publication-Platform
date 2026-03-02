import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'The Great Publishing Journey', price: 499, quantity: 1, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&q=80' },
    { id: 2, title: 'Mastering Content Flow', price: 350, quantity: 2, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80' },
  ]);

  const [wishlistItems, setWishlistItems] = useState([
    { id: 3, title: 'Creative Writing Pro', author: 'Emily Bronte', price: 299, image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=300&q=80' },
  ]);

  const [savedItems, setSavedItems] = useState([]);
  const [orders, setOrders] = useState([
    { id: '#ORD123', date: '2026-02-20', total: 599, status: 'Delivered', items: [{ title: 'The Great Publishing Journey', quantity: 1, price: 599 }] },
    { id: '#ORD124', date: '2026-02-22', total: 450, status: 'Pending', items: [{ title: 'Mastering Content Flow', quantity: 1, price: 450 }] },
  ]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const saveForLater = (id) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      setSavedItems(prev => [...prev, item]);
      setCartItems(prev => prev.filter(i => i.id !== id));
    }
  };

  const moveToCart = (id, from = 'saved') => {
    if (from === 'saved') {
      const item = savedItems.find(i => i.id === id);
      if (item) {
        setCartItems(prev => [...prev, item]);
        setSavedItems(prev => prev.filter(i => i.id !== id));
      }
    } else if (from === 'wishlist') {
      const item = wishlistItems.find(i => i.id === id);
      if (item) {
        setCartItems(prev => [...prev, { ...item, quantity: 1 }]);
        setWishlistItems(prev => prev.filter(i => i.id !== id));
      }
    }
  };

  const moveToWishlist = (id) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      setWishlistItems(prev => [...prev, item]);
      setCartItems(prev => prev.filter(i => i.id !== id));
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const placeOrder = (paymentDetails) => {
    const newOrder = {
      id: `#ORD${Math.floor(Math.random() * 10000)}`,
      date: new Date().toISOString().split('T')[0],
      total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      status: 'Processing',
      items: [...cartItems],
      deliveryInfo: paymentDetails
    };
    setOrders(prev => [newOrder, ...prev]);
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      wishlistItems,
      savedItems,
      orders,
      addToCart,
      removeFromCart,
      updateQty,
      saveForLater,
      moveToCart,
      moveToWishlist,
      removeFromWishlist,
      placeOrder
    }}>
      {children}
    </CartContext.Provider>
  );
};
