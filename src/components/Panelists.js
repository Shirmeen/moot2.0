import React from 'react';
import './Panelists.css';

const panelists = [
    {
        name: "Ms. Sabahat Tatari",
        role: "Regional Director, Northern Region, The City School, Islamabad",
        bio: "Ms Tatari is an alumnus of Warwick University and certified member of IB Education Network has been an academician for past three decades. She has served institutions including Aga Khan University, Beaconhouse National University, Angels International College IB Continuum School and The City School Network. Her areas of interest include AI in education, innovation , testing, and test development. Currently Regional Director of the City School network managing 42 schools across three provinces, Punjab, KPK, AJK and Islamabad Capital Territory",
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
                                <img src={process.env.PUBLIC_URL + panelist.image} alt={panelist.name} className="panelist-image" />
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
