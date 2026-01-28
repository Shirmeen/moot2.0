import React from 'react';
import './Details.css';

function Details() {
  const details = [
    {
      id: 1,
      title: '📅 Dates & Time',
      items: [
        { label: 'Start:', value: 'February 13, 2026 at 9:00 AM' },
        { label: 'End:', value: 'February 15, 2026 at 4:30 PM' }
      ]
    },
    {
      id: 2,
      title: '📍 Location',
      items: [
        { label: '', value: 'The Crescent College Lahore' },
        { label: '', value: 'Girls Campus' },
        { label: '', value: 'Lahore, Punjab, Pakistan' }
      ]
    },
    {
      id: 3,
      title: '👥 Organizer',
      items: [
        { label: '', value: 'Crescent Girls' }
      ]
    },
    {
      id: 4,
      title: '🌍 Timezone',
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
            <div key={detail.id} className={`detail-item animate-left delay-${index + 1}`}>
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
