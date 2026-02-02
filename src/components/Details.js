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
        { label: 'End:', value: 'February 15, 2026 at 4:30 PM' }
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
      ]
    },
    {
      id: 3,
      title: 'Organizer',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      items: [
        { label: '', value: 'Crescent Girls' }
      ]
    },
    {
      id: 4,
      title: 'Timezone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      items: [
        { label: '', value: 'Pakistan Standard Time (PKT)' },
        { label: '', value: 'UTC+5:00' }
      ]
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Details;
