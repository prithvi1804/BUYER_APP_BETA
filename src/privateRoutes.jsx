import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./utils/validateToken";

export default function PrivateRoute({ children }) {
  return isLoggedIn() ? children : <Navigate to="/" replace />;
}
