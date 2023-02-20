import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import axios from "axios"

import FormInput from "../../../components/website/Form/FormInput"
import { Lock, LockOpen, Visibility, ExpandMore } from "@mui/icons-material"

import "./personal.scss"

export default function Personal() {
  const { user } = useContext(AuthContext)
  const [selected, setSelected] = useState(null)
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    gender: user.gender,
    dob: user.dob,
    phone: user.phone,
    email: user.email,
  })

  useEffect(() => {
    if (!credentials.gender) {
      setVisible(true)
    }
  }, [])

  const handleNameChangeSubmit = async (e) => {
    e.preventDefault()
    const name = {
      firstname: credentials.firstname,
      lastname: credentials.lastname,
    }
    try {
      const res = await axios.put("/users/" + user._id, name)
      setSelected(null)
    } catch (err) {
      console.log(err)
    }
  }

  const handleGenderChangeSubmit = async (e) => {
    e.preventDefault()
    if (credentials.gender !== "Not specified") {
      try {
        const res = await axios.put("/users/" + user._id, credentials.gender)
        setSelected(null)
      } catch (err) {
        console.log(err)
      }
    }
  }
  const handleEmailChangeSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put("/users/" + user._id, credentials.email)
      setSelected(null)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value })
  }

  return (
    <div className="personal">
      <div className="personal-wrapper">
        <div className="account-directory">
          <h3
            className="account-header account-from-to"
            onClick={() => navigate("/account")}
          >
            Account
          </h3>
          <h3 className="account-header">&gt;</h3>
          <h3 className="account-header">Personal info</h3>
        </div>
        <h3 className="profile-header">Personal info</h3>
        <div className="personal-content-container">
          <div className="personal-content">
            <div
              className={`personal-info-container ${
                selected !== null && selected !== 0
                  ? "personal-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`personal-info-top ${
                  (selected !== null) & (selected !== 0)
                    ? "personal-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Legal name</h4>
                {selected === 0 ? (
                  <span onClick={() => setSelected(null)}>Cancel</span>
                ) : (
                  <span onClick={() => setSelected(0)}>Edit</span>
                )}
              </div>
              <div className="personal-info-bottom">
                {selected === 0 ? (
                  <div className="personal-info-edit">
                    <h3 className="name-detail">
                      This is your name on your travel document, which could be
                      a license or a passport.
                    </h3>
                    <div className="name-inputs-wrapper">
                      <div className="name-input-container">
                        <span className="name-input-label">First name</span>
                        <input
                          className="name-input"
                          type="text"
                          required
                          id="firstname"
                          defaultValue={credentials.firstname}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="name-input-container">
                        <span className="name-input-label">Last name</span>
                        <input
                          className="name-input"
                          type="text"
                          required
                          id="lastname"
                          defaultValue={credentials.lastname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div
                      className="personal-info-save-button"
                      onClick={handleNameChangeSubmit}
                    >
                      Save
                    </div>
                  </div>
                ) : (
                  <h3>
                    {credentials.firstname} {credentials.lastname}
                  </h3>
                )}
              </div>
            </div>
            <div
              className={`personal-info-container ${
                selected !== null && selected !== 1
                  ? "personal-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`personal-info-top ${
                  (selected !== null) & (selected !== 1)
                    ? "personal-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Gender</h4>
                {selected === 1 ? (
                  <span onClick={() => setSelected(null)}>Cancel</span>
                ) : (
                  <span onClick={() => setSelected(1)}>Edit</span>
                )}
              </div>
              <div className="personal-info-bottom">
                {selected === 1 ? (
                  <div className="personal-info-edit">
                    <div className="gender-input-container">
                      <div className="gender-input-label-container">
                        {/* <span
                          className={`gender-input-floating-label ${
                            visible ? "gender-input-floating-label-active" : ""
                          }`}
                        >
                          Gender
                        </span> */}
                        <div className="gender-arrow-container">
                          <ExpandMore className="gender-arrow" />
                        </div>
                      </div>
                      <select
                        name="gender"
                        id="gender"
                        value={
                          credentials.gender
                            ? credentials.gender
                            : "Not specified"
                        }
                        onChange={handleChange}
                      >
                        <option value="">Not specified</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div
                      className="personal-info-save-button"
                      onClick={handleGenderChangeSubmit}
                    >
                      Save
                    </div>
                  </div>
                ) : (
                  <h3>{user.gender ? "temp" : "Not specified"}</h3>
                )}
              </div>
            </div>
            <div
              className={`personal-info-container personal-info-container-disabled ${
                selected !== null && selected !== 2
                  ? "personal-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`personal-info-top personal-info-top-disabled ${
                  (selected !== null) & (selected !== 2)
                    ? "personal-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Date of Birth</h4>
                {selected === 2 ? (
                  <span onClick={() => setSelected(null)}>Cancel</span>
                ) : (
                  <span onClick={() => setSelected(2)}>Edit</span>
                )}
              </div>
              <div className="personal-info-bottom">
                {selected === 2 ? (
                  <div className="personal-info-edit">
                    <div className="personal-input-container">
                      Unchangeable for now
                    </div>
                    <div className="personal-info-save-button">Save</div>
                  </div>
                ) : (
                  <h3>**/**/****</h3>
                )}
              </div>
            </div>
            <div
              className={`personal-info-container ${
                selected !== null && selected !== 3
                  ? "personal-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`personal-info-top ${
                  (selected !== null) & (selected !== 3)
                    ? "personal-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Email address</h4>
                {selected === 3 ? (
                  <span onClick={() => setSelected(null)}>Cancel</span>
                ) : (
                  <span onClick={() => setSelected(3)}>Edit</span>
                )}
              </div>
              <div className="personal-info-bottom">
                {selected === 3 ? (
                  <div className="personal-info-edit">
                    <h3 className="email-detail">
                      Use an address you'll always have access to
                    </h3>
                    <div className="email-input-container">
                      <FormInput
                        name="Email"
                        label="Email"
                        type="email"
                        required
                        id="email"
                        className="form-input"
                        defaultValue={credentials.email}
                        placeholder=""
                        onChange={handleChange}
                        errorMessage="Email is invalid."
                        formText=" "
                      />
                    </div>
                    <div
                      className="personal-info-save-button"
                      onClick={handleEmailChangeSubmit}
                    >
                      Save
                    </div>
                  </div>
                ) : (
                  <h3>{user.email}</h3>
                )}
              </div>
            </div>
            <div
              className={`personal-info-container ${
                selected !== null && selected !== 4
                  ? "personal-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`personal-info-top ${
                  (selected !== null) & (selected !== 4)
                    ? "personal-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Phone number</h4>
                {selected === 4 ? (
                  <span onClick={() => setSelected(null)}>Cancel</span>
                ) : (
                  <span onClick={() => setSelected(4)}>Edit</span>
                )}
              </div>
              <div className="personal-info-bottom">
                {selected === 4 ? (
                  <div className="personal-info-edit">
                    <div className="email-input-container">temp</div>
                    <div className="personal-info-save-button">Save</div>
                  </div>
                ) : (
                  <>
                    <h3>{user.phone}</h3>
                    <h3 className="phone-detail">
                      Contact number (for confirmed clients and Bamboos to get
                      in touch). You can add other numbers and choose how
                      they're used.
                    </h3>
                  </>
                )}
              </div>
            </div>
            <div
              className={`personal-info-container ${
                selected !== null && selected !== 5
                  ? "personal-info-container-disabled"
                  : ""
              }`}
            >
              <div
                className={`personal-info-top ${
                  (selected !== null) & (selected !== 5)
                    ? "personal-info-top-disabled"
                    : ""
                }`}
              >
                <h4>Government ID</h4>
                <span onClick={() => console.log("remove")}>Remove</span>
              </div>
              <div className="personal-info-bottom">
                <h3>Temporary provided</h3>
              </div>
            </div>
          </div>
          <div className="personal-detail-container">
            <div className="personal-detail top-container">
              <div className="personal-detail-icon-container">
                <Lock className="personal-detail-icon" />
              </div>
              <h3 className="personal-detail-title">
                Why isn't my info shown here?
              </h3>
              <p className="personal-detail-description">
                We're hiding some account details to protect your identity.
              </p>
            </div>
            <div className="personal-detail middle-container">
              <div className="personal-detail-icon-container">
                <LockOpen className="personal-detail-icon" />
              </div>
              <h3 className="personal-detail-title">
                Which details can be edited?
              </h3>
              <p className="personal-detail-description">
                Details Bamboos uses to verify your identity can't be changed.
                Contact info and some personal details can be edited, but we may
                ask you to verify your identity the next time you book or create
                a listing
              </p>
            </div>
            <div className="personal-detail bottom-container">
              <div className="personal-detail-icon-container">
                <Visibility className="personal-detail-icon" />
              </div>
              <h3 className="personal-detail-title">
                What info is shared with others?
              </h3>
              <p className="personal-detail-description">
                Airbnb only releases contact information for Healthcare
                providers and clients after an appointment is confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
