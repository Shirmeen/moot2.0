import React from 'react';
import './Registration.css';

function Registration() {
    return (
        <section id="registration" className="registration">
            <div className="container">
                <h2 className="animate-down">Register Now</h2>
                <p className="animate-up delay-1 registration-subtitle">Secure your spot at the Crescent Academia Moot 2.0. Join us for an unforgettable academic experience.</p>

                <div className="registration-bg-shapes">
                    <div className="reg-shape rs-1"></div>
                    <div className="reg-shape rs-2"></div>
                    <div className="reg-shape rs-3"></div>
                </div>

                <div className="registration-content animate-zoom delay-2">
                    <div className="registration-card">
                        <div className="registration-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <div className="cta-vibe">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            Don't miss out on the experience!
                        </div>
                        <h3>Join the Moot 2.0</h3>
                        <p>Be part of Lahore's most awaited academic event. Secure your place now and connect with brilliant minds.</p>

                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfKZcsuDRRvHnJhaUJERrYWMk2bXpdhmi47YZX5PmODPSS5OQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="register-btn-modern pulse-animation"
                        >
                            <span>Register Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>

                        <div className="registration-footer">
                            <span className="spots-left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                Limited Spots Available!
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Registration;
