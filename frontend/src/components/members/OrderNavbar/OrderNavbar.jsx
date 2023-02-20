import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./orderNavbar.scss";

export const OrderNavbar = ({ active, setActive }) => {
  const navigate = useNavigate();
  return (
    <div className="order-navbar">
      <div className="account-directory">
        <h3
          className="account-header account-from-to"
          onClick={() => navigate("/account")}
        >
          Account
        </h3>
        <h3 className="account-header">&gt;</h3>
        <h3 className="account-header">Order &amp; payouts</h3>
      </div>
      <h3 className="profile-header">Order &amp; payouts</h3>
      <div className="order-tabs-container">
        <div
          className={`order-tab  ${active ? "order-tab-active" : ""}`}
          onClick={() => navigate("/account/orders")}
        >
          orders
        </div>
        <div
          className={`order-tab ${active ? "order-tab-active" : ""}`}
          onClick={() => navigate("/account/payouts")}
        >
          Payouts
        </div>
      </div>
    </div>
  );
};
