import React from "react"
import { Link } from "react-router-dom"

import { FaFacebookF, FaInstagram, FaWhatsapp, FaGoogle } from "react-icons/fa"

import "./footer.scss"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <ul className="footer-column">
            <span className="footer-header">Nurse</span>
            <li className="footer-column-link">
              <a href="login">Become a Nurse</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Opportunities</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Help</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Safety</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">BEST</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Application Requirements</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Insurance</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Earnings</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Bonus</a>
            </li>
          </ul>
          <ul className="footer-column">
            <span className="footer-header">Client</span>
            <li className="footer-column-link">
              <a href="/login">Become a client</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Safety</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Help</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Fare Estimate</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Rewards</a>
            </li>
            <li className="footer-column-link">
              <a href="/wip">Cancellation Options</a>
            </li>
          </ul>
          <ul className="footer-column">
            <span className="footer-header">Company</span>
            <li className="footer-column-link">
              <Link to="/about">About us</Link>
            </li>
            <li className="footer-column-link">
              <Link to="/login">Careers</Link>
            </li>
            <li className="footer-column-link">
              <Link to="/investors">Investor Relations</Link>
            </li>
            <li className="footer-column-link">
              <a href="wip">Bamboos Newsletter</a>
            </li>
            <li className="footer-column-link">
              <a href="wip">Corporate Social Responsibility</a>
            </li>
            <li className="footer-column-link">
              <a href="wip">Events</a>
            </li>
            <li className="footer-column-link">
              <a href="wip">Practice Room Booking</a>
            </li>
          </ul>
          <div className="img-button-container">
            <div className="img-button">
              <a href="/wip">Bamboos app</a>
            </div>
            <div className="img-button">
              <a href="/wip">Bamboos website</a>
            </div>
          </div>
        </div>
        <div className="links-socials-container">
          <span>©2021 Bamboos HealthCare Holdings Limited</span>
          <div>
            <a href="login">Terms</a>
            <a href="login">Privacy</a>
          </div>
          <div className="socials-icon-wrapper">
            <div className="socials-icon-container">
              <a href="login">
                <FaFacebookF
                  className="socials-icon"
                  style={{ fill: "white" }}
                />
              </a>
            </div>
            <div className="socials-icon-container">
              <a href="login">
                <FaWhatsapp
                  className="socials-icon"
                  style={{ fill: "white" }}
                />
              </a>
            </div>
            <div className="socials-icon-container">
              <a href="login">
                <FaInstagram
                  className="socials-icon"
                  style={{ fill: "white" }}
                />
              </a>
            </div>
            <div className="socials-icon-container">
              <a href="login">
                <FaGoogle className="socials-icon" style={{ fill: "white" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
