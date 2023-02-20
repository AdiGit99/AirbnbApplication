import React, { useState } from "react"

import nurseBanner from "../../../assets/nurse-banner.png"
import one from "../../../assets/one.png"
import two from "../../../assets/two.jpg"
import three from "../../../assets/three.jpg"
import four from "../../../assets/four.jpg"

import Accordion from "../../../components/website/Accordion/Accordion"

import "./nurse.scss"

import { FaHandHoldingHeart, FaShieldAlt, FaMoneyBill } from "react-icons/fa"

export default function Nurse() {
  const [activeNumber, setActiveNumber] = useState(0)

  const handleToggle = (openKey) => {
    setActiveNumber(activeNumber !== openKey ? openKey : activeNumber)
  }

  const accordionData = [
    {
      title: "24-hour Private Nursing",
      image: one,
      content:
        "Bamboos offers 24-hour private nursing solution services to our clients. Over 20,000 qualified health care personnel registered under Bamboos, will provide hospitalization and home-care nursing services to elderly, patients, infants children, pregnant and parturient woman. ",
      index: 0,
      color: "#f37c57",
    },
    {
      title: "Home Care Solution",
      image: two,
      content:
        "According to client's needs, Bamboos provides tailor made home care and consultation solutions. Instead of traveling back and forth to hospitals and clinics, at-home medical and nursing services bring convenience and peace of mind to clients especially the aged and those with travel limitation.",
      index: 1,
      color: "#6d6dcd",
    },
    {
      title: "Professional Care Assessment Service",
      image: three,
      content:
        "The professional out-reach team of Bamboos includes Registered Nurse, Physiotherapist, Occupational Therapist, Registered Social Worker etc. The team delivers comprehensive at-home clinical assessment service, in the client’s need of nursing and rehabilitation assessment.",
      index: 2,
      color: "#27a5df",
    },
    {
      title: "Physiotherapy and Occupational Therapy",
      image: four,
      content:
        "Regular at-home rehabilitative treatment and training can be offered by Bamboos physiotherapists and occupational therapists, therapists can provide suitable treatments with close progress monitor. Physiotherapy and Occupational Therapy is integral to a safe, healthy working environment.",
      index: 3,
      color: "#107f61",
    },
    // {
    //   title: "Nursing Home Care",
    //   image: five,
    //   content:
    //     "Nursing and care service, ou-patient escort service for the aged and disabled",
    //   index: 4,
    //   color: "rgb(181,220,25)",
    // },
    // {
    //   title: "Infant and Child Care",
    //   image: six,
    //   content: "Newborn baby care, pediatric nursing, infant care",
    //   index: 5,
    //   color: "rgb(181,199,225)",
    // },
    // {
    //   title: "Hospital Transfer and Travel Escort",
    //   image: seven,
    //   content:
    //     " Hospital transfer escort with health care professionals covers local and international travels",
    //   index: 6,
    //   color: "rgb(201,175,240)",
    // },
  ]

  return (
    <div>
      <section className="hero-info-nurse">
        <div className="color-block-nurse" />
        <div className="hero-container-info-nurse">
          <div className="info-container-nurse">
            <h4 className="small-headline-nurse">
              We value your expertise at Bamboos
            </h4>
            <h1 className="big-headline-nurse">
              Join us today in working towards a better tomorrow
            </h1>
            <p className="subheadline-nurse">
              Back up your big ideas, best memories, and family traditions. Save
              everything you want to remember, and every file you need to
              keep—forever.
            </p>
            <div className="signup-button-nurse-container">
              <a href="login" className="signup-button-nurse">
                Sign up
              </a>
            </div>
          </div>
          <div className="img-container-info-nurse">
            <img className="nurseBanner" src={nurseBanner} alt="Nurse Banner" />
          </div>
        </div>
      </section>
      <section className="section-two-nurse-container">
        <div className="section-two-headers-nurse">
          <h1>Bamboos work hard for you.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Sign up for Bamboos
            services and get help in 3 easy steps.
          </p>
        </div>
        <div className="info-blocks-nurse">
          <div className="block-info-container-nurse">
            <div className="nurse-icon-container">
              <FaHandHoldingHeart className="nurse-icon" />
            </div>
            <span className="block-info-header-nurse">Reliable</span>
            <p className="block-info-nurse">
              The Bamboos app and its features help you make money you can
              depend on. When you're ready, cash out instantly.
            </p>
          </div>
          <div className="block-info-container-nurse">
            <div className="nurse-icon-container">
              <FaShieldAlt className="nurse-icon" />
            </div>
            <span className="block-info-header-nurse">Quick and Easy</span>
            <p className="block-info-nurse">
              The Bamboos app and its features help you make money you can
              depend on. When you're ready, cash out instantly.
            </p>
          </div>
          <div className="block-info-container-nurse">
            <div className="nurse-icon-container">
              <FaMoneyBill className="nurse-icon" />
            </div>
            <span className="block-info-header-nurse">Peace of Mind</span>
            <p className="block-info-nurse">
              The Bamboos app and its features help you make money you can
              depend on. When you're ready, cash out instantly.
            </p>
          </div>
        </div>
      </section>
      <section className="section-three-nurse">
        <div className="banner-msg-container-nurse">
          <p className="banner-header-nurse">
            Explore our comprehensive nursing solutions.
          </p>
          <p className="banner-message-nurse">
            Bamboos have over 20,000 quailfied health care personnel ready to
            provide 24-hour private nursing solution services, Personal Care
            Assessment, and other services to our nurses.
          </p>
        </div>
      </section>
      <section className="last-section-nurse">
        <div className="last-section-banner-nurse">
          <h1>Join us today in working towards a better tomorrow</h1>
          <a href="contact" className="contact-button-nurse">
            Contact us
          </a>
        </div>
      </section>
    </div>
  )
}
