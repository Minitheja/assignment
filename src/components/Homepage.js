import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Homepage.css'; 

function Homepage() {
  return (
    <div className="homepage">
    
      <section className="welcome-section">
        <h1>Welcome to Sweet Delights Cake Shop</h1>
        <p>Bringing joy to every celebration with our delicious and beautiful cakes.</p>
      </section>

     
      <section className="carousel-section">
        <Carousel 
          showThumbs={false} 
          autoPlay 
          infiniteLoop 
          showStatus={false} 
          showIndicators={true} 
          dynamicHeight={false}
        >
          <div className="carousel-item">
            <img src="img3.jpeg" alt="Chocolate Cake" />
            <div className="carousel-overlay">
              <h2>Featured: Chocolate Cake</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img1.jpg" alt="Fruit Cake" />
            <div className="carousel-overlay">
              <h2>Special: Fresh Fruit Cake</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img2.jpg" alt="Custom Cake" />
            <div className="carousel-overlay">
              <h2>Custom Creations: Just for You!</h2>
            </div>
          </div>
        </Carousel>
      </section>

    
      <section className="special-offers">
        <h2>Special Offers</h2>
        <ul>
          <li>🎉 20% off on Chocolate Cakes this weekend!</li>
          <li>🎁 Free delivery on orders over $50.</li>
          <li>🛍️ Buy 2 Fruit Cakes, get 1 free!</li>
        </ul>
      </section>
    </div>
  );
}

export default Homepage;
