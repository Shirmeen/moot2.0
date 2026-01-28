// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to nav menu items on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Count down to event
function updateEventCountdown() {
    const eventDate = new Date('February 13, 2026 09:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        console.log(`Event starts in: ${days} days, ${hours} hours, ${minutes} minutes`);
    }
}

// Initialize countdown on page load
document.addEventListener('DOMContentLoaded', updateEventCountdown);

// Update countdown every minute
setInterval(updateEventCountdown, 60000);

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.highlight-card, .detail-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Add event tracking
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);
    // This can be extended to send data to analytics service
}

// Track button clicks
document.querySelectorAll('.cta-button, .map-button').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('button_click', {
            buttonText: this.textContent,
            href: this.href
        });
    });
});

// Track when sections come into view
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
    section.addEventListener('inview', () => {
        trackEvent('section_viewed', {
            sectionId: section.id
        });
    });
});
