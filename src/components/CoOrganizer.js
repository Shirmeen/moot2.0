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
                            Kifayat Publishers is a leading name in educational excellence and publishing in Pakistan.
                            With a legacy of providing high-quality educational resources, they are committed to
                            advancing literacy and supporting teachers and institutions nationwide.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoOrganizer;
