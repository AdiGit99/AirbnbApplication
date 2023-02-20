import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

import { CreditCard } from "@mui/icons-material"
import "./insights.scss"

export default function Insights() {
  const [selected, setSelected] = useState(null)
  const [active, setActive] = useState(false)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className="insights">
      <div className="insight-navbar">
        <div className="insight-tabs-container">
          <div
            className={`insight-tab  ${active ? "insight-tab-active" : ""}`}
            onClick={() => navigate("/account/insights")}
          >
            Opportunities
          </div>
          <div
            className={`insight-tab ${active ? "insight-tab-active" : ""}`}
            onClick={() => navigate("/account/payouts")}
          >
            Reviews
          </div>
          <div
            className={`insight-tab ${active ? "insight-tab-active" : ""}`}
            onClick={() => navigate("/account/payouts")}
          >
            Earnings
          </div>
          <div
            className={`insight-tab ${active ? "insight-tab-active" : ""}`}
            onClick={() => navigate("/account/payouts")}
          >
            Views
          </div>
          <div
            className={`insight-tab ${active ? "insight-tab-active" : ""}`}
            onClick={() => navigate("/account/payouts")}
          >
            Growth
          </div>
        </div>
      </div>
      <div className="insights-content-container">
        <div className="insights-content">
          <div className="insights-info-container">
            <h3 className="insight-section-header">Your insights</h3>
            <span className="insight-detail">
              Keep track of all your insights and refunds.
            </span>
            <div
              className="manage-insight-buttons"
              onClick={() => console.log("manage insights")}
            >
              Manage insights
            </div>
          </div>
          <div className="insights-info-container">
            <h3 className="insight-section-header">insight methods</h3>
            <span className="insight-detail">
              Add and manage your insight methods using our secure insight
              system.
            </span>
            <div className="insight-method-container"></div>
            <div
              className="manage-insight-buttons"
              onClick={() => console.log("add insight methods")}
            >
              Add insight method
            </div>
          </div>
        </div>
        <div className="insights-detail-container">
          <div className="insights-detail-icon-container">
            <CreditCard className="insights-detail-icon" />
          </div>
          <h3 className="insights-detail-title">
            Make all insights through Bamboos
          </h3>
          <p className="insights-detail-description">
            Always pay and communicate through Bamboos to ensure you're
            protected under our Terms of Service, insightsTerms of Service,
            cancellation, and other safeguards. Learn more
          </p>
        </div>
      </div>
    </div>
  )
}
