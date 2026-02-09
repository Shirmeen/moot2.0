import React from 'react';
import './Moderators.css';

const moderators = [
    {
        name: "Ms. Sofia Qadir Khan",
        role: "MODERATOR | Principal, Crescent Model Higher Secondary School, Girls Campus",
        bio: "Miss Sofia Qadir Khan is a visionary educational leader committed to fostering a supportive and inclusive environment. Under her leadership, Crescent Model Higher Secondary School continues its 57-year legacy of nurturing talented youth. Renowned for high educational standards and merit-based admissions, the school builds a strong academic ethos to produce confident, capable, and value-driven 'Crescentarians'.",
        image: "/speakers/sofia.png",
        customClass: "sofia-card"
    },
    {
        name: "Dr. Shazia Iqbal Khan",
        role: "MODERATOR | Head of School IB TNS Beaconhouse Gulberg",
        bio: "Dr. Shazia Iqbal Khan is a seasoned educator and visionary leader with over two decades of experience. A medical graduate turned education innovator, she has led multiple schools to IB accreditation, founded a STEM-focused institution, and championed teacher development. Currently serving as Head of School at TNS Beaconhouse. She is also the Chairperson of the IB Pakistan Association (2018 & 2025).",
        image: "/speakers/shazia_new.png"
    },

    {
        name: "Mrs. Saira Tahir",
        role: "MODERATOR | Founder Trustee, TEDDS | President, SET",
        bio: "Mrs. Saira Tahir is a dedicated social worker and philanthropist committed to inclusive education and community development. She is Founder Trustee of TEDDS, which runs a growing network of 13 Trust Schools in Lahore, providing quality education to 8,000+ underprivileged students. She also serves as President of SET, delivering free vocational and ICT training to 4,000+ beneficiaries, and General Secretary of FSPA, supporting special children and their families. Additionally, she is actively involved with several civic and welfare organizations, including Zoo Safari Lahore and educational and disability support societies. Guided by a strong belief in service to humanity, she works tirelessly beyond boundaries of caste, creed, and culture.",
        image: "/speakers/saira_tahir.png"
    }
];

const Moderators = () => {
    return (
        <section id="moderators" className="moderators-section">
            <div className="moderators-container">
                <div className="moderators-header">
                    <h2>Event Moderators</h2>
                    <p>Guiding the conversation and ensuring a seamless flow of ideas.</p>
                </div>
                <div className="moderators-grid">
                    {moderators.map((moderator, index) => (
                        <div className={`moderator-card ${moderator.customClass || ''}`} key={index}>
                            <div className="moderator-image-container">
                                {moderator.image ? (
                                    <img src={process.env.PUBLIC_URL + moderator.image} alt={moderator.name} className="moderator-image" loading="lazy" />
                                ) : (
                                    <div className="moderator-placeholder">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="moderator-info">
                                <span className="moderator-role">{moderator.role}</span>
                                <h3>{moderator.name}</h3>
                                <p className="moderator-bio">{moderator.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Moderators;
