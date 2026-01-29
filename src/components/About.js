import React from 'react';
import './About.css';

function About() {
  const highlights = [
    {
      id: 1,
      title: '🎓 Academic Excellence',
      description: 'A platform for showcasing intellectual prowess and academic achievements'
    },
    {
      id: 2,
      title: '🤝 Networking',
      description: 'Connect with like-minded individuals and industry professionals'
    },
    {
      id: 3,
      title: '💡 Innovation',
      description: 'Explore new ideas and creative solutions in various fields'
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
