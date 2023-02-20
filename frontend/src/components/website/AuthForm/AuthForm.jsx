import axios from "axios"
import React, { useState, useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

import { CircularProgress } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "./authform.scss"

export default function AuthForm({
  credentials,
  handleChange,
  toggleAuth,
  changeStep,
}) {
  const loading = false

  const [currentArea, setCurrentArea] = useState("US")
  const [currentCode, setCurrentCode] = useState("+1")
  const [phone, setPhone] = useState("")
  const [placeholder, setPlaceholder] = useState("(XXX) XXX-XXXX")
  const [isFocused, setIsFocused] = useState(false)

  const areas = [
    { value: "CA", name: "Canada (+1)", code: "+1" },
    { value: "HK", name: "Hong Kong (+852)", code: "+852" },
    { value: "US", name: "United States (+1)", code: "+1" },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get("/auth/checkByPhone", credentials.phone)
      if (res.data) {
        //if user exists go to phone verification
        changeStep(3)
      } else {
        //else direct to signup
        changeStep(4)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleAreaChange = (e) => {
    const found = areas.find((element) => {
      return element.value === e.target.value
    })
    setCurrentArea(e.target.value)
    setCurrentCode(found.code)
    if (e.target.value !== "HK") {
      setPlaceholder("(XXX) XXX-XXXX")
    } else {
      setPlaceholder("XXXX-XXXX")
    }
  }

  const handleInputChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(currentArea, e.target.value)
    setPhone(formattedPhoneNumber)
    handleChange(e)
  }

  function formatPhoneNumber(area, value) {
    if (!value) return value
    const phoneNumber = value.replace(/[^\d]/g, "")
    const phoneNumberLength = phoneNumber.length
    if (area !== "HK") {
      if (phoneNumberLength < 4) {
        return `(${phoneNumber}`
      } else if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
      } else {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 10)}`
      }
    } else {
      if (phoneNumberLength < 5) {
        return phoneNumber
      } else {
        return `${phoneNumber.slice(0, 4)}-${phoneNumber.slice(4, 8)}`
      }
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h2>Welcome to Bamboos</h2>
        <div className="form">
          <div className="select-container input-one">
            <div className="select-container-label">Country/Region</div>
            <div className="countrycode-container">
              <select
                defaultValue={"US"}
                onChange={handleAreaChange}
                className="login-signup-countrycode"
              >
                {areas.map((area) => (
                  <option key={area.value} value={area.value}>
                    {area.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-two">
            {(isFocused || phone.length > 0) && (
              <span
                className={` ${
                  phone.length > 0 ? "phone-code-active" : "phone-code"
                }`}
              >
                {currentCode}
              </span>
            )}
            <input
              type="phone"
              required
              id="phone"
              className="form-input"
              value={phone}
              placeholder={placeholder}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => handleInputChange(e)}
            />
            <span className="floating-label">Phone number</span>
          </div>
          <h4>
            We'll call or text you to confirm your number. Standard message and
            data rates apply.
          </h4>
          <button
            className="auth-button"
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Continue"
            )}
          </button>
        </div>
        <div className="auth-break">
          <hr className="auth-line" />
          <span>or</span>
          <hr className="auth-line" />
        </div>
        <div className="auth2-login-container">
          <div className="auth2-logo-container">
            <FontAwesomeIcon icon={faFacebook} className="auth2-icon" />
          </div>
          <h3>Continue with Facebook</h3>
        </div>
        <div className="auth2-login-container">
          <div className="auth2-logo-container">
            <FontAwesomeIcon icon={faGoogle} className="auth2-icon" />
          </div>
          <h3>Continue with Google</h3>
        </div>
        <div className="auth2-login-container" onClick={() => changeStep(1)}>
          <div className="auth2-logo-container">
            <FontAwesomeIcon icon={faEnvelope} className="auth2-icon" />
          </div>
          <h3>Continue with Email</h3>
        </div>
      </div>
    </div>
  )
}
