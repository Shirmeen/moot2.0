import React from 'react';
import './CoOrganizer.css';

const CoOrganizer = () => {
    return (
        <section className="co-organizer-section">
            <div className="container">
                <div className="co-organizer-card">
                    <div className="co-organizer-logo-container">
                        <img src={process.env.PUBLIC_URL + '/kifayat-logo.png'} alt="Kifayat Publishers" className="co-organizer-logo" />
                    </div>
                    <div className="co-organizer-info">
                        <span className="co-organizer-label">Co-Organizer</span>
                        <h2>Kifayat Publishers</h2>
                        <p className="co-organizer-text">
                            Established in 1963, <strong>Kifayat Publishers</strong> is a trusted name in Education. Their mission is to provide quality education at affordable pricing, partnering with leading international publishers to bring the latest pedagogy to Pakistan. They craft content that fosters curiosity, encourages research, and prepares students for the future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoOrganizer;
