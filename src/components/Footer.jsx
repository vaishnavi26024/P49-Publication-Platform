import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">📚</span>
            <div>
              <div className="logo-text">Word Lane Publications</div>
              <div className="footer-description">
                <div>Read beyond</div>
                <div>Think Forward</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-section">
          <h3>For Writers</h3>
          <ul>
            <li><a href="#publish">Get Published</a></li>
            <li><a href="#distribute">Distribute</a></li>
            <li><a href="#marketing">Marketing Tools</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Read</h3>
          <ul>
            <li><a href="#trending">Trending This Week</a></li>
            <li><a href="#releases">New Releases</a></li>
            <li><a href="#editors">Editor's Picks</a></li>
            <li><a href="#bestsellers">Bestsellers</a></li>
            <li><a href="#amazon">Amazon Bestsellers</a></li>
          </ul>
        </div>

        
      </div>

      <div className="footer-bottom">
        <p>Word Lane Publications provides an easy and modern platform for authors to publish and distribute their work worldwide. Publish in multiple languages, reach major retailers, and take your next step as an author.</p>
        <div className="footer-links">
          <a href="#terms">Terms of Use</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#sitemap">Sitemap</a>
        </div>
        <p className="copyright">© 2026 Word Lane. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
