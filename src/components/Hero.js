import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToDetails = () => {
    const element = document.getElementById('details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="partners-logos">
          <span className="partner-placeholder">CRESCENT MODEL SCHOOL</span>
          <span className="partner-placeholder">AND</span>
          <span className="partner-placeholder">KIFAYAT PUBLISHERS</span>
        </div>
        <p className="present">PRESENT</p>
        <img src="/hero-logo.png" alt="Crescent Academia Moot 2.0" className="hero-logo" />
        <div className="event-dates">
          <p><strong>February 13 - 15, 2026</strong></p>
          <p>at Crescent Model Higher Secondary School (Girls Campus)</p>
        </div>
        <button className="cta-button" onClick={scrollToDetails}>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
