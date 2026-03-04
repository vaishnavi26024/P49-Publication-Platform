import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

function Navbar() {
  const [language, setLanguage] = useState('English');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDiscoverDropdown, setShowDiscoverDropdown] = useState(false);
  const [showWritersDropdown, setShowWritersDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const languages = ['English', 'Hindi', 'Marathi', 'Urdu', 'Kannada', 'Tamil'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-dropdown') && !event.target.closest('.language-dropdown')) {
        setShowDiscoverDropdown(false);
        setShowWritersDropdown(false);
        setShowDropdown(false);
      }
      if (!event.target.closest('.search-container') && !event.target.closest('.nav-icon[title="Search"]')) {
        setShowSearch(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Logo />
          </div>

          {/* DISCOVER BOOKS DROPDOWN */}
          <div className="nav-dropdown">
            <a href="#discover" className="nav-link" onClick={(e) => { e.preventDefault(); setShowDiscoverDropdown(!showDiscoverDropdown); setShowWritersDropdown(false); }}>Discover books ▼</a>
            {showDiscoverDropdown && (
              <div className="dropdown-menu discover-dropdown">
                <div className="dropdown-section">
                  <h3 className="dropdown-title">Word Lane Picks</h3>
                  <Link to="/trending-books" className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Trending this week</Link>

                  <Link
                    to="/new-releases"
                    className="dropdown-item"
                    onClick={() => setShowDiscoverDropdown(false)}
                  >
                    New releases
                  </Link>



                  <div className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Free Shipping</div>
                  <Link to="/bestsellers" className="dropdown-item" onClick={() => setShowDiscoverDropdown(false)}>Best sellers</Link>
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
              </div>
            )}
          </div>

          {/* FOR WRITERS DROPDOWN */}
          <div className="nav-dropdown">
            <a href="#writers" className="nav-link" onClick={(e) => { e.preventDefault(); setShowWritersDropdown(!showWritersDropdown); setShowDiscoverDropdown(false); }}>For Writers ▼</a>
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
                  <div className="item-title">Printing Tools</div>
                  <div className="item-desc">On demand, short run, printing can be provided</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="navbar-right">
          <Link to="/about" className="nav-icon" title="About Us">About Us</Link>



          <Link to="/" className="nav-icon" title="Home">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link to="/login" className="nav-icon" title="Login">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <button className="nav-icon search-icon-btn" onClick={() => setShowSearch(!showSearch)} title="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {showSearch && (
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by Book Title or Author Name"
                className="search-input"
              />
            </div>
          )}

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
      </div>
    </nav>
  );
}

export default Navbar;