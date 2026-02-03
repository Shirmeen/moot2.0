import React from 'react';
import './Trainers.css';

const trainers = [
    {
        name: "Dr. Syeda Manal Akbar",
        role: "Vice Principal - IB Girls Campus",
        bio: "Dr. Syeda Manal Akbar is an experienced education leader and Vice Principal of the IB Girls Campus at Crescent Model Higher Secondary School, Lahore. With international experience in the Middle East and the UK, she brings a strong global perspective to IB curriculum leadership.",
        workshop: "IB PYP in Pakistan vs International PYP Schools: Bridging local context with global practice",
        image: "/speakers/syeda_manal_new.png"
    },

    {
        name: "Ms. Farah Masood",
        role: "Panelist | Head of School - Learning Alliance International",
        bio: "Farah Masood is a seasoned IB practitioner and accomplished school leader with over three decades of experience. As Head of School at Learning Alliance International, she has led diverse academic teams and served as Chairperson of the Executive Committee of IBPAK from 2023 to 2025.",
        image: "/speakers/farah_masood_new.png"
    },
    {
        name: "Mr. Taimur K Bandey",
        role: "Trainer & Panelist | Head of School Trinity School",
        bio: "Taimur K Bandey is Head of School at Trinity (IB, Cambridge and American High School), Lahore. An IB consultant with 25+ years of experience, he is a former member of the national commission for curriculum development for the Government of Pakistan.",
        workshop: "REIMAGINING THE IB EDUCATION",
        image: "/speakers/taimur_new.png",
        customClass: "center-taimur"
    },
    {
        name: "Ms. Amina Amir-ud-Din Chughtai",
        role: "Trainer",
        bio: "Amina holds a PGCEi from Canterbury Christchurch University, UK, and a certificate in SUSI from California State University, USA. She is an accredited Cambridge International Trainer for Enrichment Programmes and a Cambridge PDQ programme leader with over 23 years of experience in teaching and training.",
        image: "/speakers/amina_new.png"
    },
    {
        name: "Ms. Asma Amanat",
        role: "Trainer & Panelist",
        bio: "Ms. Asma Amanat has joined Crescent as General Manager of MYP and DP, bringing 16 years of experience in IB education. A seasoned IB practitioner and international academic author, her research has been featured in the European Journal of Education.",
        image: "/speakers/asma_new.png",
        customClass: "asma-card"
    },
    {
        name: "Ms. Tina Hameed",
        role: "Trainer & Panelist",
        bio: "Tina Hameed is the founding Director of the Teaching and Learning Centre (TLC) at Aitchison College. She has been teaching and training for 37 years and is an accredited tutor from the University of Bradford.",
        workshop: "Learning that Lasts",
        image: "/speakers/tina.png"
    },
    {
        name: "Dr. Iain Riley",
        role: "Trainer & Panelist",
        bio: "Dr. Iain Riley is the Head of School at TNS Beaconhouse, DHA Lahore. He holds a PhD in Education from University of Glasgow and has over ten years of leadership experience and is a strong advocate for learner agency.",
        workshop: "PROMOTING SCHOOL CULTURE THROUGH AGENCY",
        image: "/speakers/iain.png"
    },
    {
        name: "Ms. Urooj Shahab",
        role: "PYP Coordinator Beaconhouse Newlands Lahore",
        bio: "Urooj Shahab is a PYP Coordinator, IBEN Workshop & Programme Leader, with 15 years of experience in education. She specializes in building and leading PYP frameworks that prioritize creative inquiry. Holding a Master's in Art Education, she believes learning is an evolving journey, not a destination. As a ceramic artist, she thrives on creative problem-solving and brings the same patient, hands-on approach to teacher training, curriculum design, and teaching. She views the collaborative energy of shaping education as akin to creating art.",
        workshop: "Leading Learning the IB Way",
        image: "/speakers/urooj_shahab_new.png"
    },
    {
        name: "Ms. Fatima Ali",
        role: "MYP Coordinator Beaconhouse Newlands Lahore",
        bio: "Fatima Ali is an accomplished IB leader and educational strategist with over a decade of experience across the PYP, MYP, and DP frameworks. Currently an IB MYP Coordinator, she drives curriculum alignment, programme quality, and collaborative planning. A recognized IB Educator Network (IBEN) member and DP Examiner for Digital Society and the Extended Essay, she has also contributed as an IB Curriculum Developer. Specializing in interdisciplinary unit design, Service as Action, and embedding ATL skills, Fatima combines research-based insights with practical expertise. She is pursuing an EdD and holds a Harvard Business School Online Certificate in School Management and Leadership.",
        workshop: "From Transdisciplinary to Interdisciplinary Learning in the IB Continuum: Understanding and Implementing Interdisciplinary Teaching in the MYP",
        image: "/speakers/fatima_ali_new.png"
    },
    {
        name: "Mr. Jazib Zahir",
        role: "Educationist and Entrepreneur",
        bio: "Mr. Jazib is the Director of the LUMS Center for Entrepreneurship and LUMSx the online learning platform. His work experience spans managing software teams for organizations like Sesame Workshop and BBC, bringing solar energy to Pakistan and working with think tanks and investors in education. His AI experience includes conducting trainings for schools across Pakistan and training global organizations like Coca Cola and Hewlett Packard. He has a BS Electrical Engineering from Stanford and an Ed.M. Technology, Innovation and Education from Harvard.",
        image: "/speakers/jazib_zahir_new.png"
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
                                <img src={process.env.PUBLIC_URL + trainer.image} alt={trainer.name} className={`trainer-image ${trainer.customClass || ''}`} />
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
