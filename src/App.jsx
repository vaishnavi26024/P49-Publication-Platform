import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import BrandHome  from './components/pages/Login'
import Login from './components/pages/Signup'
import Orders from './components/pages/Orders'
import Wishlist from './components/pages/Wishlist'
import Cart from './components/pages/Cart'
import { CartProvider } from './context/CartContext'
import Checkout from './components/pages/Checkout'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<BrandHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/get-started" element={<Navigate to="/login" replace />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
