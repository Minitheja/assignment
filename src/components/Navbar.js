import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar({ cartCount }) {
  return (
    <nav>
      <h1>Cake Shop</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cakes">Cakes</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
