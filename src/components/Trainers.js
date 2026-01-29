import React from 'react';
import './Trainers.css';

const trainers = [
    {
        name: "Amina Amir-ud-Din Chughtai",
        role: "Trainer",
        bio: "Amina holds a PGCEi from Canterbury Christchurch University, UK, and a certificate in SUSI from California State University, USA. She is an accredited Cambridge International Trainer for Enrichment Programmes and a Cambridge PDQ programme leader with over 23 years of experience in teaching and training.",
        image: "/speakers/amina.png"
    },
    {
        name: "Tayyabah Amer Malik",
        role: "Trainer",
        bio: "With over two decades of international experience across Pakistan, Malaysia, the UAE, and the USA, Tayyabah is a seasoned educational leader. A certified IB Head of School for PYP and MYP, she specializes in curriculum leadership and school improvement.",
        workshop: "From Learning Theories to IB Practice: Why We Teach the Way We Teach",
        image: "/speakers/tayyabah_trainer.png"
    },
    {
        name: "Asma Amanat",
        role: "Trainer & Panelist",
        bio: "Ms. Asma Amanat has joined Crescent as General Manager of MYP and DP, bringing 16 years of experience in IB education. A seasoned IB practitioner and international academic author, her research has been featured in the European Journal of Education.",
        image: "/speakers/asma.jpg"
    },
    {
        name: "Tina Hameed",
        role: "Trainer & Panelist",
        bio: "Tina Hameed is the founding Director of the Teaching and Learning Centre (TLC) at Aitchison College. She has been teaching and training for 37 years and is an accredited tutor from the University of Bradford.",
        workshop: "Learning that Lasts",
        image: "/speakers/tina_trainer.png"
    },
    {
        name: "Dr. Iain Riley",
        role: "Trainer & Panelist",
        bio: "Dr. Iain Riley is the Head of School at TNS Beaconhouse, DHA Lahore. He holds a PhD in Education from University of Glasgow and has over ten years of leadership experience and is a strong advocate for learner agency.",
        workshop: "PROMOTING SCHOOL CULTURE THROUGH AGENCY",
        image: "/speakers/iain.png"
    }
];

const Trainers = () => {
    return (
        <section id="trainers" className="trainer-section">
            <div className="trainer-container">
                <div className="trainer-header">
                    <h2>Our Experts Trainers</h2>
                    <p>Learn from industry experts and seasoned educators in our specialized workshop sessions.</p>
                </div>
                <div className="trainer-grid">
                    {trainers.map((trainer, index) => (
                        <div className="trainer-card" key={index}>
                            <div className="trainer-image-container">
                                <img src={process.env.PUBLIC_URL + trainer.image} alt={trainer.name} className="trainer-image" />
                            </div>
                            <div className="trainer-info">
                                <span className="trainer-role">{trainer.role}</span>
                                <h3>{trainer.name}</h3>
                                {trainer.workshop && (
                                    <div className="trainer-workshop">
                                        <strong>Workshop Topic</strong>
                                        <p>{trainer.workshop}</p>
                                    </div>
                                )}
                                <p className="trainer-bio">{trainer.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
