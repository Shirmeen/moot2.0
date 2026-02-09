import React from 'react';
import './Panelists.css';

const panelists = [
    {
        name: "Ms. Sabahat Tatari",
        role: "Regional Director, Northern Region, The City School, Islamabad",
        bio: "Ms Tatari is an alumnus of Warwick University and certified member of IB Education Network has been an academician for past three decades. She has served institutions including Aga Khan University, Beaconhouse National University, Angels International College IB Continuum School and The City School Network. Her areas of interest include AI in education, innovation, testing, and test development. Currently Regional Director of the City School network managing 42 schools across three provinces, Punjab, KPK, AJK and Islamabad Capital Territory",
        image: "/speakers/sabahat_tatari_new.png"
    },
    {
        name: "Mr. SM Omair Saeed",
        role: "Managing Director Kifayat Publishers",
        bio: "SM Omair Saeed, Managing Director of Kifayat Publishers, is a graduate in Industrial Economics Research from the University of Nottingham. He has worked on education research and curriculum development for the unlettered with the World Bank and the Asian Development Bank. For the last decade, he has been looking after the overall operations at Kifayat Publishers; he has a keen interest in Education Pedagogy research, and in recent years, through international partnerships, has tried to bring the best of the latest international educational resources to Pakistan at an affordable price.",
        image: "/speakers/omair_saeed_new.png"
    },
    {
        name: "Dr. Tayyaba Tamim",
        role: "Dean, Syed Ahsan Ali and Syed Maratib Ali School of Education",
        bio: "Professor Dr. Tayyaba Tamim is currently Dean and Chair Syeda Perwin Babar Ali at Syed Ahsan Ali and Syed Babar Ali School of Education, Lahore University of Management Sciences (LUMS). Her work, published and presented at national and international forums, covers issues of social justice, equity and inclusivity in education with specific reference to languages in education, language policy, gender and caste. Her ongoing research also explores how education are filtered through class, gender, caste and disability. She also has a strong interest in education for sustainable development and higher education. Dr Tamim has led several funded research projects and publications with national and international partners and forums, including those with USAID, British council, the World Bank, Gates Foundation and IDEAS.",
        image: "/speakers/tayyaba_tamim_new.png"
    },
    {
        name: "Ms. Farah Masood",
        role: "PANELIST | Head of School, Learning Alliance International",
        bio: "Farah Masood is a seasoned IB practitioner and accomplished school leader with over three decades of experience in education. As Head of School at Learning Alliance International, an IB Continuum School, she has led diverse academic teams, developed teacher leadership, and contributed significantly to the growth of IB education. Her leadership impact extended nationally through her role on the Executive Committee of IBPAK, where she served as Chairperson from 2023 to 2025.",
        image: "/speakers/farah_masood_new.png"
    },
    {
        name: "Mr. Taimur K Bandey",
        role: "TRAINER & PANELIST | Head of School, Trinity School",
        bio: "Taimur K Bandey is Head of School at Trinity (IB, Cambridge and American High School), Lahore. He is an IB consultant with extensive experience in establishing IB programmes across schools in Pakistan and has contributed to the education sector for over 25 years. He is Former president of the debating society of Pakistan and is also an advisor to a leading Ed tech company. He is a former member of the national commission for curriculum development for the Government of Pakistan.",
        image: "/speakers/taimur_new.png"
    },
    {
        name: "Dr. Iain Riley",
        role: "TRAINER & PANELIST | Head of School, TNS Beaconhouse, DHA",
        bio: "Dr. Iain Riley is the Head of School at TNS Beaconhouse, DHA Lahore. He holds a PhD in Education from University of Glasgow, Master’s in Educational Leadership, a PGCE, and a BA in History, and has over ten years of leadership experience, including Head of School roles in Shanghai. Having taught across Turkey, Japan, Egypt, and Scotland, Iain is also an IB workshop leader and a strong advocate for learner agency, which he has successfully embedded in his current school.",
        image: "/speakers/iain.png"
    },
    {
        name: "Ms. Tina Hameed",
        role: "TRAINER & PANELIST | Director, Teaching and Learning Centre, Aitchison College",
        bio: "Tina Hameed is the founding Director of the Teaching and Learning Centre (TLC) at Aitchison College and has been teaching and training for 37 years. She has an M.Ed. from the University of Exeter, UK, and is an accredited tutor from the University of Bradford and University College Plymouth St Mark and St John, UK.",
        image: "/speakers/tina.png"
    },
    {
        name: "Ms. Asma Amanat",
        role: "TRAINER & PANELIST | General Manager MYP & DP, Crescent Model",
        bio: "Ms. Asma Amanat has joined Crescent as General Manager of MYP and DP, bringing 16 years of experience in IB education. A seasoned IB practitioner, examiner, and workshop leader, she has played a key role in advancing IB programmes in Punjab. An international academic author, she co-authored Making Sense of Learning (Springer UK), and her research has been featured in the European Journal of Education.",
        image: "/speakers/asma_new.png",
        customClass: "asma-card"
    },
    {
        name: "Ms. Naveen Balkhi",
        role: "TRAINER & PANELIST | Board Director & Executive Coach",
        bio: "Naveen Balkhi, SSGB, ProSci; is a United Nations CSW Speaker, JPMorganChase Wall Street Investment Banker, and Board Director. With 27+ years of impact with Boards, educators, CxOs, youth, and young professionals across 40+ industries and 17 countries, she specializes in Executive Coaching, Leadership Development, ESG-Sustainability, and Women’s Leadership—all deeply rooted in values. She also leads the global initiative Taqwa.Trekkers.",
        image: "/speakers/naveen.png"
    },
    {
        name: "Qurat-ul-Ain Idrees",
        role: "PANELIST | Area Education Manager, TCF | LUMS Alumna",
        bio: "Qurat-ul-Ain Idrees is an experienced education professional currently serving as an Area Education Manager at The Citizens Foundation (TCF). She provides academic leadership and manages a cohort of school principals to ensure educational standards are met. She is an alumna of the Lahore University of Management Sciences (LUMS) and has significant experience in corporate communications, project management, and fundraising.",
        image: "/speakers/qurat_ul_ain.png"
    }
];

const Panelists = () => {
    return (
        <section id="panelists" className="panelist-section">
            <div className="panelist-container">
                <div className="panelist-header">
                    <h2>Our Panelists</h2>
                    <p>Engage with our esteemed panelists sharing their insights and experiences.</p>
                </div>
                <div className="panelist-grid">
                    {panelists.map((panelist, index) => (
                        <div className="panelist-card" key={index}>
                            <div className="panelist-image-container">
                                <img src={process.env.PUBLIC_URL + panelist.image} alt={panelist.name} className={`panelist-image ${panelist.customClass || ''}`} loading="lazy" />
                            </div>
                            <div className="panelist-info">
                                <span className="panelist-role">{panelist.role}</span>
                                <h3>{panelist.name}</h3>
                                <p className="panelist-bio">{panelist.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Panelists;
