// src/components/JobCard.js
import React from 'react';
import './JobCard.css';

const JobCard = ({ title, experience, location, type, datePosted }) => {
    return (
        <div className="job-card">
            <h3 className="job-title">{title}</h3>
            <div className="job-details">
                <span className="experience">{experience}</span>
                <span className="dot">•</span>
                <span className="type">{type}</span>
                <span className="dot">•</span>
                <span className="location">{location}</span>
                <span className="dot">•</span>
                
                
                <span className="time-posted">Posted {datePosted} ago</span>
            </div>
        </div>
    );
};

export default JobCard;
