import { useState } from 'react';
import Logo from './Logo';
import './Navbar.css';

function Navbar() {
  const [language, setLanguage] = useState('English');
  const [showDropdown, setShowDropdown] = useState(false);

  const languages = ['English', 'Hindi', 'Marathi', 'Japanese'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Logo />
        </div>
        
        <div className="navbar-center">
          <a href="#discover" className="nav-link">Discover books</a>
          <a href="#writers" className="nav-link">For Writers</a>
        </div>
        
        <div className="navbar-menu">
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search by Book Title or Author Name" 
              className="search-input"
            />
            <button className="search-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
                <path d="M16 16L21 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          
          <div className="language-dropdown">
            <button 
              className="language-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {language} ▼
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                {languages.map(lang => (
                  <div 
                    key={lang}
                    className="dropdown-item"
                    onClick={() => {
                      setLanguage(lang);
                      setShowDropdown(false);
                    }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <a href="/get-started" className="get-started-btn">GET STARTED</a>
      </div>
    </nav>
  );
}

export default Navbar;
