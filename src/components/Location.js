import React from 'react';
import './Location.css';

function Location() {
  return (
    <section id="location" className="location">
      <div className="container">
        <h2>Venue Location</h2>
        <div className="location-content">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.9644947436584!2d74.32250099999999!3d31.5340203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190523aa5dd1db%3A0xf2ae04c5cc27920c!2sThe%20Crescent%20College%20Lahore.%20Girls%20Campus!5e0!3m2!1sen!2s!4v1706460000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Crescent College Lahore"
            ></iframe>
          </div>
          <div className="location-info">
            <h3>The Crescent College Lahore</h3>
            <p className="campus-name">Girls Campus</p>
            <p className="address">Lahore, Punjab, Pakistan</p>
            <a
              href="https://www.google.com/maps/place/The+Crescent+College+Lahore.+Girls+Campus/@31.5340203,74.322501,16z/data=!4m10!1m2!2m1!1screscent+model+girls+campus+address!3m6!1s0x39190523aa5dd1db:0xf2ae04c5cc27920c!8m2!3d31.5340203!4d74.3315132!15sCiNjcmVzY2VudCBtb2RlbCBnaXJscyBjYW1wdXMgYWRkcmVzcyICSAFaHSIbY3Jlc2NlbnQgbW9kZWwgZ2lybHMgY2FtcHVzkgEHY29sbGVnZZoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsbVQydHZNMDFUTVVKa1NHaHZWbGN4U1ZWdVZuRlZlbXhhVFhwa2FXVlhZeEFC4AEA-gEECAAQFw!16s%2Fg%2F11s8h4f578?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
              className="map-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
