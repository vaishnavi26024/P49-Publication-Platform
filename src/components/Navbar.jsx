import { useState } from 'react';
import Logo from './Logo';
import './Navbar.css';

function Navbar() {
  const [language, setLanguage] = useState('English');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDiscoverDropdown, setShowDiscoverDropdown] = useState(false);
  const [showWritersDropdown, setShowWritersDropdown] = useState(false);

  const languages = ['English', 'Hindi', 'Marathi', 'Japanese'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Logo />
          </div>
          <div className="nav-dropdown">
            <a href="#discover" className="nav-link" onClick={(e) => { e.preventDefault(); setShowDiscoverDropdown(!showDiscoverDropdown); }}>Discover books ▼</a>
            {showDiscoverDropdown && (
              <div className="dropdown-menu discover-dropdown">
                <div className="dropdown-section">
                  <h3 className="dropdown-title">Notion Press Picks</h3>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Bynge Tamil Stories</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Trending this week</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>New releases</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Free Shipping</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Indian Languages</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Xpress Publishing</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Best sellers</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Poetry</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>The Indian Collection</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Winners of The Book Sales Contest</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Leadership & Management</div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-section">
                  <h3 className="dropdown-title">Books by Genre</h3>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Literature & Fiction</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Business, Investing & Management</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Biographies & Autobiographies</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Self-Help</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Poetry</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>History & Politics</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>References & Study Guides</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Philosophy</div>
                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Health & Fitness</div>
                  <div className="dropdown-item see-all" onClick={() => setShowDiscoverDropdown(false)}>See all</div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-section dropdown-promo">
                  <p className="promo-text">Discover and read thousands of books from independent authors across India</p>
                  <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=200&fit=crop" alt="Books" className="promo-image" />
                  <a href="/bookstore" className="promo-link">Visit the Book store</a>
                </div>
              </div>
            )}
          </div>
          <div className="nav-dropdown">
            <a href="#writers" className="nav-link" onClick={(e) => { e.preventDefault(); setShowWritersDropdown(!showWritersDropdown); }}>For Writers ▼</a>
            {showWritersDropdown && (
              <div className="dropdown-menu writers-dropdown">
                <div className="dropdown-item-with-desc" onClick={() => setShowWritersDropdown(false)}>
                  <div className="item-title">Get Published</div>
                  <div className="item-desc">Publish your book and sell across 150+ countries</div>
                </div>
                <div className="dropdown-item-with-desc" onClick={() => setShowWritersDropdown(false)}>
                  <div className="item-title">Outpublish</div>
                  <div className="item-desc">Experience the guidance of traditional publishing house with the freedom of self-publishing</div>
                </div>
                <div className="dropdown-item-with-desc" onClick={() => setShowWritersDropdown(false)}>
                  <div className="item-title">Marketing Tools</div>
                  <div className="item-desc">Use tools to promote your book and reach more readers</div>
                </div>
                <div className="dropdown-item-with-desc" onClick={() => setShowWritersDropdown(false)}>
                  <div className="item-title">Writing Tools</div>
                  <div className="item-desc">Start your writing journey with our FREE writing courses</div>
                </div>
                <div className="dropdown-item-with-desc" onClick={() => setShowWritersDropdown(false)}>
                  <div className="item-title">Challenges</div>
                  <div className="item-desc">Use our tools to promote your books and reach more readers</div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="navbar-right">
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
          
          <a href="/get-started" className="get-started-btn">GET STARTED</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
