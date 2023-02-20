import { FaFacebookF, FaInstagram, FaWhatsapp, FaGoogle } from "react-icons/fa";
import "./accountFooter.scss";

export const AccountFooter = () => {
  return (
    <div className="account-footer">
      <div className="account-footer-container">
        <div className="account-footer-grid">
          <ul className="account-footer-column">
            <span className="account-footer-header">Support</span>
            <li className="account-footer-column-link">
              <a href="login">Help Centre</a>
            </li>
            <li className="account-footer-column-link">
              <a href="/wip">Safety Information</a>
            </li>
            <li className="account-footer-column-link">
              <a href="/wip">Supporting people with disabilities</a>
            </li>
            <li className="account-footer-column-link">
              <a href="/wip">Cancellation options</a>
            </li>
            <li className="account-footer-column-link">
              <a href="/wip">Our COVID-19 Response</a>
            </li>
            <li className="account-footer-column-link">
              <a href="/wip">Report a problem</a>
            </li>
          </ul>
          <ul className="account-footer-column">
            <span className="account-footer-header">Community</span>
            <li className="account-footer-column-link">
              <a href="wip">Our humanitarian mission</a>
            </li>
            <li className="account-footer-column-link">
              <a href="wip">Corporate social responsibility</a>
            </li>
          </ul>
          <ul className="account-footer-column">
            <span className="account-footer-header">Providing</span>
            <li className="account-footer-column-link">
              <a href="wip">Become a provider</a>
            </li>
            <li className="account-footer-column-link">
              <a href="wip">Explore resources</a>
            </li>
            <li className="account-footer-column-link">
              <a href="wip">BEST certificate</a>
            </li>
            <li className="account-footer-column-link">
              <a href="wip">Visit our community forum</a>
            </li>
          </ul>
          <ul className="account-footer-column">
            <span className="account-footer-header">Bamboos</span>
            <li className="account-footer-column-link">
              <a href="wip">Newsroom</a>
            </li>
            <li className="account-footer-column-link">
              <a href="wip">Learn about new features</a>
            </li>
            <li className="account-footer-column-link">
              <a href="wip">Letter from our founders</a>
            </li>
            <li className="account-footer-column-link">
              <a href="wip">Careers</a>
            </li>
            <li className="account-footer-column-link">
              <a href="wip">Investors</a>
            </li>
            <li className="account-footer-column-link">
              <a href="wip">Gift cards</a>
            </li>
          </ul>
        </div>
        <div className="links-socials-container">
          <span className="links-footer-name">
            ©2021 Bamboos HealthCare Holdings Limited
          </span>
          <a href="wip">Terms</a>
          <a href="wip">Privacy</a>
          <a href="wip">Sitemap</a>
          <div className="socials-icon-wrapper">
            <div className="socials-icon-container">
              <a href="login">
                <FaFacebookF className="socials-icon" />
              </a>
            </div>
            <div className="socials-icon-container">
              <a href="login">
                <FaWhatsapp className="socials-icon" />
              </a>
            </div>
            <div className="socials-icon-container">
              <a href="login">
                <FaInstagram className="socials-icon" />
              </a>
            </div>
            <div className="socials-icon-container">
              <a href="login">
                <FaGoogle className="socials-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
