import React, { useState } from "react"

import aboutBanner from "../../../assets/aboutBanner.png"

import "./about.scss"

import {
  FaRegHeart,
  FaLock,
  FaHandshake,
  FaWifi,
  FaUsers,
  FaVectorSquare,
  FaTabletAlt,
} from "react-icons/fa"

export default function About() {
  const employeeData = [
    {
      name: "Example Name",
      description:
        "Example text talking about the person. Brief description about this person's professional experiences",
    },
    {
      name: "Example Name",
      description:
        "Example text talking about the person. Brief description about this person's professional experiences",
    },
    {
      name: "Example Name",
      description:
        "Example text talking about the person. Brief description about this person's professional experiences",
    },
    {
      name: "Example Name",
      description:
        "Example text talking about the person. Brief description about this person's professional experiences",
    },
    {
      name: "Example Name",
      description:
        "Example text talking about the person. Brief description about this person's professional experiences",
    },
    {
      name: "Example Name",
      description:
        "Example text talking about the person. Brief description about this person's professional experiences",
    },
    {
      name: "Example Name",
      description:
        "Example text talking about the person. Brief description about this person's professional experiences",
    },
    {
      name: "Example Name",
      description:
        "Example text talking about the person. Brief description about this person's professional experiences",
    },
  ]

  return (
    <div className="about">
      <section className="hero-info-about">
        <div className="color-block-about" />
        <div className="hero-container-info-about">
          <div className="info-container-about">
            <h4 className="small-headline-about">ABOUT US</h4>
            <h1 className="big-headline-about">
              We're a team dedicated to bringing you the best.
            </h1>
          </div>
          <div className="img-container-info-about">
            <img className="aboutBanner" src={aboutBanner} alt="About Banner" />
          </div>
        </div>
      </section>
      <section className="section-two-about">
        <div className="section-two-about-container">
          <div className="section-two-headers-about">
            <h1>Our mission</h1>
            <p>
              Based in Hong Kong, Bamboos Professional Nursing Services Limited,
              a member of Bamboos Health Care Holdings Limited, offers a wide
              range of professional, comprehensive and reliable healthcare
              staffing services.
            </p>
            <p>
              With a talent pool of over 25,000 qualified healthcare personnel,
              Bamboos serves as a trusted strategic advisor to our clients
              including hospitals, social service organizations, clinics,
              pharmaceutical companies and individuals with customized and most
              suitable healthcare staffing services.
            </p>
          </div>
          <div className="icon-blocks-about">
            <div className="block-container-about">
              <div className="about-icon-container">
                <FaRegHeart className="about-icon" />
              </div>
              <span className="block-header-about">Care</span>
            </div>
            <div className="block-container-about">
              <div className="about-icon-container">
                <FaLock className="about-icon" />
              </div>
              <span className="block-header-about">Integrity</span>
            </div>
            <div className="block-container-about">
              <div className="about-icon-container">
                <FaHandshake className="about-icon" />
              </div>
              <span className="block-header-about">Commitment</span>
            </div>
            <div className="block-container-about">
              <div className="about-icon-container">
                <FaWifi className="about-icon" />
              </div>
              <span className="block-header-about">Connected</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-three-about">
        <div className="section-three-about-wrapper">
          <div className="banner-msg-container-about">
            <p className="banner-header-about">Our leadership team</p>
            <p className="banner-message-about">
              This website is a redesign of the current website of this company.
              I decided to build this for two main purposes - firstly to learn
              and practice coding and secondly to create a product that I feel
              could help the company progress as a B2B business.
            </p>
          </div>
          <div className="profile-wrapper-about">
            {employeeData.map((employee, index) => (
              <div className="profile-container">
                <div className="profile-picture" />
                <h2>{employee.name}</h2>
                <p>{employee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-four-about">
        <div className="section-four-container">
          <h1>Keep up with the latest</h1>
          <div className="info-blocks-about">
            <div className="block-info-container-about">
              <div className="about-icon-container">
                <FaTabletAlt className="about-icon" />
              </div>
              <span className="block-info-header-about">Newsroom</span>
              <p className="block-info-about">
                Get annoucncements about partnerships, app updates, initiatives,
                and more near you and around the world.
              </p>
              <a href="login" className="section-four-link">
                Go to Newsroom
              </a>
            </div>
            <div className="block-info-container-about">
              <div className="about-icon-container">
                <FaUsers className="about-icon" />
              </div>
              <span className="block-info-header-about">Blog</span>
              <p className="block-info-about">
                Get health-related information and learn more about Bamboos
                services, partnerships and more.
              </p>
              <a href="login" className="section-four-link">
                Read our posts
              </a>
            </div>
            <div className="block-info-container-about">
              <div className="about-icon-container">
                <FaVectorSquare className="about-icon" />
              </div>
              <span className="block-info-header-about">
                Investor relations
              </span>
              <p className="block-info-about">
                Download financial reports, see next-quarter plans, and read
                about our corporate responsibility initiatives.
              </p>
              <a href="investors" className="section-four-link">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="last-section-about">
        <div className="last-section-banner-about">
          <h1>Join us today in working towards a better tomorrow</h1>
          <a href="login" className="contact-button-about">
            Contact us
          </a>
        </div>
      </section>
    </div>
  )
}
