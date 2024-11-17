import React, { useState } from 'react';
import './CakeItem.css';

function CakeItem({ cake, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(cake.sizeOptions[0]);
  const [selectedCustomization, setSelectedCustomization] = useState(cake.customizations[0]);

  const handleAddToCart = () => {
   
    alert(`${cake.name} has been added to your cart!`);
    
    onAddToCart(cake, selectedSize, selectedCustomization);
  };

  return (
    <div className="cake-item">
      <img src={cake.image} alt={cake.name} className="cake-image" />
      <h3>{cake.name}</h3>
      <p>{cake.description}</p>
      <p>Price: ${cake.price}</p>

   
      <div>
        <label>Select Size: </label>
        <select onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize}>
          {cake.sizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Customizations: </label>
        <select onChange={(e) => setSelectedCustomization(e.target.value)} value={selectedCustomization}>
          {cake.customizations.map((custom) => (
            <option key={custom} value={custom}>
              {custom}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default CakeItem;
