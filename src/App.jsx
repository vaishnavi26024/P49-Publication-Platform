import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from "./components/pages/Footer";
import './App.css'
import BrandHome from './components/pages/Login'
import Auth from './components/pages/Signup'
import Orders from './components/pages/Orders'
import Wishlist from './components/pages/Wishlist'
import Cart from './components/pages/Cart'
import { CartProvider } from './context/CartContext'
import Checkout from './components/pages/Checkout'
import AboutUs from './components/pages/AboutUs'
import Careers from './components/pages/Careers'
import FAQ from './components/pages/FAQ'
import Bestsellers from './components/pages/Bestsellers'
import NewReleases from './components/pages/NewReleases'
import TrendingBooks from './components/pages/TrendingBooks'
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">

          {/* Navbar always on top */}
          <Navbar />

          <main className="main-content">

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <BrandHome />
                    <AboutUs />
                  </>
                }
              />
              <Route path="/login" element={<Auth defaultView="login" />} />
              <Route path="/signup" element={<Auth defaultView="signup" />} />
              <Route path="/get-started" element={<Navigate to="/signup" replace />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bestsellers" element={<Bestsellers />} />
              <Route path="/new-releases" element={<NewReleases />} />
              <Route path="/trending-books" element={<TrendingBooks />} />
            </Routes>
          </main>

          {/* Footer always at bottom */}
          <Footer />

        </div>
      </Router>
    </CartProvider>
  )
}

export default App