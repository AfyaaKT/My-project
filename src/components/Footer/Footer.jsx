import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>My Website</h2>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <p>Contact Us:</p>
            <p>Email: contact@example.com</p>
            <p>Phone: 0775 000 000</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
