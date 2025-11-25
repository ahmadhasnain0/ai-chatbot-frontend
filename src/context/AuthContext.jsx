"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
import { verifyToken } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  axios.defaults.withCredentials = true;

  const protectedRoutes = [
    "/student-portal",
    "/chatbot",
  ];

  const checkAuth = async () => {
    try {
      const res = await verifyToken();

      if (res.success) {
        setUser(res.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only verify if route requires authentication
    if (protectedRoutes.includes(pathname)) {
      checkAuth();
    } else {
      setLoading(false); // Avoid loading spinner on public pages
    }
  }, [pathname]);

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loading, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
