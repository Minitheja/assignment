

import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-main-links">
          <p>© 2024 Cake Shop | All Rights Reserved</p>
          
          
        
          <div className="footer-links">
            
            <Link to="/">Home</Link>
            <Link to="/cakes">Cakes</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@cakeshop.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Cake Street, Sweet City</p>
        </div>

       
        <div className="social-links">
          <h3>Follow Us</h3>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
