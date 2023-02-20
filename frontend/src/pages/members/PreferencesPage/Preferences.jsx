import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

import { Tune } from "@mui/icons-material"
import "./preferences.scss"

export default function Preferences() {
  const [selected, setSelected] = useState(null)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className="preferences">
      <div className="preferences-wrapper">
        <div className="account-directory">
          <h3
            className="account-header account-from-to"
            onClick={() => navigate("/account")}
          >
            Account
          </h3>
          <h3 className="account-header">&gt;</h3>
          <h3 className="account-header account-from-to">Global preferences</h3>
        </div>
        <h3 className="profile-header">Global preferences</h3>
        <div className="preferences-content-container">
          <div className="preferences-content">
            <div
              className={`preferences-info-container ${
                selected !== null && selected !== 0
                  ? "preferences-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`preferences-info-top preferences-info-top-disabled${
                  selected !== null && selected !== 0
                    ? "preferences-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Preferred language</h4>
                {selected === 0 ? (
                  <span onClick={() => setSelected(null)}>Cancel</span>
                ) : (
                  <span onClick={() => setSelected(0)}>Edit</span>
                )}
              </div>
              <div className="preferences-info-bottom">
                {selected === 0 ? (
                  <div className="preferences-info-edit">
                    <div className="password-input-container">
                      Change to dropdown select
                    </div>
                    <div className="preferences-info-save-button">Save</div>
                  </div>
                ) : (
                  <h3>English</h3>
                )}
              </div>
            </div>
            <div
              className={`preferences-info-container ${
                selected !== null && selected !== 1
                  ? "preferences-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`preferences-info-top preferences-info-top-disabled${
                  selected !== null && selected !== 1
                    ? "preferences-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Preferred currency</h4>
                {selected === 1 ? (
                  <span onClick={() => setSelected(null)}>Cancel</span>
                ) : (
                  <span onClick={() => setSelected(1)}>Edit</span>
                )}
              </div>
              <div className="preferences-info-bottom">
                {selected === 1 ? (
                  <div className="preferences-info-edit">
                    <div className="password-input-container">
                      Change to dropdown select
                    </div>
                    <div className="preferences-info-save-button">Save</div>
                  </div>
                ) : (
                  <h3>United States dollar</h3>
                )}
              </div>
            </div>
            <div
              className={`preferences-info-container ${
                selected !== null && selected !== 2
                  ? "preferences-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`preferences-info-top preferences-info-top-disabled ${
                  selected !== null && selected !== 2
                    ? "preferences-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Time zone</h4>
                {selected === 2 ? (
                  <span onClick={() => setSelected(null)}>Cancel</span>
                ) : (
                  <span onClick={() => setSelected(2)}>Edit</span>
                )}
              </div>
              <div className="preferences-info-bottom">
                {selected === 2 ? (
                  <div className="preferences-info-edit">
                    <div className="password-input-container">
                      Change to dropdown select
                    </div>
                    <div className="preferences-info-save-button">Save</div>
                  </div>
                ) : (
                  <h3>User preferred time zone</h3>
                )}
              </div>
            </div>
          </div>
          <div className="preferences-detail-container">
            <div className="preferences-detail-icon-container">
              <Tune className="preferences-detail-icon" />
            </div>
            <h3 className="preferences-detail-title">
              Your global preferences
            </h3>
            <p className="preferences-detail-description">
              Changing your currency updates how you see prices. You can change
              how you get payments in your payments and payouts preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
