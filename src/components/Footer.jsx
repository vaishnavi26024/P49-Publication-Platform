import './Footer.css';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <Logo />
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
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
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
