import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { OrderNavbar } from "../components/members/OrderNavbar/OrderNavbar";

import "./orderRoutes.scss";

export const OrderRoutes = () => {
  return (
    <div className="order-routes">
      <OrderNavbar />
      <div className="order-routes-container">
        <Outlet />
      </div>
    </div>
  );
};
