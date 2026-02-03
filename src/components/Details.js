import React from 'react';
import './Details.css';

function Details() {
  const details = [
    {
      id: 1,
      title: 'Dates & Time',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <path d="M8 14h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 18h.01"></path>
          <path d="M12 18h.01"></path>
        </svg>
      ),
      items: [
        { label: 'Start:', value: 'February 13, 2026 at 9:00 AM' },
        { label: 'End:', value: 'February 15, 2026 at 4:30 PM' },
        { label: 'Duration:', value: '3 Full Days' },
        { label: 'Policy:', value: 'Access for Registered Attendees' }
      ]
    },
    {
      id: 2,
      title: 'Location',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      items: [
        { label: '', value: 'Crescent Model Higher Secondary School' },
        { label: '', value: 'Girls Campus' },
        { label: '', value: 'Lahore, Punjab, Pakistan' }
      ],
      mapLink: 'https://www.google.com/maps/place/The+Crescent+College+Lahore.+Girls+Campus/@31.5340203,74.322501,16z/data=!4m10!1m2!2m1!1screscent+model+girls+campus+address!3m6!1s0x39190523aa5dd1db:0xf2ae04c5cc27920c!8m2!3d31.5340203!4d74.3315132!15sCiNjcmVzY2VudCBtb2RlbCBnaXJscyBjYW1wdXMgYWRkcmVzcyICSAFaHSIbY3Jlc2NlbnQgbW9kZWwgZ2lybHMgY2FtcHVzkgEHY29sbGVnZZoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsbVQydHZNMDFUTVVKa1NHaHZWbGN4U1ZWdVZuRlZlbXhhVFhwa2FXVlhZeEFC4AEA-gEECAAQFw!16s%2Fg%2F11s8h4f578?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  return (
    <section id="details" className="details">
      <div className="container">
        <h2 className="animate-down">Event Details</h2>
        <div className="details-grid">
          {details.map((detail, index) => (
            <div key={detail.id} className={`detail-item detail-${detail.id} animate-zoom delay-${index + 1}`}>
              <div className="detail-icon">
                {detail.icon}
              </div>
              <h3>{detail.title}</h3>
              {detail.items.map((item, idx) => (
                <p key={idx}>
                  {item.label && <strong>{item.label}</strong>}
                  {item.label && ' '}
                  {item.value}
                </p>
              ))}
              {detail.mapLink && (
                <a
                  href={detail.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="details-map-button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                    <line x1="8" y1="2" x2="8" y2="18"></line>
                    <line x1="16" y1="6" x2="16" y2="22"></line>
                  </svg>
                  Get Directions
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Details;
