import React from 'react';
import './Trainers.css';

const trainers = [
    {
        name: "Dr. Syeda Manal Akbar",
        role: "Vice Principal - IB Girls Campus",
        bio: "Dr. Syeda Manal Akbar is an experienced education leader and Vice Principal of the IB Girls Campus at Crescent Model Higher Secondary School, Lahore. With international experience in the Middle East and the UK, she brings a strong global perspective to IB curriculum leadership. An advocate for inquiry-based learning, inclusive education, and teacher development, she promotes healthy mindsets, psychologically safe learning environments, and student agency, core to the IB philosophy.",
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
        bio: "Amina holds a PGCEi from Canterbury Christchurch University, UK, and a certificate in SUSI from California State University, USA. She is an accredited Cambridge International Trainer for Enrichment Programmes and a Cambridge PDQ programme leader. With over 23 years of experience in teaching and training both nationally and internationally, Amina has also worked with NCC-SNC Pakistan for the English curriculum and taught at various institutions, and levels from Primary till PHD, including Civil Services Academy Pakistan. She holds degrees in English Literature, Applied Linguistics, and Educational Planning and Management. She is a US Alumni Pakistan member and an alumnus of Rotary International Group Study Exchange scholarship.",
        image: "/speakers/amina_new.png"
    },
    {
        name: "Ms. Asma Amanat",
        role: "Trainer & Panelist",
        bio: "Ms. Asma Amanat has joined Crescent as General Manager of MYP and DP, bringing 16 years of experience in IB education. A seasoned IB practitioner, examiner, and workshop leader, she has played a key role in advancing IB programmes in Punjab. An international academic author, she co-authored Making Sense of Learning (Springer UK), and her research has been featured in the European Journal of Education.",
        image: "/speakers/asma_new.png",
        customClass: "asma-card"
    },
    {
        name: "Ms. Tina Hameed",
        role: "Trainer & Panelist",
        bio: "Tina Hameed is the founding Director of the Teaching and Learning Centre (TLC) at Aitchison College and has been teaching and training for 37 years. She has an M.Ed. from the University of Exeter, UK, and is an accredited tutor from the University of Bradford and University College Plymouth St Mark and St John, UK.",
        workshop: "Learning that Lasts",
        image: "/speakers/tina.png"
    },
    {
        name: "Dr. Iain Riley",
        role: "Trainer & Panelist",
        bio: "Dr. Iain Riley is the Head of School at TNS Beaconhouse, DHA Lahore. He holds a PhD in Education from University of Glasgow, Master’s in Educational Leadership, a PGCE, and a BA in History, and has over ten years of leadership experience, including Head of School roles in Shanghai. Having taught across Turkey, Japan, Egypt, and Scotland, Iain is also an IB workshop leader and a strong advocate for learner agency, which he has successfully embedded in his current school.",
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
    },
    {
        name: "Ms. Naveen Balkhi",
        role: "Trainer & Panelist | Board Director",
        bio: "Naveen Balkhi, SSGB, ProSci; is a United Nations CSW Speaker, JPMorganChase Wall Street Investment Banker, and Board Director. With 27+ years of impact with Boards, educators, CxOs, youth, and young professionals across 40+ industries and 17 countries, she specializes in Executive Coaching, Leadership Development, ESG-Sustainability, and Women’s Leadership—all deeply rooted in values. She also leads the global initiative Taqwa.Trekkers.",
        image: "/speakers/naveen.png"
    },
    {
        name: "Ms. Tayyabah Amer Malik",
        role: "Trainer | Executive Manager K–8 Education",
        bio: "With over two decades of international experience across Pakistan, Malaysia, the UAE, and the USA, Tayyabah Amer Malik is a seasoned educational leader currently serving as Executive Manager K–8 Education at Pak-Turk Maarif International Schools & Colleges. A certified IB Head of School for PYP and MYP, she specializes in curriculum leadership, school improvement, and large-scale professional development, leading evidence-based initiatives and international teacher training programmes in collaboration with global institutions.",
        workshop: "From Learning Theories to IB Practice: Why We Teach the Way We Teach",
        image: "/speakers/tayyabah.png"
    },
    {
        name: "Dr. Shireen Naqvi",
        role: "Trainer | Workshop Facilitator & Coach",
        bio: "Dr. Shireen Naqvi is a highly respected figure in diversity and inclusion. Founder of the School of Leadership, she has worked with over 300 organizations and has received multiple awards for her impact on professional development.",
        workshop: "Empowering Explorers: Nurturing Student Autonomy",
        image: "/speakers/shireen.png"
    },
    {
        name: "Mr. Abbas Husain",
        role: "Trainer | Managing Director Teachers’ Development Centre",
        bio: "With over 30 years of experience, Abbas Husain is a seasoned corporate and educational policy trainer. Abbas is renowned internationally for his teacher training workshops across multiple countries. In 2020, he was honored with a Lifetime Achievement Award by the Millennium Institute for Professional Development, Islamabad, presented by Dr. A. Q Khan.",
        image: "/speakers/abbas.png"
    },

    {
        name: "Dr. Naumana Amjad",
        role: "Trainer | Psychologist | Academic Leader & Mental Health Advocate",
        bio: "Dr. Naumana Amjad is an accomplished psychologist with 35+ years in academia and clinical practice. She served as Professor at Punjab University for 27 years before becoming Dean at NUR International University, where she founded Wellbeing Centers and flagship psychology programs. An Annemarie Schimmel Scholar with a PhD in Psychology from the University of Warwick, her work has been published internationally and she has conducted professional trainings nationwide on extremism, gender equity, and workplace safety. Alongside academic work, she leads community mental health initiatives and anti-narcotics advocacy programs. She is fluent in English, Urdu, Punjabi and French.",
        image: "/speakers/naumana_amjad.jpeg"
    },
    {
        name: "Mr. Fazal Niazi",
        role: "Trainer | Practice Lead and Senior Facilitator, FranklinCovey Education",
        bio: "Fazal Niazi is a seasoned educator and facilitator with over 35 years of experience in educational leadership and professional development. A Practice Lead and Senior Facilitator at FranklinCovey Education (Pakistan, Türkiye, and Azerbaijan), he has trained 20,000+ educators and leaders nationally and internationally. Founder of The Learning Space, a Reggio Emilia–inspired micro-school in Karachi, he specializes in institutional leadership, faculty capacity building, soft skills, and social-emotional learning, empowering educators to lead with confidence, empathy, and impact.",
        image: "/speakers/fazal_niazi.jpeg"
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
                                <img src={process.env.PUBLIC_URL + trainer.image} alt={trainer.name} className={`trainer-image ${trainer.customClass || ''}`} loading="lazy" />
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
