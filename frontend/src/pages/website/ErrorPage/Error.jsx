import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import bamlogo from "../../../assets/bam.png";
import gearbot from "../../../assets/bot.png";

import "./error.scss";

export default function Error() {
  return (
    <div className="error-wrapper">
      <div className="error-container">
        <Link className="logo-container" to="/">
          <img src={bamlogo} alt="Bamboos Logo" />
        </Link>
        <div className="error-image-container">
          <img src={gearbot} alt="gear" />
        </div>
        <h1>Page Not Found</h1>
        <h3>Whoops, this page does not exist</h3>
        <h3>Looks like the page you were looking for wasn't found</h3>
        <div className="error-button-container">
          <NavLink to="/" className="error-button-text">
            Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
