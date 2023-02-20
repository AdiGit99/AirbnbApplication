import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./paymentNavbar.scss";

export const PaymentNavbar = ({ active, setActive }) => {
  const navigate = useNavigate();
  return (
    <div className="payment-navbar">
      <div className="account-directory">
        <h3
          className="account-header account-from-to"
          onClick={() => navigate("/account")}
        >
          Account
        </h3>
        <h3 className="account-header">&gt;</h3>
        <h3 className="account-header">Payment &amp; payouts</h3>
      </div>
      <h3 className="profile-header">Payment &amp; payouts</h3>
      <div className="payment-tabs-container">
        <div
          className={`payment-tab  ${active ? "payment-tab-active" : ""}`}
          onClick={() => navigate("/account/payments")}
        >
          Payments
        </div>
        <div
          className={`payment-tab ${active ? "payment-tab-active" : ""}`}
          onClick={() => navigate("/account/payouts")}
        >
          Payouts
        </div>
      </div>
    </div>
  );
};
