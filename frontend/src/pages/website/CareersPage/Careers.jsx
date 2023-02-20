import React, { useState } from "react";

import CareerData from "./careersData.json";
import "./careers.scss";

import careersBanner from "../../../assets/careersBanner.png";

export default function Careers() {
  const [query, setQuery] = useState("");
  return (
    <div className="careers-wrapper">
      <div className="careers-hero-container">
        <div className="careers-color-block" />
        <h3 className="careers-subtitle">COME JOIN US</h3>
        <h1 className="careers-title">
          We're on a mission to change the world and deliver results
        </h1>
        <div className="careers-banner-container">
          <img
            className="careers-banner"
            src={careersBanner}
            alt="Career Banner"
          />
        </div>
      </div>
      {/* Can add perks and benefits section later */}
      <div className="careers-container">
        <input
          placeholder="Enter Job Title"
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="career-options-container">
          {CareerData.filter((job) => {
            if (query === "") {
              return job;
            } else if (
              job.position.toLowerCase().includes(query.toLowerCase())
            ) {
              return job;
            }
          }).map((job, index) => (
            <div className="career-card" key={index}>
              <h1>{job.position}</h1>
              <h3>{job.department}</h3>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
