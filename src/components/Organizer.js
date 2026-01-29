import React from 'react';
import './Organizer.css';

const Organizer = () => {
    return (
        <section id="organizer" className="organizer-section">
            <div className="organizer-card">
                <div className="organizer-bg">
                    <img src={process.env.PUBLIC_URL + '/speakers/sofia.png'} alt="Sofia Qadir Khan" />
                </div>
                <div className="organizer-content">
                    <span className="organizer-label">The Organizer</span>
                    <h2>Sofia Qadir Khan</h2>
                    <span className="organizer-title">Principal, Crescent Model Higher Secondary School (Girls Campus)</span>
                    <p className="organizer-bio">
                        Ms. Sofia Qadir Khan is a visionary educational leader committed to fostering a supportive and inclusive environment.
                        Under her leadership, she inspires students to develop creativity, confidence, and resilience, empowering
                        them to become ethical, lifelong learners and achieve excellence in all facets of life.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Organizer;
