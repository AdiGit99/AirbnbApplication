import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

import { Person, VerifiedUser, Done } from "@mui/icons-material"
import "./profile.scss"
import { AccountFooter } from "../../../components/members/AccountFooter/AccountFooter"

export default function Profile() {
  const [selected, setSelected] = useState(null)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className="profile">
      <div className="profile-wrapper">
        <div className="profile-content-container">
          <div className="profile-detail-container">
            <div className="profile-detail-icon-container">
              <Person className="profile-detail-icon" />
            </div>
            <div className="profile-verified-icon-container">
              <VerifiedUser className="profile-verified-icon" />
              Identity verified
            </div>
            <h3 className="profile-detail-title">{user.firstname} confirmed</h3>
            <div className="profile-verified-container">
              <Done className="profile-done-container" />
              Identity
            </div>
            <div className="profile-verified-container">
              <Done className="profile-done-container" />
              Email address
            </div>
            <div className="profile-verified-container">
              <Done className="profile-done-container" />
              Phone number
            </div>
            <p className="profile-detail-description">
              Learn more about how confirming your account info helps keep the
              Bamboos community secure
            </p>
          </div>
          <div className="profile-content">
            <h3 className="profile-header">Hi, I'm {user.firstname}</h3>
            <h3 className="profile-date">Joined in 2019</h3>
            <div
              className={`profile-info-container ${
                selected !== null && selected !== 0
                  ? "profile-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`profile-info-top profile-info-top-disabled${
                  selected !== null && selected !== 0
                    ? "profile-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Gender</h4>
                {selected === 0 ? (
                  <span onClick={() => setSelected(null)}>Cancel</span>
                ) : (
                  <span onClick={() => setSelected(0)}>Edit</span>
                )}
              </div>
              <div className="profile-info-bottom">
                {selected === 0 ? (
                  <div className="profile-info-edit">
                    <div className="password-input-container">
                      Change to dropdown select
                    </div>
                    <div className="profile-info-save-button">Save</div>
                  </div>
                ) : (
                  <h3>Male</h3>
                )}
              </div>
            </div>
            <div
              className={`profile-info-container ${
                selected !== null && selected !== 1
                  ? "profile-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`profile-info-top profile-info-top-disabled${
                  selected !== null && selected !== 1
                    ? "profile-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Qualification</h4>
                {selected === 1 ? (
                  <span onClick={() => setSelected(null)}>Cancel</span>
                ) : (
                  <span onClick={() => setSelected(1)}>Edit</span>
                )}
              </div>
              <div className="profile-info-bottom">
                {selected === 1 ? (
                  <div className="profile-info-edit">
                    <div className="password-input-container">
                      Change to dropdown select
                    </div>
                    <div className="profile-info-save-button">Save</div>
                  </div>
                ) : (
                  <h3>Private Nurse</h3>
                )}
              </div>
            </div>
            <div
              className={`profile-info-container ${
                selected !== null && selected !== 2
                  ? "profile-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`profile-info-top profile-info-top-disabled ${
                  selected !== null && selected !== 2
                    ? "profile-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Main location</h4>
                {selected === 2 ? (
                  <span onClick={() => setSelected(null)}>Cancel</span>
                ) : (
                  <span onClick={() => setSelected(2)}>Edit</span>
                )}
              </div>
              <div className="profile-info-bottom">
                {selected === 2 ? (
                  <div className="profile-info-edit">
                    <div className="password-input-container">
                      Change to dropdown select
                    </div>
                    <div className="profile-info-save-button">Save</div>
                  </div>
                ) : (
                  <h3>Hong Kong Island</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AccountFooter />
    </div>
  )
}
