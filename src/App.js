// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import CakeList from './components/CakeList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import cakes from './data/cakesData';
import './styles/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [filteredCakes] = useState(cakes);

  const handleAddToCart = (cake) => {
    setCartItems([...cartItems, cake]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/cakes"
            element={<CakeList cakes={filteredCakes} onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />}
          />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
