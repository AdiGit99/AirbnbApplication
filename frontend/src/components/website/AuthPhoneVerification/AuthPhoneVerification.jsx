import React, { useState, createRef } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { ChevronLeft } from "@mui/icons-material"
import "./authPhoneVerification.scss"

export default function AuthPhoneVerification({
  credentials,
  toggleAuth,
  changeStep,
}) {
  const CODE_LENGTH = new Array(6).fill(0)
  const input = createRef()
  const [digits, setDigits] = useState("")
  const [focused, setFocused] = useState(false)
  const code = digits.split("")

  const navigate = useNavigate()

  const selectedIndex =
    digits.length < CODE_LENGTH.length ? digits.length : CODE_LENGTH.length - 1

  const hideInput = !(digits.length < CODE_LENGTH.length)

  const handleClick = () => {
    input.current.focus()
  }

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
  }

  const handleChange = (e) => {
    const value = e.target.value

    if (digits.length >= CODE_LENGTH) {
      return null
    } else {
      setDigits((digits + value).slice(0, CODE_LENGTH.length))
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === "Backspace") {
      setDigits(digits.slice(0, digits.length - 1))
    }
  }

  const handleNext = () => {
    const getUser = async () => {
      try {
        const res = await axios.get("/users/find" + credentials.phone)
        toggleAuth(false)
        navigate("/")
      } catch (err) {
        changeStep(3)
      }
    }
    getUser()
  }

  return (
    <div className="phone-verification-container">
      <div className="phone-content-container">
        <h3 className="phone-text">
          Enter the code we sent over SMS to {credentials.phone}
        </h3>
        <div
          className="phone-verification-input-container"
          onClick={handleClick}
        >
          {CODE_LENGTH.map((v, index) => {
            const selected = code.length === index
            const filled =
              code.length === CODE_LENGTH.length &&
              index === CODE_LENGTH.length - 1
            return (
              <div className="display">
                {code[index]}
                {(selected || filled) && focused && <div className="shadows" />}
              </div>
            )
          })}
          <input
            value=""
            ref={input}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            className="input"
            style={{
              width: "58px",
              top: "0px",
              bottom: "0px",
              left: `${selectedIndex * 58}px`,
              opacity: hideInput ? 0 : 1,
            }}
          />
        </div>
        <h3 className="phone-options">
          Didn't get a code? <span>More options</span>
        </h3>
        {/* <button onClick={handleNext} className="phone-button">
          Submit
        </button> */}
      </div>
    </div>
  )
}
