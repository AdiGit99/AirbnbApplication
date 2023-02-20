import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

import { Person, Menu, Language } from "@mui/icons-material"
import { AuthContext } from "../../../context/AuthContext"
import bamlogo from "../../../assets/bam.png"

import "./topbarGeneral.scss"
import Dropdown from "../../website/Dropdown/Dropdown"

export default function TopbarGeneral() {
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    navigate("/")
  }

  return (
    <div className="topbarGeneralWrapper">
      <Link className="logo-container" to="/">
        <img src={bamlogo} alt="Bamboos Logo" />
      </Link>
      <div className="nav-options">
        {true && (
          <div className="hosting-switch" onClick={() => navigate("/provider")}>
            Switch to caregiving
          </div>
        )}
        <div className="topbarGeneral-button">
          <Language className="topbarGeneral-icon" />
        </div>
        <Dropdown
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
