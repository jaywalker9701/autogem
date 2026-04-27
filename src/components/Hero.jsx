import React from 'react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-content">
        <h1>Beyond Transactional<span className="underline"></span></h1>
        <p>
          More than 10,000 products, over 5,000 customers and 50 global distributors combine to position 
          Autogem as a leading name in the automotive industry. But we're defined by much more than 
          Autogem numbers alone, as we go 'beyond the transaction' with a unique partnership approach.
        </p>
        <div className="hero-btns">
          <a href="#" className="btn-hero btn-navy">Our Story →</a>
          <a href="#" className="btn-hero btn-white">Our Products →</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
