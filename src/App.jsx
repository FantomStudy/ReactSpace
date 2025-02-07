import "./App.css";
import { Route, Routes } from "react-router";
import RegistrationPage from "./pages/auth/RegistrationPage";
import LoginPage from "./pages/auth/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import GagarinPage from "./pages/GagarinPage/GagarinPage";
import LunarMissionPage from "./pages/lunar_missions/LunarMissionPage/LunarMissionPage";
import CreateMissionPage from "./pages/lunar_missions/CreateMissionPage/CreateMissionPage";

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
        <Route
          path="/lunar-missions"
          element={
            <ProtectedRoute>
              <LunarMissionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lunar-missions-create"
          element={
            <ProtectedRoute>
              <CreateMissionPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
