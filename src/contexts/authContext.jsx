import { createContext, useContext, useEffect, useState } from "react";
import { isAuthenticated } from "../API/requests";
import { Navigate } from "react-router";
import { logout } from "../API/requests";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(isAuthenticated());

  useEffect(() => {
    setIsAuth(isAuthenticated());
  }, []);

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = async () => {
    const response = await logout();
    localStorage.removeItem("token");
    setIsAuth(false);
    <Navigate to="/" />;
    return response;
  };

  return (
    <AuthContext.Provider value={{ isAuth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
