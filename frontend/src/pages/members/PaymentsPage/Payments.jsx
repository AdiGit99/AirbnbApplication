import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"

import { CreditCard } from "@mui/icons-material"
import "./payments.scss"

export default function Payment() {
  const [selected, setSelected] = useState(null)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className="payments">
      <div className="payments-content-container">
        <div className="payments-content">
          <div className="payments-info-container">
            <h3 className="payment-section-header">Your payments</h3>
            <span className="payment-detail">
              Keep track of all your payments and refunds.
            </span>
            <div
              className="manage-payment-buttons"
              onClick={() => console.log("manage payments")}
            >
              Manage payments
            </div>
          </div>
          <div className="payments-info-container">
            <h3 className="payment-section-header">Payment methods</h3>
            <span className="payment-detail">
              Add and manage your payment methods using our secure payment
              system.
            </span>
            <div className="payment-method-container"></div>
            <div
              className="manage-payment-buttons"
              onClick={() => console.log("add payment methods")}
            >
              Add payment method
            </div>
          </div>
        </div>
        <div className="payments-detail-container">
          <div className="payments-detail-icon-container">
            <CreditCard className="payments-detail-icon" />
          </div>
          <h3 className="payments-detail-title">
            Make all payments through Bamboos
          </h3>
          <p className="payments-detail-description">
            Always pay and communicate through Bamboos to ensure you're
            protected under our Terms of Service, PaymentsTerms of Service,
            cancellation, and other safeguards. Learn more
          </p>
        </div>
      </div>
    </div>
  )
}
