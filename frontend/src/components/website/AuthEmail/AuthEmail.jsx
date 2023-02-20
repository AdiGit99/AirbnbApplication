import axios from "axios"
import React, { useState, useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import FormInput from "../Form/FormInput"

import { Close, Email } from "@mui/icons-material"
import { CircularProgress } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons"
import "./authEmail.scss"

export default function AuthEmail({ credentials, handleChange, changeStep }) {
  const { loading, error, dispatch } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("/auth/checkByEmail", credentials)
      if (res.data) {
        //if user exists go to password
        changeStep(2)
      } else {
        //else direct to signup
        changeStep(4)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="authEmail-container">
      <div className="authEmail-content">
        <h2>Welcome to Bamboos</h2>
        <div className="form">
          <div>
            <FormInput
              name="Email"
              label="Email"
              type="email"
              required
              id="email"
              className="form-input"
              placeholder=""
              onChange={handleChange}
              errorMessage="Email is invalid."
              formText=" "
            />
          </div>
          <button
            className="authEmail-button"
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Login or Signup"
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
        <div className="auth2-login-container" onClick={() => changeStep(0)}>
          <div className="auth2-logo-container">
            <FontAwesomeIcon icon={faMobileScreen} className="auth2-icon" />
          </div>
          <h3>Continue with Phone</h3>
        </div>
      </div>
    </div>
  )
}
