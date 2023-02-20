import React, { useState, useLayoutEffect, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"

import homeBanner from "../../../assets/homeBanner.png"
import homeBannerNurse from "../../../assets/homeBannerNurse.png"
import homeBannerClient from "../../../assets/homeBannerClient.png"
import test1 from "../../../assets/test1.jpg"
import test2 from "../../../assets/test2.jpg"
import test3 from "../../../assets/test3.jpg"
import test4 from "../../../assets/test4.jpg"

import {
  FaUserNurse,
  FaHandHoldingHeart,
  FaClock,
  FaShieldAlt,
  FaStopwatch,
  FaHandshake,
  FaChevronRight,
  FaChevronLeft,
  FaMoneyBill,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa"

import Slider from "../../../components/website/Slider/Slider"
import "./home.scss"

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [sliderWidth, setSliderWidth] = useState(0)
  const ref = useRef(null)

  const sliderData = [
    {
      title: "Testimonial One",
      image: test1,
      content:
        "I recently found myself under your care for a cardiac issue. While there, accompanied by my wife, we found that the entire staff at Jamaica Hospital was exceedingly professional and efficient, from your E.R. receptionists to the cardiac care team. You should be proud of your outstanding staff and service.",
      textColor: "black",
      // backgroundColor: "rgb(160,4,52)",
      backgroundColor: "rgb(255, 241, 229)",
      index: 0,
      person: "John Example, patient with heart problems",
    },
    {
      title: "Testimonial Two",
      image: test2,
      content:
        "On behalf of my wife, who was a patient in your hospital, I humbly submit my sincere gratitude to the management and staff of Jamaica Hospital, especially to your outstanding nurses and PCAs. They have been outstandingly helpful and provided a high quality of service, care and comfort to my wife. Thank you.",
      textColor: "black",
      // backgroundColor: "rgb(256,84,28)",
      backgroundColor: "rgb(255, 241, 229)",
      index: 1,
      person: "Sarah Example, patient with heart problems",
    },
    {
      title: "Testimonial Three",
      image: test3,
      content:
        "I was recently cared for at Hong Kong Hospital following a heart attack while at the airport. I just wanted to say a few words about the exceptional care in the Cardiac Care unit and the MICU. ALl the doctors and nurses were friendly, plesant, kind, thorough, conscientious and professional. I am happy to have been in their care.",
      textColor: "black",
      // backgroundColor: "rgb(24,196,236)",
      backgroundColor: "rgb(255, 241, 229)",
      index: 2,
      person: "Annoymous, patient with heart problems",
    },
    {
      title: "Testimonial Four",
      image: test4,
      content:
        "I am writing on behalf of my brother who was a patient in your hospital. I would like to thank you on behalf of my entire family for the help and consideration shown to me in what was a very difficult time. Again, I would like to thank you for the services you provide to patients and their families.",
      textColor: "black",
      // backgroundColor: "rgb(184,220,28)",
      backgroundColor: "rgb(255, 241, 229)",
      index: 3,
      person: "Emily Example, patient with heart problems",
    },
  ]
  const length = sliderData.length

  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? current : current + 1)
  }

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? current : current - 1)
  }

  useLayoutEffect(() => {
    setSliderWidth(ref.current.offsetWidth)
  }, [])

  useEffect(() => {
    function handleWindowResize() {
      setSliderWidth(ref.current.offsetWidth)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [sliderWidth])

  return (
    <div className="home">
      <section className="hero-container-home">
        <div className="info-container-hero">
          <div className="info-hero">
            <h1 className="big-headline">
              Say hello to a <span className="accent">better</span> way to live
            </h1>
            <p className="subheadline">
              Need a trustworthy healthcare professional to take care of the
              ones you love? We are here for you. Join our platform and get the
              best care you need.
            </p>
            <div className="hero-buttons">
              <div className="hero-button-container">
                <NavLink to="/login" className="hero-client-button-text">
                  Join our team
                </NavLink>
              </div>
              <div className="hero-button-container">
                <NavLink to="/login" className="hero-client-button-text">
                  Sign up for care
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="img-container-hero-home">
          <div className="banner-container">
            <img className="homeBanner" src={homeBanner} alt="Home Banner" />
          </div>
        </div>
      </section>
      <section className="section-two-home">
        <div className="brief-container">
          <h3>OUR SERVICES</h3>
          <h2>Discover the life-changing care and services that we bring</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div className="two-grid-container">
          <div className="two-grid-component">
            <div className="home-icon-container">
              <FaUserNurse className="home-icon" />
            </div>
            <h1>Quality Care</h1>
            <h3>
              High Quality Nurses with Training in At-Home Care to suit your
              needs
            </h3>
          </div>
          <div className="two-grid-component">
            <div className="home-icon-container">
              <FaClock className="home-icon" />
            </div>
            <h1>Various Components</h1>
            <h3>24 Hours/Day, 7 Days/Week, 365 Days/Year Clinical Support</h3>
          </div>
          <div className="two-grid-component">
            <div className="home-icon-container">
              <FaShieldAlt className="home-icon" />
            </div>
            <h1>Dedicated Staff</h1>
            <h3>Serving Hong Kong for more than 20 years to suit your needs</h3>
          </div>
        </div>
      </section>
      <section className="section-three-home">
        <div className="section-three-container">
          <div className="section-three-banner-home-container">
            <img
              className="homeBannerNurse"
              src={homeBannerClient}
              alt="Home Banner"
            />
          </div>
          <div className="client-info-container-home">
            <h3 className="client-info-subtitle">SOME CONTENT</h3>
            <h1 className="client-info-title">
              Our team is here to help your business succeed healthily
            </h1>
            <p className="client-info-component-paragraph-container">
              Your peace of mind is our peace of mind. In addition to screening
              every nurse and holding our community accountable, we have built
              safety right into the system.
            </p>
            <div className="client-info-button-wrapper">
              <NavLink to="/client" className="client-info-button">
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
        <div className="color-block" />
      </section>
      <section className="section-three-home section-four-home">
        <div className="section-three-container section-four-container">
          <div className="client-info-container-home">
            <h3 className="client-info-subtitle">SOME CONTENT</h3>
            <h1 className="client-info-title">
              Our team is here to help your business succeed healthily
            </h1>
            <p className="client-info-component-paragraph-container">
              Make money, keep your tips, and cash out when you want. Be your
              own boss and work whenever you can.
            </p>
            <div className="client-info-button-wrapper">
              <NavLink to="/client" className="client-info-button">
                Learn More
              </NavLink>
            </div>
          </div>
          <div className="section-three-banner-home-container">
            <img
              className="homeBannerNurse"
              src={homeBannerNurse}
              alt="Home Banner"
            />
          </div>
        </div>
        <div className="color-block-second-block" />
      </section>
      <section className="section-five-home">
        <div className="section-five-home-container">
          <div className="section-five-header-container">
            <h1 className="section-five-header">Customer love</h1>
            <h3 className="section-five-subheader">
              Trusted by over 1 million patients and 500,000 healthcare
              personnel
            </h3>
          </div>
          {current !== 0 && (
            <div className="left-arrow-container">
              <FaArrowLeft className="leftArrow" onClick={handlePrevSlide} />
            </div>
          )}
          <div className="slider-container" ref={ref}>
            <div
              className="inner-container"
              style={{ transform: `translateX(-${current * sliderWidth}px)` }}
            >
              {sliderData.map(
                ({
                  index,
                  image,
                  content,
                  textColor,
                  backgroundColor,
                  person,
                }) => (
                  <div className="slider-frame" key={index}>
                    <Slider
                      key={index}
                      index={index}
                      image={image}
                      content={content}
                      textColor={textColor}
                      backgroundColor={backgroundColor}
                      person={person}
                      current={current}
                    />
                  </div>
                )
              )}
            </div>
          </div>
          {current !== 3 && (
            <div className="right-arrow-container">
              <FaArrowRight className="rightArrow" onClick={handleNextSlide} />
            </div>
          )}
          <div className="small-nav-arrow-container">
            {current !== 0 && (
              <FaArrowLeft
                className="small-leftArrow"
                onClick={handlePrevSlide}
              />
            )}
            <span className="small-nav">
              {" "}
              0{current + 1} / 0{length}
            </span>
            {current !== 3 && (
              <FaArrowRight
                className="small-rightArrow"
                onClick={handleNextSlide}
              />
            )}
          </div>
        </div>
      </section>
      <section className="last-section-home">
        <div className="last-section-banner-home">
          <h1>Join us today in working towards a better tomorrow</h1>
          <a href="contact" className="contact-button-home">
            Contact us
          </a>
        </div>
      </section>
    </div>
  )
}
