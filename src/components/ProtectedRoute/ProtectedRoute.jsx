import React from "react";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" />;
}
