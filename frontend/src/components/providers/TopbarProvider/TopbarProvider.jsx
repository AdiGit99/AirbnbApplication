import React, { useState, useRef, useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"

import { Notifications } from "@mui/icons-material"
import { AuthContext } from "../../../context/AuthContext"
import bamlogo from "../../../assets/bam.png"

import "./topbarProvider.scss"
import DropdownProvider from "../DropdownProvider/DropdownProvider"

export default function TopbarProvider() {
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    navigate("/")
  }

  return (
    <div className="topbarProviderWrapper">
      <Link className="logo-container" to="/">
        <img src={bamlogo} alt="Bamboos Logo" />
      </Link>
      <div className="nav-options">
        <NavLink
          className={({ isActive }) =>
            `option ${isActive ? "option-active" : ""}`
          }
          end
          to="/provider"
        >
          Today
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `option ${isActive ? "option-active" : ""}`
          }
          to="/provider/inbox"
        >
          Inbox
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `option ${isActive ? "option-active" : ""}`
          }
          to="/provider/schedule"
        >
          Calendar
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `option ${isActive ? "option-active" : ""}`
          }
          to="/provider/insights"
        >
          Insights
        </NavLink>
      </div>
      <div className="nav-options-right">
        <div className="topbarProvider-button">
          <Notifications className="topbarProvider-icon" />
        </div>
        <DropdownProvider
          handleLogout={handleLogout}
          isActive={isActive}
          setIsActive={setIsActive}
          onClick={onClick}
          bgColor="white"
        />
      </div>
    </div>
  )
}
