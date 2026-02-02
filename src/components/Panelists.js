import React from 'react';
import './Panelists.css';

const panelists = [
    {
        name: "Mr. Sabahat Tatari",
        role: "Regional Director, Northern Region, The City School, Islamabad",
        bio: "Ms Tatari is an alumnus of Warwick University and certified member of IB Education Network has been an academician for past three decades. She has served institutions including Aga Khan University, Beaconhouse National University, Angels International College IB Continuum School and The City School Network. Her areas of interest include AI in education, innovation , testing, and test development. Currently Regional Director of the City School network managing 42 schools across three provinces, Punjab, KPK, AJK and Islamabad Capital Territory",
        image: "/speakers/sabahat_tatari_new.png"
    },
    {
        name: "SM Omair Saeed",
        role: "Managing Director Kifayat Publishers",
        bio: "SM Omair Saeed, Managing Director of Kifayat Publishers, is a graduate in Industrial Economics Research from the University of Nottingham. He has worked on education research and curriculum development for the unlettered with the World Bank and the Asian Development Bank. For the last decade, he has been looking after the overall operations at Kifayat Publishers; he has a keen interest in Education Pedagogy research, and in recent years, through international partnerships, has tried to bring the best of the latest international educational resources to Pakistan at an affordable price.",
        image: "/speakers/omair_saeed_new.png"
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
