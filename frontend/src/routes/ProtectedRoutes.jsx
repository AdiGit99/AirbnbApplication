import { Navigate, Outlet, useLocation } from "react-router-dom"

import TopbarProvider from "../components/providers/TopbarProvider/TopbarProvider"
import TopbarGeneral from "../components/members/TopbarGeneral/TopbarGeneral"
import BottomNav from "../components/members/BottomNav"

import "./protectedRoutes.scss"

export const ProtectedRoutesGeneral = ({ user }) => {
  return user ? (
    <div className="protected-general">
      <TopbarGeneral />
      <div className="protected-general-container">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  ) : (
    <Navigate to="/login" />
  )
}

export const ProtectedRoutesProvider = ({ user }) => {
  //and user must have signed up for being heatlhcare provider
  return user ? (
    <div className="protected-provider">
      <TopbarProvider />
      <div className="protected-provider-container">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}
