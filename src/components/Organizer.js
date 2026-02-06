import React from 'react';
import './Organizer.css';

const Organizer = () => {
    return (
        <section id="organizer" className="organizer-section">
            <div className="container">
                <div className="organizer-card">
                    <div className="organizer-image-container">
                        <img src={process.env.PUBLIC_URL + '/speakers/sofia.png'} alt="Miss Sofia Qadir Khan" className="organizer-image" loading="lazy" />
                    </div>
                    <div className="organizer-info">
                        <span className="organizer-label">The Organizer</span>
                        <h2>Miss Sofia Qadir Khan</h2>
                        <span className="organizer-title">Principal, Crescent Model Higher Secondary School (Girls Campus)</span>
                        <p className="organizer-bio">
                            Miss Sofia Qadir Khan is a visionary educational leader committed to fostering a supportive and inclusive environment.
                            Under her leadership, <strong>Crescent Model Higher Secondary School</strong> continues its 57-year legacy of nurturing talented youth.
                            Renowned for high educational standards and merit-based admissions, the school builds a strong academic ethos
                            to produce confident, capable, and value-driven "Crescentarians."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organizer;
