import axios from "axios";
import { useRef } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";

import bamlogo from "../../../assets/bam.png";
import hero from "../../../assets/login-graphic.png";
import "./login.scss";

export default function RegisterTemp() {
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <div className="header">
        <Link className="logo-container-login" to="/">
          <img className="bamlogo" src={bamlogo} alt="Bamboos Logo" />
        </Link>
      </div>
      <div className="hero">
        <div className="hero-container">
          <div className="img-container">
            <img className="login-graphic" src={hero} alt="login-graphic" />
          </div>
          <div className="login-container">
            <div className="alternative-login">
              <h3>Already have an account?</h3>
              <div className="register-button-container-login">
                <NavLink to="/login" className="register-button-text-login">
                  SIGN IN
                </NavLink>
              </div>
            </div>
            <h1 className="title-login">Welcome Back</h1>
            <h3 className="subtitle-login">Login to your account</h3>
            <div className="login-form">
              <form className="login-box" onSubmit={handleClick}>
                <span>Email</span>
                <input
                  placeholder="Email"
                  required
                  ref={email}
                  className="text-input"
                  type="email"
                />
                <span>Password</span>
                <input
                  placeholder="Password"
                  required
                  ref={password}
                  className="text-input"
                  type="password"
                  minLength="6"
                />
                <span>Confirm Password</span>
                <input
                  placeholder="Password Again"
                  required
                  ref={passwordAgain}
                  className="text-input"
                  type="password"
                />
                <button className="loginButton" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="temp">
        <hr className="separator" />
      </div>
      <div className="footer-login">
        <div className="footer-container-login">
          <div className="footer-content-login">
            <ul className="footer-column-login">
              <li className="footer-title-login">Bamboos</li>
              <li>Install</li>
              <li>Mobile</li>
              <li>Rates</li>
              <li>Institutions</li>
              <li>Features</li>
              <li>Enterprise</li>
            </ul>
            <ul className="footer-column-login">
              <li className="footer-title-login">About us</li>
              <li>About</li>
              <li>News</li>
              <li>Jobs</li>
              <li>Bamboos Blog</li>
            </ul>
            <ul className="footer-column-login">
              <li className="footer-title-login">Support</li>
              <li>Help Center</li>
              <li>Contact us</li>
              <li>Copyright</li>
              <li>Cookies</li>
              <li>Privacy &amp; Terms</li>
              <li>Sitemap</li>
            </ul>
            <ul className="footer-column-login">
              <li className="footer-title-login">Community</li>
              <li>Referrals</li>
              <li>Forum</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="languageLogin">
            <div className="language-container-login" />
          </div>
        </div>
      </div>
    </div>
  );
}
