import React, { useState, useRef, useEffect, useContext } from "react"
import { ReactComponent as CloseMenu } from "../../../assets/exit.svg"
import { ReactComponent as MenuIcon } from "../../../assets/menu.svg"
import { Link, NavLink, useNavigate } from "react-router-dom"

import bamlogo from "../../../assets/bam.png"
import { Person } from "@mui/icons-material"
import { AuthContext } from "../../../context/AuthContext"
import Dropdown from "../Dropdown/Dropdown"

import "./navbar.scss"

export default function Navbar({ user, toggleAuth, click, setClick }) {
  const { dispatch } = useContext(AuthContext)
  const [burgerClick, setBurgerClick] = useState(false)
  // const closeMobileMenu = () => setClick(false)
  const navigate = useNavigate()

  //account menu
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  //drop auth menu
  const openAuthForm = () => {
    setClick(false)
    toggleAuth()
  }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    navigate("/")
  }

  const handleClick = () => {
    setClick(!click)
    const timer = setTimeout(() => setBurgerClick(false), 1000)
    return () => clearTimeout(timer)
  }

  return (
    <div className="navbar">
      <nav className="navbar-container">
        <Link className="logo-container" to="/">
          <img src={bamlogo} alt="Bamboos Logo" />
        </Link>
        <div className={`nav-options-container ${click ? "burger" : ""}`}>
          <div className="option-dropdown">
            <h1 onClick={() => setBurgerClick(!burgerClick)} className="option">
              Company
            </h1>
            <div
              className={`submenu-container ${
                burgerClick ? "burgerClick" : ""
              }`}
            >
              <NavLink
                className="submenu-option"
                to="/about"
                onClick={handleClick}
              >
                About us
              </NavLink>
              <NavLink
                className="submenu-option"
                to="/rates"
                onClick={handleClick}
              >
                Earnings
              </NavLink>
              <NavLink
                className="submenu-option"
                to="/careers"
                onClick={handleClick}
              >
                Careers
              </NavLink>
              <NavLink
                className="submenu-option"
                to="/investors"
                onClick={handleClick}
              >
                Investor Relations
              </NavLink>
              <NavLink
                className="submenu-option"
                to="/contact"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <NavLink className="option" to="/nurse" onClick={handleClick}>
            Healthcare Provider
          </NavLink>
          <NavLink className="option" to="/client" onClick={handleClick}>
            Member
          </NavLink>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
        <div className="login-nav-option">
          {!user && (
            <div className="login-button-container" onClick={openAuthForm}>
              Login
            </div>
          )}
          {user && (
            <>
              {true && (
                <div
                  className="hosting-switch"
                  onClick={() => navigate("/provider")}
                >
                  Switch to healthcare
                </div>
              )}
              <Dropdown
                handleLogout={handleLogout}
                isActive={isActive}
                setIsActive={setIsActive}
                onClick={onClick}
                bgColor="white"
              />
            </>
          )}
        </div>
      </nav>
    </div>
  )
}
