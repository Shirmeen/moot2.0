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
      <div className="floating-elements">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`element elem-${i + 1}`}></div>
        ))}
      </div>
      <div className="hero-content">
        <div className="partners-logos animate-down">
          <img src={process.env.PUBLIC_URL + "/crescent-logo.png"} alt="Crescent Model School" className="partner-logo animate-float" />
          <span className="partner-placeholder">&</span>
          <img src={process.env.PUBLIC_URL + "/kifayat-logo.png"} alt="Kifayat Publishers" className="partner-logo animate-float" />
        </div>
        <p className="present animate-reveal">PRESENT</p>
        <div className="hero-logo-container animate-zoom delay-1">
          <img src={process.env.PUBLIC_URL + "/hero-logo-new.png"} alt="Crescent Academia Moot 2.0" className="hero-logo" />
        </div>
        <div className="event-dates animate-up delay-2">
          <p className="animate-reveal delay-3"><strong>February 13 - 15, 2026</strong></p>
          <p className="animate-reveal delay-4">at Crescent Model Higher Secondary School (Girls Campus)</p>
        </div>
        <button className="cta-button animate-pulse-soft delay-5" onClick={scrollToDetails}>Learn More</button>
      </div>
      <div className="scroll-indicator animate-down delay-5">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>

  );
}

export default Hero;
