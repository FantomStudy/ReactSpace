import "./App.css";
import { Route, Routes } from "react-router";
import RegistrationPage from "./pages/auth_pages/RegistrationPage";
import LoginPage from "./pages/auth_pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import GagarinPage from "./pages/GagarinPage/GagarinPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <GagarinPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
