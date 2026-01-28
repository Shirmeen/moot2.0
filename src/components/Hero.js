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
          <span className="partner-placeholder" style={{ color: '#0d3b52' }}>CRESCENT MODEL SCHOOL</span>
          <span className="partner-placeholder" style={{ color: '#0d3b52' }}>AND</span>
          <span className="partner-placeholder" style={{ color: '#0d3b52' }}>KIFAYAT PUBLISHERS</span>
        </div>
        <p className="present" style={{ color: '#00a9b5' }}>PRESENT</p>
        <img src={process.env.PUBLIC_URL + "/hero-logo-new.png"} alt="Crescent Academia Moot 2.0" className="hero-logo" />
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
