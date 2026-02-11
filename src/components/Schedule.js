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

    const day1Events = [];

    const day2Events = [];

    const day3Events = [];

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
                            <div className="schedule-card">
                                <div className="card-header">
                                    <span className="time-tag">08:00 AM - 04:30 PM</span>
                                    <div className="session-type-label">FACILITATION & KEYNOTE</div>

                                </div>
                                <div className="card-body">
                                    <h3>Friday, February 13, 2026</h3>
                                    <p className="schedule-highlight">Leading Learning the IB way</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Day 2 */}
                    <div className={`day-block day-2 animate-up delay-2 ${expandedDay === 2 ? 'is-expanded' : ''}`}>
                        <div className="day-label animate-pulse-soft">Day 02</div>
                        <div className="day-content-grid single-col">
                            <div className="schedule-card">
                                <div className="card-header">
                                    <span className="time-tag">08:00 AM - 04:30 PM</span>
                                    <div className="session-type-label">INNOVATION & RESEARCH</div>

                                </div>
                                <div className="card-body">
                                    <h3>Saturday, February 14, 2026</h3>
                                    <p className="schedule-highlight">ED Research: Innovation, Insights, Impact</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Day 3 */}
                    <div className={`day-block day-3 animate-up delay-3 ${expandedDay === 3 ? 'is-expanded' : ''}`}>
                        <div className="day-label animate-pulse-soft">Day 03</div>
                        <div className="day-content-grid single-col">
                            <div className="schedule-card">
                                <div className="card-header">
                                    <span className="time-tag">08:00 AM - 02:15 PM</span>
                                    <div className="session-type-label">EDUCATION FOR ALL</div>

                                </div>
                                <div className="card-body">
                                    <h3>Sunday, February 15, 2026</h3>
                                    <p className="schedule-highlight">Education for All</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
