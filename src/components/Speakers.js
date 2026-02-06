import React from 'react';
import './Speakers.css';

const speakers = [
    {
        name: "Dr. Ali Cheema",
        role: "Chief Guest",
        bio: "Dr. Ali Cheema, Vice Chancellor of LUMS, is a distinguished economist whose work focuses on economic development, human capital, inclusion, and political economy. He has served in several leadership roles, including Chair of the Economics Department and Director of the Mahbub Ul Haq Research Centre. He currently serves on the Board of Directors of the State Bank of Pakistan and holds a PhD from the University of Cambridge as a Rhodes Scholar.",
        image: "/speakers/ali_cheema.png",
        customClass: "chief-guest-card"
    },
    {
        name: "Ms. Uzma Shujat",
        role: "Chief Guest",
        bio: "Ms. Uzma Shujat, IB Regional Manager, has served as a Lifelong Learning Manager at Birmingham City Council, where she led strategic planning and policy implementation to promote inclusive, high-quality learning opportunities. Her role involved managing and monitoring diverse education projects, ensuring accountability, quality assurance, and impact, while building strong partnerships with voluntary organizations, private and public schools, and government authorities to support community-focused initiatives. Beyond this, she has contributed to large-scale education and development initiatives through projects with the World Bank and multinational companies, supporting programme design, implementation, evaluation, and capacity building. Her international experience reflects an ability to work across sectors, influence policy, and deliver sustainable, system-level improvement through collaborative leadership, evidence-informed decision making, and strong stakeholder engagement.",
        image: "/speakers/uzma_shujat_new.png",
        customClass: "chief-guest-card"
    },
    {
        name: "Dr. Attiya Inayatullah",
        role: "Keynote Speaker",
        bio: "Dr. Attiya Inayatullah is a prominent Pakistani figure with a distinguished career in population welfare, human rights, and women's issues. She holds a PhD in Demographics and led the Family Planning Association of Pakistan for many years. She gained international recognition through her work with UNESCO, advocating for gender equality, social development, and bioethics. She has been awarded the highest civilian award in Pakistan and the UN's Ceres Medal for women.",
        image: "/speakers/attiya.png",
        customClass: "keynote-card"
    },
    {
        name: "Ms. Naveen Balkhi",
        role: "CHRO & Director of Global Talent Management at BSG Advisory",
        bio: "Naveen Balkhi is recognized for her leadership in HR, strategy, and diversity, and she provides expertise through keynote speeches and leadership development.",
        image: "/speakers/naveen.png"
    },
    {
        name: "Ms. Tina Hameed",
        role: "Founding Director of the Teaching and Learning Centre (TLC) at Atchison College",
        bio: "Tina Hameed has been teaching and training for 37 years. She has an M.Ed. from the University of Exeter, UK, and is an accredited tutor from the University of Bradford and University College Plymouth St Mark and St John, UK.",
        image: "/speakers/tina.png"
    },
    {
        name: "Ms. Tayyabah Amer Malik",
        role: "Experienced Academic Leader",
        bio: "Tayyabah Amer Malik has a demonstrated history of working in the education management industry. Skilled in Coaching, curriculum development, education planning, and Conflict Resolution, she holds a Masters Degree in Advance Professional Studies from University of Strathclyde.",
        image: "/speakers/tayyabah.png",
        customClass: "tayyabah-card"
    },
    {
        name: "Ms. Shireen Naqvi",
        role: "Workshop Facilitator & Coach",
        bio: "Shireen Naqvi is a highly respected figure known for her personal and professional credibility. An expert in diversity and inclusion, she has worked with 300+ organizations, received awards, and founded the School of Leadership.",
        image: "/speakers/shireen.png",
        customClass: "shireen-card"
    },
    {
        name: "Dr. Shazia Iqbal Khan",
        role: "Moderator | Head of School IB TNS Beaconhouse Gulberg",
        bio: "Dr. Shazia Iqbal Khan is a seasoned educator and visionary leader with over two decades of experience. A medical graduate turned education innovator, she has led multiple schools to IB accreditation and is the Chairperson of the IB Pakistan Association (2018 & 2025).",
        image: "/speakers/shazia_new.png"
    },
    {
        name: "Mr. Abbas Husain",
        role: "Seasoned Corporate & Educational Policy Trainer",
        bio: "With over 30 years of experience, Abbas Husain is renowned internationally for his teacher training workshops across multiple countries.",
        image: "/speakers/abbas.png"
    },
    {
        name: "Mr. Hassaan Fareed",
        role: "Science Communicator",
        bio: "Science has the power to change lives, and Hassaan Fareed has made it his mission to bring that power to every corner of Pakistan. As a passionate science communicator, he creates interactive shows filled with exciting experiments and hands-on activities. From bustling cities to remote villages, Hassan Fareed travels widely to spark curiosity and wonder among children and communities. Along the way, he has partnered with Lincoln Corners, Tedx, Tareen Education Foundation and Lahore Astronomical Society, Khawarizmi Science Society and many more to expand the reach of STEM education. Hassaan Fareed believes that science belongs to everyone and makes sure that every session proves it.",
        image: "/speakers/hassaan_fareed_new.png"
    },
    {
        name: "Ms. Rabia Najam",
        role: "Principal, Crescent Model Higher Secondary School Boys Campus",
        bio: "Rabia Najam, an esteemed education leader, currently serves as the Principal of Crescent Model Higher Secondary School Boys Campus. Her career is marked by leadership and strategic acumen, focusing on effective team building and problem-solving. She has introduced internationally recognized professional development opportunities for teachers and heads, driving excellence in educational standards.",
        image: "/speakers/rabia_najam.jpeg"
    },
    {
        name: "Ms. Shehla Sajid",
        role: "Moderator | Headmistress - Middle Section Girls",
        bio: "With over two decades of experience, Ms. Shehla Sajid has successfully coached numerous educators, empowering them with skills to engage students effectively. She holds a Masters in English Language Teaching and certifications from UK universities, and is an active presenter at national and international conferences.",
        image: "/speakers/shehla_sajid.jpeg"
    },

    {
        name: "Dr. Muhammad Sabieh Anwar",
        role: "Professor of Physics, LUMS",
        bio: "Dr. Muhammad Sabieh Anwar is a Professor of Physics and former Dean at LUMS. A Rhodes Scholar with a PhD from Oxford, he has published nearly 100 research papers. He is a founder of PhysLab and Astrolab, and serves as General Secretary of the Khwarizmi Science Society.",
        image: "/speakers/sabieh_anwar.png"
    },
    {
        name: "Mr. Taimoor K. Mumtaz",
        role: "Senior Architect & Director, Hast-o-Neest",
        bio: "Taimoor K. Mumtaz is a senior architect and founding director of Hast-o-Neest – Institute of Traditional Studies & Arts. His work promotes the study of traditional art, culture, and architecture, with a specific focus on Mughal design methods.",
        image: "/speakers/taimoor_mumtaz.png",
        customClass: "taimoor-card"
    },
    {
        name: "Mr. Umar Saeed",
        role: "Architect & Chair, CAA Education",
        bio: "Umar Saeed is a prominent architect and educator, serving as Chair of Education and Validation at the Commonwealth Association of Architects. With over 25 years of experience, he leads Saeed Akhtar Studio and plays a key role in shaping architectural education policy in Pakistan.",
        image: "/speakers/umar_saeed.png",
        customClass: "umar-card"
    },
    {
        name: "Ms. Khadija Balkhi",
        role: "Director, Global Sustainability",
        bio: "An award-winning thought leader and trusted advisor to boards & C-Suite, Khadeeja is a partner to front-line teams, youth & leaders alike. Contributing across corporate, gov., education, and nonprofit sectors for 21+ years, her work has supported entities including The Lyceum School, GRI, Coca-Cola, OMV, National Foods, ICI, Puma, WWF & others. She has published 400+ articles, covers, and book chapters in international publications including Forbes, Newsweek, Arab News, The National, Herald, and Saudi Gazette.",
        image: "/speakers/khadija_balkhi.jpeg"
    },
    {
        name: "Ms. Farah Masood",
        role: "Head of School | IB Specialist",
        bio: "Farah Masood is a seasoned IB practitioner and school leader with over 30 years of experience. As Head of School at Learning Alliance International and former Chairperson of IBPAK, she has significantly influenced the growth of IB education in Pakistan.",
        image: "/speakers/farah_masood_new.png"
    },
    {
        name: "Mr. Taimur K Bandey",
        role: "Head of School | IB Consultant",
        bio: "Taimur K Bandey is the Head of School at Trinity (IB, Cambridge and American High School). A consultant with 25+ years of experience, he has established IB programmes across Pakistan and advised on national curriculum development.",
        image: "/speakers/taimur_new.png"
    },
    {
        name: "Dr. Iain Riley",
        role: "Head of School, TNS Beaconhouse",
        bio: "Dr. Iain Riley holds a PhD in Education and has over a decade of leadership experience across Turkey, Japan, Egypt, and Scotland. He is a strong advocate for learner agency and progressive school culture.",
        image: "/speakers/iain.png"
    },
    {
        name: "Ms. Asma Amanat",
        role: "GM MYP & DP | Academic Author",
        bio: "Ms. Asma Amanat is a seasoned IB practitioner and examiner with 16 years of experience. An international academic author, her research has been featured in the European Journal of Education.",
        image: "/speakers/asma_new.png",
        customClass: "asma-card"
    }
];

const Speakers = () => {
    return (
        <section id="speakers" className="speakers-section">
            <div className="speakers-container">
                <div className="speakers-header">
                    <h2>Accomplished Thought Leaders</h2>
                    <p>Opportunity to engage with some of the country's most accomplished educators and take back skills to your classrooms and institutions.</p>
                </div>
                <div className="speakers-grid">
                    {speakers.map((speaker, index) => (
                        <div className={`speaker-card ${speaker.customClass || ''}`} key={index}>
                            <div className="speaker-image-container">
                                {speaker.image ? (
                                    <img src={process.env.PUBLIC_URL + speaker.image} alt={speaker.name} className="speaker-image" loading="lazy" />
                                ) : (
                                    <div className="speaker-placeholder">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="speaker-info">
                                <span className="speaker-role">{speaker.role}</span>
                                <h3>{speaker.name}</h3>
                                <p className="speaker-bio">{speaker.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
