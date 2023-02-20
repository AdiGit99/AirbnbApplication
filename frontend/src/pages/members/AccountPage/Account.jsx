import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

import {
  Face,
  Security,
  Payment,
  NotificationsNone,
  PersonAddOutlined,
  Tune,
  ChevronRight,
} from "@mui/icons-material"

import "./account.scss"

export default function Account() {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const accountOptions = [
    {
      icon: Face,
      link: "/account/personal-info",
      title: "Personal info",
      detail: "Provide personal details and how we can reach you",
    },
    {
      icon: Security,
      title: "Login and security",
      link: "/account/login-and-security",
      detail: "Update your password and secure your account",
    },
    {
      icon: Payment,
      title: "Payment and payouts",
      link: "/account/payments",
      detail: "Review payments, payouts, coupons, gift cards, and taxes",
    },
    {
      icon: NotificationsNone,
      title: "Notifications",
      // link: "/account/notifications",
      link: "/wip",
      detail:
        "Choose notification preferences and how you want to be contacted",
    },
    {
      icon: PersonAddOutlined,
      title: "Add Supervisee",
      link: "/wip",
      detail: "Add members that will be receiving care and paid by you",
    },
    {
      icon: Tune,
      title: "Global preferences",
      link: "/account/preferences",
      detail: "Default language, currency, and time zone",
    },
  ]

  return (
    <div className="account">
      <div className="account-wrapper">
        <div className="account-header-container">
          <h1>Account</h1>
          <h3>
            {/* Welcome {user.firstname} {user.lastname} */}
            Welcome Test User
          </h3>
        </div>
        <div className="account-options-container">
          {accountOptions.map((item, index) => (
            <div
              className="account-option"
              key={index}
              onClick={() => navigate(item.link)}
            >
              <div className="account-icon-container">
                <item.icon className="account-icon" />
              </div>
              <div className="account-title">{item.title}</div>
              <div className="account-detail">{item.detail}</div>
            </div>
          ))}
        </div>
        <div className="account-deactivation-container">
          <h3>Need to deactivate your account?</h3>
          <h3 className="account-deactivation-link">Take care of that now</h3>
        </div>
      </div>

      {/** Temporary - consider code splitting later */}
      <div className="account-wrapper-mobile">
        <div className="account-header-container">
          <h1>Account</h1>
          <div className="show-profile-container">
            <div className="profile-image-container" />
            <div className="profile-info-container">
              <span className="name">Test User</span>
              <span>Show Profile</span>
            </div>
            <ChevronRight className="arrow-icon" />
          </div>
        </div>
        <div className="account-options-container">
          {accountOptions.map((item, index) => (
            <div
              className="account-option"
              key={index}
              onClick={() => navigate(item.link)}
            >
              <div className="account-icon-container">
                <item.icon className="account-icon" />
              </div>
              <div className="account-title">{item.title}</div>
              <div className="account-detail">{item.detail}</div>
            </div>
          ))}
        </div>
        <div className="logout-button">Logout</div>
      </div>
    </div>
  )
}
