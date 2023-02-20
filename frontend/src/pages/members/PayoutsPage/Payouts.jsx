import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import "./payouts.scss";

export default function Payouts() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="payouts">
      <div className="payouts-content-container">
        <div className="payouts-content">
          <div className="payouts-info-container">
            <h3 className="payment-section-header">How you'll get paid</h3>
            <span className="payment-detail">
              Add at least one payout method so we know where to send your money
            </span>
            <div
              className="manage-payment-buttons"
              onClick={() => console.log("manage payouts")}
            >
              Set up payouts
            </div>
          </div>
          {/* <div className="payouts-info-container">
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
          </div> */}
        </div>
        <div className="payouts-detail-container">
          <h3 className="payouts-detail-title">Need help?</h3>
          <div className="payouts-help-container">
            <span className="payouts-help-link">
              When you'll get your payout
            </span>
            <span className="payouts-arrow">&gt;</span>
          </div>
          <div className="payouts-help-container">
            <span className="payouts-help-link">How payouts work</span>
            <span className="payouts-arrow">&gt;</span>
          </div>
          <div className="payouts-help-container">
            <span className="payouts-help-link">
              Go to your trasaction history
            </span>
            <span className="payouts-arrow">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
