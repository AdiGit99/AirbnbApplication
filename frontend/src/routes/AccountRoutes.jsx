import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AccountFooter } from "../components/members/AccountFooter/AccountFooter";

import "./accountRoutes.scss";

export const AccountRoutes = () => {
  return (
    <div className="account-routes">
      {/* <div className="account-directory"></div> */}
      <div className="account-routes-container">
        <Outlet />
      </div>
      <AccountFooter />
    </div>
  );
};
