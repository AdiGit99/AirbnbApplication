import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import { Person, Menu } from "@mui/icons-material"

import "./dropdownProvider.scss"

export default function DropdownProvider({
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
    <div className="menu-container-provider">
      <button
        onClick={onClick}
        className={`menu-trigger ${isActive ? "menu-trigger-active" : ""}`}
        style={{ backgroundColor: bgColor }}
      >
        <Person className="topAvatar" />
      </button>
      <nav ref={authRef} className={`menu ${isActive ? "active" : "inactive"}`}>
        <ul>
          <li>
            <Link onClick={onClick} to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/account">
              Account
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/wip">
              Get help
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/wip">
              Refer a host
            </Link>
          </li>
          <li>
            <Link onClick={onClick} to="/">
              Switch to client
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
