import React, { useEffect, useState, useContext } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom"

//website
import Home from "./pages/website/HomePage/Home"
import Nurse from "./pages/website/NursePage/Nurse"
import Client from "./pages/website/ClientPage/Client"
import Rates from "./pages/website/RatesPage/Rates"
import Error from "./pages/website/ErrorPage/Error"
import About from "./pages/website/AboutPage/About"
import Investors from "./pages/website/InvestorsPage/Investors"
import Careers from "./pages/website/CareersPage/Careers"
import Contact from "./pages/website/ContactPage/Contact"
import Wip from "./pages/website/WIPPage/Wip"

//members
import Messages from "./pages/members/MessagesPage/Messages"
import Account from "./pages/members/AccountPage/Account"
import Notifications from "./pages/members/NotificationsPage/Notifications"
import Personal from "./pages/members/PersonalPage/Personal"
import Payments from "./pages/members/PaymentsPage/Payments"
import Payouts from "./pages/members/PayoutsPage/Payouts"
import Security from "./pages/members/SecurityPage/Security"
import Preferences from "./pages/members/PreferencesPage/Preferences"
import Appointments from "./pages/members/AppointmentsPage/Appointments"

//client
import Today from "./pages/providers/TodayPage/Today"
import Inbox from "./pages/providers/InboxPage/Inbox"
import Schedule from "./pages/providers/SchedulePage/Schedule"
import Insights from "./pages/providers/InsightsPage/Insights"
import Profile from "./pages/providers/ProfilePage/Profile"
import Register from "./pages/website/AuthPages/Register"
import RegisterOne from "./pages/website/RegisterPages/RegisterOne"
import RegisterTwo from "./pages/website/RegisterPages/RegisterTwo"
import RegisterThree from "./pages/website/RegisterPages/RegisterThree"

import { AuthContext } from "./context/AuthContext"
import {
  ProtectedRoutesGeneral,
  ProtectedRoutesProvider,
} from "./routes/ProtectedRoutes"
import { AccountRoutes } from "./routes/AccountRoutes"
import { PaymentRoutes } from "./routes/PaymentRoutes"
import { OrderRoutes } from "./routes/OrderRoutes"
import { WithNav, WithoutNav } from "./routes/Layout"

import "./App.css"

function App() {
  // const { user } = useContext(AuthContext);
  const user = true
  return (
    <Router>
      <Routes>
        <Route element={<WithNav user={user} />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/nurse" element={<Nurse />} />
          <Route path="/client" element={<Client />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/about" element={<About />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<WithoutNav user={user} />}>
          <Route element={<Register />}>
            <Route path="/registerOne" element={<RegisterOne />} />
            <Route path="/registerTwo" element={<RegisterTwo />} />
            <Route path="/registerThree" element={<RegisterThree />} />
          </Route>
          <Route element={<ProtectedRoutesGeneral user={user} />}>
            <Route path="/messages" element={<Messages />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route element={<AccountRoutes />}>
              <Route path="/account" element={<Account />} />
              <Route path="/account/personal-info" element={<Personal />} />
              <Route
                path="/account/login-and-security"
                element={<Security />}
              />
              <Route element={<PaymentRoutes />}>
                <Route path="/account/payments" element={<Payments />} />
                <Route path="/account/payouts" element={<Payouts />} />
              </Route>
              <Route
                path="/account/notifications"
                element={<Notifications />}
              />
              {/* <Route path="/account/personal-info" element={<AddSupervisee />} /> */}
              <Route path="/account/preferences" element={<Preferences />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoutesProvider user={user} />}>
            <Route path="/provider" element={<Today />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/provider/inbox" element={<Inbox />} />
            <Route path="/provider/schedule" element={<Schedule />} />
            <Route path="/provider/insights" element={<Insights />} />
          </Route>
          <Route path="/wip" element={<Wip />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
