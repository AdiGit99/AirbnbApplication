import React, { useState, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"

import AuthModal from "../components/website/AuthModal/AuthModal"
import Navbar from "../components/website/Navbar/navbar"
import Footer from "../components/website/Footer/footer"

import "./layout.scss"

export const WithNav = ({ user }) => {
  const [authActive, setAuthActive] = useState(false)
  const [click, setClick] = useState(false)
  const toggleAuth = () => setAuthActive(!authActive)

  useEffect(() => {
    if (authActive) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [authActive])

  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [click])

  return (
    <div className="overflow">
      {authActive && (
        <div className="auth-wrapper">
          <div className="overlay" />
          <AuthModal toggleAuth={toggleAuth} />
        </div>
      )}
      <Navbar
        user={user}
        toggleAuth={toggleAuth}
        click={click}
        setClick={setClick}
      />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export const WithoutNav = () => {
  return (
    <div className="overflow-temp">
      <Outlet />
    </div>
  )
}
