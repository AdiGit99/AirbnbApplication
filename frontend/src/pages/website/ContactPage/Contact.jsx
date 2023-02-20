import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FaRegEnvelope,
  FaMapSigns,
  FaPhone,
  FaUserCircle,
} from "react-icons/fa";

import "./contact.scss";
export default function Contact() {
  const [query, setQuery] = useState("");
  return (
    <div className="contact-wrapper">
      <div className="contact-hero-container">
        <h3 className="contact-subtitle">CONTACT US</h3>
        <h1 className="contact-title">
          Get in touch to see how we can help you
        </h1>
        <p>
          We are here for you. Contact us if you have any problems or general
          questions.
        </p>
      </div>
      <section className="contact-section-container">
        <div className="contact-container">
          <div className="form-container">
            <h1>Leave us a message</h1>
            <input
              className="regular-input"
              placeholder="Name"
              onChange={(event) => setQuery(event.target.value)}
            />
            <input
              className="regular-input"
              placeholder="Email Address"
              onChange={(event) => setQuery(event.target.value)}
            />
            <input
              className="regular-input"
              placeholder="Phone Number"
              onChange={(event) => setQuery(event.target.value)}
            />
            <input
              className="regular-input description-input"
              placeholder="Your Message"
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="contact-button-container">
              <NavLink to="/wip" className="contact-button-text">
                Submit
              </NavLink>
            </div>
          </div>
          <div className="contact-icon-container">
            <div className="block-container-contact">
              <div className="contact-icon-container">
                <FaMapSigns className="contact-icon" />
              </div>
              <span className="block-header-contact">Hong Kong</span>
            </div>
            <div className="block-container-contact">
              <div className="contact-icon-container">
                <FaRegEnvelope className="contact-icon" />
              </div>
              <span className="block-header-contact">
                prototype@bamboos.com.hk
              </span>
            </div>
            <div className="block-container-contact">
              <div className="contact-icon-container">
                <FaPhone className="contact-icon" />
              </div>
              <span className="block-header-contact">XXX-XXX-XXXX</span>
            </div>
            <div className="block-container-contact">
              <div className="contact-icon-container">
                <FaUserCircle className="contact-icon" />
              </div>
              <span className="block-header-contact">
                Chat with representative
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
