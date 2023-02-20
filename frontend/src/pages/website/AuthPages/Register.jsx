import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import "./register.scss";

export default function Register() {
  const [newUser, setNewUser] = useState({
    first: undefined,
    last: undefined,
    dob: undefined,
    phone: undefined,
    email: undefined,
    password: undefined,
  });

  return (
    <div className="register-container">
      <Outlet context={[newUser, setNewUser]} />
    </div>
  );
}
