import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Organizer from './components/Organizer';
import CoOrganizer from './components/CoOrganizer';
import Details from './components/Details';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Contact from './components/Contact';
import Registration from './components/Registration';
import Speakers from './components/Speakers';
import Trainers from './components/Trainers';
import Moderators from './components/Moderators';
import Panelists from './components/Panelists';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
      setShowBackToTop(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <div className="organizers-section-wrapper">
        <div className="organizer-bg-elements">
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
          <div className="bg-shape shape-3"></div>
          <ul className="background-circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Organizer />
        <CoOrganizer />
      </div>
      <Details />
      <Schedule />
      <Speakers />
      <Trainers />
      <Panelists />
      <Moderators />
      <Registration />
      <Location />
      <Contact />
      <Footer />


      {showBackToTop && (
        <button
          className="back-to-top animate-up duration-fast"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}


export default App;
