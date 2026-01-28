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
                        <div className="registration-logo-wrapper">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfKZcsuDRRvHnJhaUJERrYWMk2bXpdhmi47YZX5PmODPSS5OQ/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="registration-logo-link"
                            >
                                <img
                                    src={process.env.PUBLIC_URL + "/register-now.png"}
                                    alt="Register Now"
                                    className="registration-robot animate-float"
                                />
                            </a>
                        </div>
                        <h3>Delegate Registration</h3>
                        <p>Ready to showcase your academic prowess? Click the robot above to open the official registration form.</p>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Registration;
