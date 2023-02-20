import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import "./notifications.scss";

export default function Notifications() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="personal">
      <div className="personal-wrapper">
        <div className="account-directory">
          <h3
            className="account-header account-from-to"
            onClick={navigate("/account")}
          >
            Account
          </h3>
          <h3 className="account-header">&gt;</h3>
          <h3 className="account-header account-from-to">
            Payments &amp; Payouts
          </h3>
        </div>
        <div className="personal-content-container">
          <div className="personal-content">
            <h3>Payment &amp; payouts</h3>
            <div>Switeroo tab</div>
            <div className="box-1">
              <h3>How you'll get paid</h3>
              <h4>
                Add at least one payout method so we know where to send your
                money
              </h4>
              <div
                className="manage-payments-button"
                onClick={() => console.log("payments management")}
              >
                Set up payouts
              </div>
            </div>
          </div>
          <div className="security-detail-container">
            <h3>Need help?</h3>
            <div className="help-1" onClick={() => console.log("navigate")}>
              <h3>When you'll get your payout</h3>
              <span>&gt;</span>
            </div>
            <div className="help-2" onClick={() => console.log("navigate")}>
              <h3>How payouts work</h3>
              <span>&gt;</span>
            </div>
            <div className="help-3" onClick={() => console.log("navigate")}>
              <h3>Go to your transaction history</h3>
              <span>&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
