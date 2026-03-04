import { Link } from "react-router-dom";
import Logo from "../Logo";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO SECTION */}
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

        {/* COMPANY SECTION */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL HANDLES */}
        <div className="footer-section contact-wrapper">

          {/* CONTACT LEFT */}
          <div className="contact-left">
            <h3>CONTACT</h3>
            <p className="contact-text">wordlanepublication@gmail.com</p>
            <p className="contact-text">+91 86779 75162</p>
          </div>

          {/* SOCIAL RIGHT */}
          <div className="contact-right">
            <h3>SOCIAL HANDLES</h3>

            <div className="social-icons">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/wordlanepublication"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/word-lane-tech/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Wordlanepublication"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>

            </div>
          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          Word Lane Publications provides an easy and modern platform for authors
          to publish and distribute their work worldwide.
        </p>
        <p className="copyright">
  ©2026 
  <a
    href="https://wordlanetech.com"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-link-text"
  >
    Word Lane Tech
  </a>. All rights reserved.
</p>

      </div>

    </footer>
  );
}

export default Footer;
