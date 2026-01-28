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
        <div className="partners-logos animate-down">
          <img src={process.env.PUBLIC_URL + "/crescent-logo.png"} alt="Crescent Model School" className="partner-logo animate-float" />
          <span className="partner-placeholder">AND</span>
          <img src={process.env.PUBLIC_URL + "/kifayat-logo.png"} alt="Kifayat Publishers" className="partner-logo animate-float" />
        </div>
        <p className="present animate-zoom delay-1">PRESENT</p>
        <div className="hero-logo-container animate-up delay-2">
          <img src={process.env.PUBLIC_URL + "/hero-logo-new.png"} alt="Crescent Academia Moot 2.0" className="hero-logo" />
        </div>
        <div className="event-dates animate-up delay-3">
          <p><strong>February 13 - 15, 2026</strong></p>
          <p>at Crescent Model Higher Secondary School (Girls Campus)</p>
        </div>
        <button className="cta-button animate-up delay-4" onClick={scrollToDetails}>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
