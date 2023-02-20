import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import {
  Home,
  HomeOutlined,
  CalendarTodayOutlined,
  Search,
  AccountCircleOutlined,
  ChatBubbleOutline,
} from "@mui/icons-material"

import "./bottomNav.scss"

export default function BottomNav() {
  const location = useLocation()

  return (
    <div className="bottomNav">
      <Link
        className={`icon-container ${
          location.pathname.includes("home") && "icon-container-active"
        }`}
      >
        <HomeOutlined className="icon" />
        <span className="nav-header">Home</span>
      </Link>
      <Link
        className={`icon-container ${
          location.pathname.includes("search") && "icon-container-active"
        }`}
      >
        <Search className="icon" />
        <span className="nav-header">Explore</span>
      </Link>
      <Link
        className={`icon-container ${
          location.pathname.includes("appointments") && "icon-container-active"
        }`}
      >
        <CalendarTodayOutlined className="icon" />
        <span className="nav-header">Calendar</span>
      </Link>
      <Link
        className={`icon-container ${
          location.pathname.includes("messages") && "icon-container-active"
        }`}
      >
        <ChatBubbleOutline className="icon" />
        <span className="nav-header">Inbox</span>
      </Link>
      <Link
        className={`icon-container ${
          location.pathname.includes("account") && "icon-container-active"
        }`}
      >
        <AccountCircleOutlined className="icon" />
        <span className="nav-header">Profile</span>
      </Link>
    </div>
  )
}
