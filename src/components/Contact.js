import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="animate-down">Get in Touch</h2>
        <p className="animate-up delay-1">For more information about Crescent Academia Moot 2.0, please reach out to the organizers.</p>
        <div className="contact-info animate-zoom delay-2">
          <p>Email: <a href="mailto:info@crescentacademia.com">info@crescentacademia.com</a></p>
          <p>Organization: Crescent Girls</p>
          <p>Location: Lahore, Punjab, Pakistan</p>
          <p className="social-contact">
            <a href="https://www.facebook.com/profile.php?id=61586086445243" target="_blank" rel="noopener noreferrer" className="facebook-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Visit our Facebook Page
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
