import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo animate-left">
            <span className="logo-text">Moot 2.0</span>
          </div>
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'details', 'location', 'contact'].map((section, index) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
                className={`${activeSection === section ? 'active' : ''} animate-down delay-${index + 1}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
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
