import React from 'react';
import './Registration.css';

function Registration() {
    return (
        <section id="registration" className="registration">
            <div className="container">
                <h2 className="animate-down">Register Now</h2>
                <p className="animate-up delay-1">Secure your spot at the Crescent Academia Moot 2.0. Join us for an unforgettable academic experience.</p>

                <div className="registration-content animate-zoom delay-2">
                    <div className="registration-card">
                        <div className="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <polyline points="16 11 18 13 22 9"></polyline>
                            </svg>
                        </div>
                        <h3>Delegate Registration</h3>
                        <p>Ready to showcase your academic prowess? Fill out the official registration form to participate as a delegate.</p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfKZcsuDRRvHnJhaUJERrYWMk2bXpdhmi47YZX5PmODPSS5OQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="register-btn animate-pulse-soft"
                        >
                            Open Registration Form
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Registration;
