import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

import { VerifiedUser } from "@mui/icons-material"
import "./security.scss"

export default function Security() {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const [editActive, setEditActive] = useState(false)

  return (
    <div className="security">
      <div className="security-wrapper">
        <div className="account-directory">
          <h3
            className="account-header account-from-to"
            onClick={() => navigate("/account")}
          >
            Account
          </h3>
          <h3 className="account-header">&gt;</h3>
          <h3 className="account-header account-from-to">
            Login &amp; Security
          </h3>
        </div>
        <h3 className="profile-header">Login and Security</h3>
        <div className="security-content-container">
          <div className="security-content">
            <h3 className="section-header">Login</h3>
            <div className="security-info-container">
              <div className="security-info-top">
                <h4>Password</h4>
                {editActive ? (
                  <span onClick={() => setEditActive(false)}>Cancel</span>
                ) : (
                  <span onClick={() => setEditActive(true)}>Update</span>
                )}
              </div>
              <div className="security-info-bottom">
                {editActive ? (
                  <div className="security-info-edit">
                    <span className="password-input-title">
                      Current password
                    </span>
                    <div className="password-input-container">
                      <input
                        className="password-input"
                        type="password"
                        required
                        // id="email"
                        placeholder=""
                        // onChange={handleChange}
                      />
                    </div>
                    <span className="password-input-title">New password</span>
                    <div className="password-input-container">
                      <input
                        className="password-input"
                        type="password"
                        required
                        // id="email"
                        placeholder=""
                        // onChange={handleChange}
                      />
                    </div>
                    <span className="password-input-title">
                      Confirm password
                    </span>
                    <div className="password-input-container">
                      <input
                        className="password-input"
                        type="password"
                        required
                        // id="email"
                        placeholder=""
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="security-info-save-button">
                      Update password
                    </div>
                  </div>
                ) : (
                  <h3>Last updated 4 months ago</h3>
                )}
              </div>
            </div>
            <h3 className="section-header">Social accounts</h3>
            <div className="security-info-container">
              <div className="security-info-top">
                <h4>Facebook</h4>
                <span onClick={() => console.log("Link to socials later")}>
                  Connect
                </span>
              </div>
              <div className="security-info-bottom">
                <h3>Not connected</h3>
              </div>
            </div>
            <div className="security-info-container">
              <div className="security-info-top">
                <h4>Google</h4>
                <span onClick={() => console.log("Link to socials later")}>
                  Connect
                </span>
              </div>
              <div className="security-info-bottom">
                <h3>Not connected</h3>
              </div>
            </div>
            <h3 className="section-header">Account</h3>
            <div className="security-info-container">
              <div className="security-info-top">
                <h4>Deactivate your account</h4>
                <span onClick={() => console.log("Link to socials later")}>
                  Deactivate
                </span>
              </div>
            </div>
          </div>
          <div className="security-detail-container">
            <div className="security-detail-icon-container">
              <VerifiedUser className="security-detail-icon" />
            </div>
            <h3 className="security-detail-title">
              Let's make your account more secure
            </h3>
            <h3 className="security-detail-severity">Medium</h3>
            <p className="security-detail-description">
              We're always workin on ways to increase safety in our community.
              That's why we look at every account to make sure it's as secure as
              possible.
            </p>
            {/* <div className="security-improve-button">Improve</div> */}
            <div classname="security-improve-learn">
              Learn about safety tips for clients and healthcare providers
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
