import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
    const [expandedDay, setExpandedDay] = useState(null);

    const toggleDay = (day) => {
        if (expandedDay === day) {
            setExpandedDay(null);
        } else {
            setExpandedDay(day);
        }
    };

    const day1Events = [
        { time: "8:00 am – 9:00 am", segment: "Registration & guests to be seated" },
        { time: "9:00 am – 9:10 am", segment: "Inauguration (Recitation, Anthem)" },
        { time: "9:10 am – 9:20 am", segment: "Welcome Note" },
        { time: "9:20 am – 9:45 am", segment: "Keynote Speech" },
        { time: "9:45 am – 9:50 am", segment: "Video Message" },
        { time: "9:50 am – 10:35 am", segment: "Panel Discussion: How to build School wide ATL culture" },
        { time: "10:35 am – 10:50 am", segment: "Presentation: Empowering Students as Change makers (Agency in action)" },
        { time: "10:50 am – 11:00 am", segment: "IB Success Story of Crescent" },
        { time: "11:00 am – 11:30 am", segment: "TEA BREAK" },
        { time: "11:30 am – 1:15 pm", segment: "IB Training Sessions" },
        { time: "1:15 pm – 2:15 pm", segment: "LUNCH" },
        { time: "2:15 pm – 2:30 pm", segment: "IB Pak" },
        { time: "2:30 pm – 2:40 pm", segment: "Video Message" },
        { time: "2:40 pm – 2:55 pm", segment: "Empowering Students as Change makers (Agency in Action)" },
        { time: "2:55 pm – 4:00 pm", segment: "Speaker Session" },
        { time: "4:00 pm – 4:15 pm", segment: "Plenary" },
        { time: "4:15 pm – 4:30 pm", segment: "Souvenirs / Group Photo" }
    ];

    const day2Events = [
        { time: "8:00 am – 9:00 am", segment: "Registration & guests to be seated" },
        { time: "9:00 am – 9:10 am", segment: "Inauguration (Recitation, Anthem)" },
        { time: "9:10 am – 9:20 am", segment: "Welcome Note" },
        { time: "9:20 am – 9:50 am", segment: "Keynote Speech" },
        { time: "9:50 am – 10:30 am", segment: "Panel Discussion: Leading Academic Change for Gen Z and Gen Alpha" },
        { time: "10:30 am – 10:40 am", segment: "Video message" },
        { time: "10:40 am – 11:00 am", segment: "Speech" },
        { time: "11:00 am – 11:20 am", segment: "TEA" },
        { time: "11:20 am – 12:10 pm", segment: "Training Session 1" },
        { time: "12:10 pm – 12:45 pm", segment: "Interactive Session (Science)" },
        { time: "12:45 pm – 1:00 pm", segment: "Paper presentation & Souvenirs" },
        { time: "1:00 pm – 1:45 pm", segment: "LUNCH" },
        { time: "1:45 pm – 2:35 pm", segment: "Training Session 2" },
        { time: "2:35 pm – 4:15 pm", segment: "Workshop" },
        { time: "4:15 pm – 4:30 pm", segment: "Plenary / Souvenir" }
    ];

    const day3Events = [
        { time: "8:00 am – 9:00 am", segment: "Registration & guests to be seated" },
        { time: "9:00 am – 9:15 am", segment: "Inauguration (Recitation, Anthem / Welcome Note)" },
        { time: "9:15 am – 9:35 am", segment: "Keynote Speech" },
        { time: "9:35 am – 10:20 am", segment: "Panel: Changing the landscape of Education (challenges & solutions)" },
        { time: "10:20 am – 11:00 am", segment: "Speech" },
        { time: "11:00 am – 11:20 am", segment: "TEA" },
        { time: "11:20 am – 12:00 pm", segment: "Alumni Spotlight: Journeys of Success" },
        { time: "12:00 pm – 12:15 pm", segment: "Compassion" },
        { time: "12:15 pm – 12:45 pm", segment: "Sustainability" },
        { time: "12:45 pm – 1:15 pm", segment: "Sum up of Conference (Thank you note & Conclusion)" },
        { time: "1:15 pm – 2:15 pm", segment: "LUNCH" }
    ];

    return (
        <section id="schedule" className="schedule-section">
            <div className="schedule-bg-elements">
                <div className="sched-shape shap-1"></div>
                <div className="sched-shape shap-2"></div>
                <div className="sched-shape shap-3"></div>
                <div className="abstract-shapes">
                    <div className="a-shape shape-square"></div>
                    <div className="a-shape shape-circle"></div>
                    <div className="a-shape shape-triangle"></div>
                    <div className="a-shape shape-pill"></div>
                    <div className="a-shape shape-square delay-mid"></div>
                    <div className="a-shape shape-circle delay-slow"></div>
                </div>
            </div>
            <div className="schedule-container">
                <div className="schedule-header">
                    <h2 className="animate-down">Event Schedule</h2>
                    <p className="animate-up delay-1">Explore our detailed roadmap for the MOOT 2.0 experience.</p>
                </div>

                <div className="schedule-days-wrapper">
                    {/* Day 1 */}
                    <div className={`day-block day-1 animate-up delay-1 ${expandedDay === 1 ? 'is-expanded' : ''}`}>
                        <div className="day-label animate-pulse-soft">Day 01</div>
                        <div className="day-content-grid single-col">
                            <div className="schedule-card clickable" onClick={() => toggleDay(1)}>
                                <div className="card-header">
                                    <span className="time-tag">08:00 AM - 04:30 PM</span>
                                    <div className="session-type-label">FACILITATION & KEYNOTE</div>
                                    <div className="expand-hint">{expandedDay === 1 ? 'Click to Close −' : 'View Full Schedule +'}</div>
                                </div>
                                <div className="card-body">
                                    <h3>Friday, February 13, 2026</h3>
                                    <p className="schedule-highlight">Leading Learning the IB way</p>
                                </div>

                                {expandedDay === 1 && (
                                    <div className="day-details-slider animate-down">
                                        <div className="table-responsive">
                                            <table className="schedule-table">
                                                <thead>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Segment</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {day1Events.map((event, index) => (
                                                        <tr key={index}>
                                                            <td className="time-cell">{event.time}</td>
                                                            <td className="segment-cell">{event.segment}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Day 2 */}
                    <div className={`day-block day-2 animate-up delay-2 ${expandedDay === 2 ? 'is-expanded' : ''}`}>
                        <div className="day-label animate-pulse-soft">Day 02</div>
                        <div className="day-content-grid single-col">
                            <div className="schedule-card clickable" onClick={() => toggleDay(2)}>
                                <div className="card-header">
                                    <span className="time-tag">08:00 AM - 04:30 PM</span>
                                    <div className="session-type-label">INNOVATION & RESEARCH</div>
                                    <div className="expand-hint">{expandedDay === 2 ? 'Click to Close −' : 'View Full Schedule +'}</div>
                                </div>
                                <div className="card-body">
                                    <h3>Saturday, February 14, 2026</h3>
                                    <p className="schedule-highlight">ED Research: Innovation, Insights, Impact</p>
                                </div>

                                {expandedDay === 2 && (
                                    <div className="day-details-slider animate-down">
                                        <div className="table-responsive">
                                            <table className="schedule-table">
                                                <thead>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Segment</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {day2Events.map((event, index) => (
                                                        <tr key={index}>
                                                            <td className="time-cell">{event.time}</td>
                                                            <td className="segment-cell">{event.segment}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Day 3 */}
                    <div className={`day-block day-3 animate-up delay-3 ${expandedDay === 3 ? 'is-expanded' : ''}`}>
                        <div className="day-label animate-pulse-soft">Day 03</div>
                        <div className="day-content-grid single-col">
                            <div className="schedule-card clickable" onClick={() => toggleDay(3)}>
                                <div className="card-header">
                                    <span className="time-tag">08:00 AM - 02:15 PM</span>
                                    <div className="session-type-label">EDUCATION FOR ALL</div>
                                    <div className="expand-hint">{expandedDay === 3 ? 'Click to Close −' : 'View Full Schedule +'}</div>
                                </div>
                                <div className="card-body">
                                    <h3>Sunday, February 15, 2026</h3>
                                    <p className="schedule-highlight">Education for All</p>
                                </div>

                                {expandedDay === 3 && (
                                    <div className="day-details-slider animate-down">
                                        <div className="table-responsive">
                                            <table className="schedule-table">
                                                <thead>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Segment</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {day3Events.map((event, index) => (
                                                        <tr key={index}>
                                                            <td className="time-cell">{event.time}</td>
                                                            <td className="segment-cell">{event.segment}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
