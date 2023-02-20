import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import bamlogo from "../../../assets/bam.png";

import "./wip.scss";

export default function RegisterOne() {
  return (
    <div className="wip-wrapper">
      <div className="wip-container">
        <Link className="logo-container" to="/">
          <img src={bamlogo} alt="Bamboos Logo" />
        </Link>
        <div className="progress-image-container"></div>
        <h1>Work in Progress</h1>
        <h3>This page is still being built</h3>
        <h3>Thanks for visiting. Please check back at a later time</h3>
        <div className="progress-button-container">
          <NavLink to="/" className="progress-button-text">
            Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
