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
        role: "TRAINER & PANELIST | Board Director",
        bio: "Naveen Balkhi, SSGB, ProSci; is a United Nations CSW Speaker, JPMorganChase Wall Street Investment Banker, and Board Director. With 27+ years of impact with Boards, educators, CxOs, youth, and young professionals across 40+ industries and 17 countries, she specializes in Executive Coaching, Leadership Development, ESG-Sustainability, and Women’s Leadership—all deeply rooted in values. She also leads the global initiative Taqwa.Trekkers.",
        image: "/speakers/naveen.png"
    },
    {
        name: "Ms. Tina Hameed",
        role: "TRAINER & PANELIST | Founding Director of the Teaching and Learning Centre (TLC) at Atchison College",
        bio: "Tina Hameed is the founding Director of the Teaching and Learning Centre (TLC) at Aitchison College and has been teaching and training for 37 years. She has an M.Ed. from the University of Exeter, UK, and is an accredited tutor from the University of Bradford and University College Plymouth St Mark and St John, UK.",
        image: "/speakers/tina.png"
    },
    {
        name: "Ms. Tayyabah Amer Malik",
        role: "TRAINER | Experienced Academic Leader",
        bio: "With over two decades of international experience across Pakistan, Malaysia, the UAE, and the USA, Tayyabah Amer Malik is a seasoned educational leader currently serving as Executive Manager K–8 Education at Pak-Turk Maarif International Schools & Colleges. A certified IB Head of School for PYP and MYP, she specializes in curriculum leadership, school improvement, and large-scale professional development, leading evidence-based initiatives and international teacher training programmes in collaboration with global institutions.",
        image: "/speakers/tayyabah.png",
        customClass: "tayyabah-card"
    },
    {
        name: "Ms. Shireen Naqvi",
        role: "TRAINER | Workshop Facilitator & Coach",
        bio: "Shireen Naqvi is a highly respected figure known for her personal and professional credibility. An expert in diversity and inclusion, she has worked with 300+ organizations, received awards, and founded the School of Leadership.",
        image: "/speakers/shireen.png",
        customClass: "shireen-card"
    },

    {
        name: "Mr. Abbas Husain",
        role: "TRAINER | Seasoned Corporate & Educational Policy Trainer",
        bio: "With over 30 years of experience, Abbas Husain is a seasoned corporate and educational policy trainer. Abbas is renowned internationally for his teacher training workshops across multiple countries. In 2020, he was honored with a Lifetime Achievement Award by the Millennium Institute for Professional Development, Islamabad, presented by Dr. A. Q Khan.",
        image: "/speakers/abbas.png"
    },
    {
        name: "Mr. Hassaan Fareed",
        role: "SPEAKER | Science Communicator",
        bio: "Science has the power to change lives, and Hassaan Fareed has made it his mission to bring that power to every corner of Pakistan. As a passionate science communicator, he creates interactive shows filled with exciting experiments and hands-on activities. From bustling cities to remote villages, Hassan Fareed travels widely to spark curiosity and wonder among children and communities. Along the way, he has partnered with Lincoln Corners, Tedx, Tareen Education Foundation and Lahore Astronomical Society, Khawarizmi Science Society and many more to expand the reach of STEM education. Hassaan Fareed believes that science belongs to everyone and makes sure that every session proves it.",
        image: "/speakers/hassaan_fareed_new.png"
    },
    {
        name: "Ms. Rabia Najam",
        role: "SPEAKER | Principal, Crescent Model Higher Secondary School Boys Campus",
        bio: "Rabia Najam, an esteemed education leader, currently serves as the Principal of Crescent Model Higher Secondary School Boys Campus. Her career is marked by leadership and strategic acumen, focusing on effective team building and problem-solving. She has introduced internationally recognized professional development opportunities for teachers and heads, driving excellence in educational standards.",
        image: "/speakers/rabia_najam.jpeg"
    },


    {
        name: "Dr. Muhammad Sabieh Anwar",
        role: "Professor of Physics, LUMS",
        bio: "Muhammad Sabieh Anwar is Professor of Physics and former Dean at the Syed Babar Ali School of Science and Engineering, LUMS. He helped establish the School and founded PhysLab, whose innovations are used in ten Pakistani universities. A Rhodes Scholar, he earned his PhD from the University of Oxford and completed postdoctoral research at UC Berkeley. His research spans spintronics, magnetism, and optics, with nearly 100 publications including Science and PNAS. He is General Secretary of the Khwarizmi Science Society, curator of the Lahore Science Mela, and recipient of the TWAS Medal and National Innovation Prize.",
        image: "/speakers/sabieh_anwar.png"
    },
    {
        name: "Mr. Taimoor K. Mumtaz",
        role: "Senior Architect & Director, Hast-o-Neest",
        bio: "Taimoor K. Mumtaz is a senior architect at Kamil Khan Mumtaz Architects. He holds an MA in South Asian Design & Architecture from De Montfort University, Leicester, UK (1999), and a Bachelor of Architecture from the National College of Arts, Lahore (1994). He is the founding director of Hast-o-Neest – Institute of Traditional Studies & Arts in Lahore, which promotes research and study of traditional art and culture, including Sufi doctrine and method, traditional philosophy, metaphysics, cosmology, and the arts such as calligraphy, miniature painting, classical music, and Islamic architecture. His research focuses on architectural design methods used in Mughal architecture.",
        image: "/speakers/taimoor_mumtaz.png",
        customClass: "taimoor-card"
    },
    {
        name: "Mr. Umar Saeed",
        role: "Architect & Chair, CAA Education",
        bio: "Umar Saeed (Pakistan) is an architect and educator, serving as Chair of Education and Validation at the Commonwealth Association of Architects (CAA) and Chair of the ARCASIA Committee on Architectural Education (ACAE). With over 25 years of professional experience, he leads Saeed Akhtar Studio in Lahore and has completed over 200 projects across Pakistan and the UAE. Umar plays an active role in shaping architectural education and policy through leadership positions with the Institute of Architects Pakistan (IAP) and academic institutions.",
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
        name: "Mr. Taimur K Bandey",
        role: "TRAINER & PANELIST | Head of School | IB Consultant",
        bio: "Taimur K Bandey is Head of School at Trinity (IB, Cambridge and American High School), Lahore. He is an IB consultant with extensive experience in establishing IB programmes across schools in Pakistan and has contributed to the education sector for over 25 years. He is Former president of the debating society of Pakistan and is also an advisor to a leading Ed tech company. He is a former member of the national commission for curriculum development for the Government of Pakistan.",
        image: "/speakers/taimur_new.png"
    },
    {
        name: "Dr. Iain Riley",
        role: "TRAINER & PANELIST | Head of School TNS Beaconhouse",
        bio: "Dr. Iain Riley is the Head of School at TNS Beaconhouse, DHA Lahore. He holds a PhD in Education from University of Glasgow, Master’s in Educational Leadership, a PGCE, and a BA in History, and has over ten years of leadership experience, including Head of School roles in Shanghai. Having taught across Turkey, Japan, Egypt, and Scotland, Iain is also an IB workshop leader and a strong advocate for learner agency, which he has successfully embedded in his current school.",
        workshop: "PROMOTING SCHOOL CULTURE THROUGH AGENCY",
        image: "/speakers/iain.png"
    },
    {
        name: "Ms. Asma Amanat",
        role: "TRAINER & PANELIST | GM MYP & DP | Academic Author",
        bio: "Ms. Asma Amanat has joined Crescent as General Manager of MYP and DP, bringing 16 years of experience in IB education. A seasoned IB practitioner, examiner, and workshop leader, she has played a key role in advancing IB programmes in Punjab. An international academic author, she co-authored Making Sense of Learning (Springer UK), and her research has been featured in the European Journal of Education.",
        image: "/speakers/asma_new.png",
        customClass: "asma-card"
    },
    {
        name: "Mr. Todd Shea",
        role: "Founder, CDRS | Global Humanitarian Leader",
        bio: "Todd Shea is a musician turned humanitarian whose life changed after 9/11. Inspired by personal loss and global tragedy, he founded CDRS, leading disaster relief and medical missions worldwide. Todd and his team have responded to earthquakes, floods, tsunamis, hurricanes, and conflict across Pakistan, Haiti, Japan, Sri Lanka, Syria, the Philippines, the US, and beyond; providing healthcare, clean water, shelter, and long term community support.",
        image: "/speakers/todd_shea.jpg"
    },
    {
        name: "Mr. Badar Khushnood",
        role: "Tech Entrepreneur | Co-Founder, Bramerz | LUMS Program Curator",
        bio: "Badar Khushnood is a technology leader with 25+ years of experience. As the first representative of Google, Facebook, and Twitter in Pakistan, he played a key role in their market entry. He is the co-founder of Bramerz.com and Fishry.com, and curates the Masters in Technology Management at LUMS. He has served as Chairman of P@SHA and is a catalyst for digital transformation.",
        image: "/speakers/badar_khushnood.jpeg"
    },

    {
        name: "Professor Maulana Yousaf Khan",
        role: "Islamic scholar, educator & international speaker | Jamia Ashrafia",
        bio: "Professor Maulana Yousaf Khan is a respected Pakistani academic and religious scholar, widely known for bridging traditional Islamic scholarship with modern university education. A prominent Khateeb at Jamia Ashrafia, he is recognized for his clarity of thought, depth of knowledge, and impactful oratory. His influence extends internationally, with lectures delivered in Hong Kong and other global forums, offering Islamic guidance to diverse communities and the diaspora. He also serves as a Board Member of Baitul Noor, contributing to initiatives in social welfare and religious education.",
        image: "/speakers/yousaf_khan.png"
    },
    {
        name: "Dr. Usman Rasheed Chaudhry",
        role: "Clinical Psychologist & Wellbeing Consultant | Chairman, PRISM-Pakistan",
        bio: "Dr. Usman Rasheed Chaudhry is a Clinical Psychologist and Wellbeing Consultant with 30+ years of experience in psychosocial rehabilitation, mental health education, and stress management. He holds a PhD in Clinical Psychology with advanced training in psychology, criminology, and forensic studies, including international certifications from the UK, Germany, and the University of Geneva. He is the Chairman of PRISM-Pakistan, a 31-year Honorary Consultant at Fountain House, Lahore, and a retired Associate Professor of Psychology at M.A.O. College Lahore with 25+ years of teaching experience. He also serves as a Board Member of the World Association for Psychosocial Rehabilitation, is a Richmond Fellow (UK), and Editor of Zehni Sehat, a quarterly mental health magazine, with research focused on schizophrenia and psychosocial rehabilitation.",
        image: "/speakers/usman_rasheed.png"
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
