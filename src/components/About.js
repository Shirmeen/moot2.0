import React from 'react';
import './About.css';

function About() {
  const highlights = [
    {
      id: 1,
      title: 'Academic Excellence',
      description: 'A platform for showcasing intellectual prowess and academic achievements',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Networking',
      description: 'Connect with like-minded individuals and industry professionals',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Innovation',
      description: 'Explore new ideas and creative solutions in various fields',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v8"></path>
          <path d="M12 14v8"></path>
          <path d="M4.93 4.93l5.66 5.66"></path>
          <path d="M13.41 13.41l5.66 5.66"></path>
          <path d="M2 12h8"></path>
          <path d="M14 12h8"></path>
          <path d="M4.93 19.07l5.66-5.66"></path>
          <path d="M13.41 10.59l5.66-5.66"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="animate-down">About the Event</h2>
        <p className="animate-up delay-1">Crescent Academia Moot 2.0 is a prestigious academic event organized by Crescent Girls, bringing together students and professionals for an enriching experience focused on intellectual discourse, debate, and networking.</p>
        <div className="highlights">
          {highlights.map((highlight, index) => (
            <div key={highlight.id} className={`highlight-card highlight-${highlight.id} animate-zoom delay-${index + 1}`}>
              <div className="highlight-icon">{highlight.icon}</div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
