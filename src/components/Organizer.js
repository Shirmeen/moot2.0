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
                            With over two decades of experience in school leadership, educational leadership, and curriculum innovation, including her current role as Principal at Crescent Model Higher Secondary School (Girls Campus) in Lahore, Miss Sofia Qadir Khan leads with empathy, integrity, and a steadfast belief in unlocking each student’s potential. She specializes in educational management, curriculum enhancement, and student-centred learning, with a goal to strengthen academic outcomes while fostering emotional, social, and ethical growth in every student. She is passionate about supporting young women to thrive academically, lead confidently, and engage meaningfully with local and global opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organizer;
