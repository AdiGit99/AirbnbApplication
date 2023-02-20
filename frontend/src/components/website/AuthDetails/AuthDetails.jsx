import axios from "axios"
import React, { useState, useContext, useEffect } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import FormInput from "../Form/FormInput"

import { ChevronLeft } from "@mui/icons-material"
import { CircularProgress } from "@mui/material"
import "./authDetails.scss"

export default function AuthForm({ credentials, handleChange, toggleAuth }) {
  const [nameError, setNameError] = useState(false)

  //Getting today's date
  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth() + 1
  var yyyy = today.getFullYear()
  if (dd < 10) {
    dd = "0" + dd
  }
  if (mm < 10) {
    mm = "0" + mm
  }
  today = yyyy + "-" + mm + "-" + dd

  const { loading, error, dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post("/auth/register", credentials)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })
      toggleAuth(false)
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
    }
  }

  return (
    <div className="authDetails-container">
      <div className="authDetails-content">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <FormInput
              name="Firstname"
              label="First name"
              type="text"
              required
              id="firstname"
              parentname="input-one"
              className="form-input"
              placeholder=""
              onChange={handleChange}
              setNameError={setNameError}
              errorMessage=""
              formText=""
            />
          </div>
          <div>
            <FormInput
              name="Lastname"
              label="Last name"
              type="text"
              required
              id="lastname"
              parentname="input-two"
              className="form-input"
              placeholder=""
              nameError={nameError}
              onChange={handleChange}
              errorMessage="First and Last name should only include letters"
              formText=" Make sure it matches the name on your government ID."
            />
          </div>
          <div>
            <FormInput
              name="Birthday"
              label="Birthday"
              type="text"
              required
              id="dob"
              className="form-input date-input"
              today={today}
              min="1889-01-01"
              max={today}
              onChange={handleChange}
              errorMessage="Birthday is invalid."
              formText="To sign up, you need to be at least 18. Your birthday won't be
              shared with other people who use Bamboos."
            />
          </div>
          <div>
            <FormInput
              name="Email"
              label="Email"
              type="email"
              required
              id="email"
              className="form-input"
              placeholder=""
              defaultValue={credentials.email}
              onChange={handleChange}
              errorMessage="Email is invalid."
              formText="We'll email you appointment confirmations and receipts"
            />
          </div>
          <div>
            <FormInput
              name="password"
              label="Password"
              type="password"
              required
              id="password"
              className="form-input"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <p className="word-break">
            By selecting Agree and Continue, I agree to Bamboo's Terms of
            Service, Payments Terms of Service, Privacy Policy, and
            Nondiscrmination Policy.
          </p>
          <button
            className="authDetails-button"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Agree and continue"
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
