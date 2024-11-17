

import React from 'react';

function Cart({ cartItems, onRemoveFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button disabled={cartItems.length === 0}>Checkout</button>
    </div>
  );
}

export default Cart;
