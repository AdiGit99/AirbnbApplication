import React, { useState, useEffect, useRef, useCallback } from "react"
import { AuthContext } from "../../../context/AuthContext"
import { Close, Email } from "@mui/icons-material"
import { ChevronLeft } from "@mui/icons-material"

import AuthForm from "../AuthForm/AuthForm"
import AuthDetails from "../AuthDetails/AuthDetails"
import AuthEmail from "../AuthEmail/AuthEmail"
import AuthPassword from "../AuthPassword/AuthPassword"
import AuthPhoneVerification from "../AuthPhoneVerification/AuthPhoneVerification"

import "./authModal.scss"

export default function AuthModal({ toggleAuth }) {
  const [credentials, setCredentials] = useState({
    firstname: undefined,
    lastname: undefined,
    dob: undefined,
    phone: undefined,
    email: undefined,
    password: undefined,
  })

  const authRef = useRef(null)
  const [step, setStep] = useState(0)

  const previousStep = () => {
    setStep(step - 1)
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const changeStep = useCallback((num) => {
    setStep(num)
  }, [])

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value })
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (authRef.current && !authRef.current.contains(event.target)) {
        toggleAuth()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [authRef])

  const stepDisplay = () => {
    switch (step) {
      case 0:
        return (
          <AuthForm
            credentials={credentials}
            handleChange={handleChange}
            toggleAuth={toggleAuth}
            changeStep={changeStep}
          />
        )

      case 1:
        return (
          <AuthEmail
            credentials={credentials}
            handleChange={handleChange}
            changeStep={changeStep}
            toggleAuth={toggleAuth}
          />
        )

      case 2:
        return (
          <AuthPassword
            credentials={credentials}
            handleChange={handleChange}
            changeStep={changeStep}
            toggleAuth={toggleAuth}
          />
        )

      case 3:
        //phone verification
        return (
          <AuthPhoneVerification
            credentials={credentials}
            toggleAuth={toggleAuth}
            changeStep={changeStep}
          />
        )

      case 4:
        return (
          <AuthDetails
            credentials={credentials}
            handleChange={handleChange}
            toggleAuth={toggleAuth}
            changeStep={changeStep}
          />
        )
      //Phone verified, find phone in db. If exists, login, else case 2
      //Sign up email, name, socials?, dob then redirect
    }
  }

  const stepTopDisplay = () => {
    switch (step) {
      case 0:
        return (
          <div className="auth-topbar">
            <div className="auth-close-container" onClick={toggleAuth}>
              <Close className="auth-close" />
            </div>
            <h3>Log in or sign up</h3>
          </div>
        )

      case 1:
        return (
          <div className="auth-topbar">
            <div className="auth-close-container" onClick={toggleAuth}>
              <Close className="auth-close" />
            </div>
            <h3>Log in or sign up</h3>
          </div>
        )

      case 2:
        return (
          <div className="auth-topbar">
            <div className="auth-close-container" onClick={() => changeStep(1)}>
              <ChevronLeft className="auth-close" />
            </div>
            <h3>Log in</h3>
          </div>
        )

      case 3:
        //phone verification
        return (
          <div className="auth-topbar">
            <div className="auth-close-container" onClick={() => changeStep(0)}>
              <ChevronLeft className="auth-close" />
            </div>
            <h3>Confirm your number</h3>
          </div>
        )

      case 4:
        return (
          <div className="auth-topbar">
            <div className="auth-close-container" onClick={() => changeStep(1)}>
              <ChevronLeft className="auth-close" />
            </div>
            <h3>Finish signing up</h3>
          </div>
        )
      //Phone verified, find phone in db. If exists, login, else case 2
      //Sign up email, name, socials?, dob then redirect
    }
  }

  return (
    <div ref={authRef} className="authmodal-container">
      <div className="auth-topbar-container">{stepTopDisplay()}</div>
      {stepDisplay()}
    </div>
  )
}
