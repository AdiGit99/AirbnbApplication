import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import bamlogo from "../../../assets/bam.png";

import "./registerOne.scss";

// const updateUser = (e) => {
//   setNew((prevUser) => ({ ...prevUser, [e.target.id]: e.target.valzue }));
// };

// const resetUser = () => {
//   setNew({});
// };

export default function RegisterOne() {
  return (
    <div className="registerOne-wrapper">
      <div className="registerOne-container">
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
