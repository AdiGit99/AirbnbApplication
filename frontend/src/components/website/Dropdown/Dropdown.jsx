import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import { Person, Menu } from "@mui/icons-material"

import "./dropdown.scss"

export default function Dropdown({
  handleLogout,
  isActive,
  setIsActive,
  onClick,
  bgColor,
}) {
  const authRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (authRef.current && !authRef.current.contains(event.target)) {
        setIsActive(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [authRef])

  return (
    <div className="menu-container">
      <button
        onClick={onClick}
        className="menu-trigger"
        style={{ backgroundColor: bgColor }}
      >
        <Menu className="topbarGeneral-icon" />
        <Person className="topAvatar" />
      </button>
      <nav ref={authRef} className={`menu ${isActive ? "active" : "inactive"}`}>
        <ul>
          <li>
            <Link onClick={onClick} to="/messages">
              Messages
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/appointments">
              Appointments
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/account">
              Account
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/wip">
              Help
            </Link>
          </li>
          <li>
            <div className="logout-option" onClick={handleLogout}>
              Logout
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
