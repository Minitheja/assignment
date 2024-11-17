
import React, { useState } from 'react';
import CakeItem from './CakeItem';
import cakes from '../data/cakesData'; 

function CakeList({ onAddToCart }) {
  const [filteredCakes, setFilteredCakes] = useState(cakes);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterCakes = (category) => {
    setSelectedCategory(category);
    setFilteredCakes(
      category === 'All'
        ? cakes
        : cakes.filter((cake) => cake.category === category)
    );
  };

  return (
    <div>
      <h2>Our Cakes</h2>
      
      <div className="checklist-container">
        <button 
          onClick={() => filterCakes('All')} 
          className={`checklist-button ${selectedCategory === 'All' ? 'active' : ''}`}
        >
          All
        </button>
        <button 
          onClick={() => filterCakes('Chocolate Cakes')} 
          className={`checklist-button ${selectedCategory === 'Chocolate Cakes' ? 'active' : ''}`}
        >
          Chocolate Cakes
        </button>
        <button 
          onClick={() => filterCakes('Classic Cakes')} 
          className={`checklist-button ${selectedCategory === 'Classic Cakes' ? 'active' : ''}`}
        >
          Classic Cakes
        </button>
        <button 
          onClick={() => filterCakes('Specialty Cakes')} 
          className={`checklist-button ${selectedCategory === 'Specialty Cakes' ? 'active' : ''}`}
        >
          Specialty Cakes
        </button>
        <button 
          onClick={() => filterCakes('Fruit Cakes')} 
          className={`checklist-button ${selectedCategory === 'Fruit Cakes' ? 'active' : ''}`}
        >
          Fruit Cakes
        </button>
        <button 
          onClick={() => filterCakes('Tropical Cakes')} 
          className={`checklist-button ${selectedCategory === 'Tropical Cakes' ? 'active' : ''}`}
        >
          Tropical Cakes
        </button>
      </div>

      {/* Display Filtered Cakes */}
      <div className="cake-list">
        {Array.isArray(filteredCakes) && filteredCakes.length > 0 ? (
          filteredCakes.map((cake) => (
            <CakeItem key={cake.id} cake={cake} onAddToCart={onAddToCart} />
          ))
        ) : (
          <p>No cakes available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CakeList;
