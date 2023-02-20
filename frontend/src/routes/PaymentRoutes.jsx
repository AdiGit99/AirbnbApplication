import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PaymentNavbar } from "../components/members/PaymentNavbar/PaymentNavbar";

import "./paymentRoutes.scss";

export const PaymentRoutes = () => {
  return (
    <div className="payment-routes">
      <PaymentNavbar />
      <div className="payment-routes-container">
        <Outlet />
      </div>
    </div>
  );
};
