import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <img src="/logo.png" alt="Crescent Academia Moot 2.0" className="logo-img" />
            <span className="logo-text">Moot 2.0</span>
          </div>
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className={activeSection === 'home' ? 'active' : ''}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href="#details" onClick={(e) => { e.preventDefault(); scrollToSection('details'); }} className={activeSection === 'details' ? 'active' : ''}>Details</a>
            <a href="#location" onClick={(e) => { e.preventDefault(); scrollToSection('location'); }} className={activeSection === 'location' ? 'active' : ''}>Location</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
