import axios from "axios"
import React, { useState, useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import FormInput from "../Form/FormInput"

import { CircularProgress } from "@mui/material"
import "./authPassword.scss"

export default function AuthPassword({
  credentials,
  handleChange,
  changeStep,
  toggleAuth,
}) {
  const { loading, error, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {
      email: credentials.email,
      password: credentials.password,
    }
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post("/auth/login", user)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })
      toggleAuth(false)
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
    }
  }

  return (
    <div className="authPassword-container">
      <div className="authPassword-content">
        <div className="form">
          <div>
            <FormInput
              name="Password"
              label="Password"
              type="password"
              required
              id="password"
              className="form-input"
              placeholder=""
              onChange={handleChange}
              errorMessage=" "
              formText=" "
            />
          </div>
          <button
            className="authPassword-button"
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress color="inherit" size="20px" />
            ) : (
              "Login or Signup"
            )}
          </button>
          <h4>Forgot password?</h4>
        </div>
      </div>
    </div>
  )
}
