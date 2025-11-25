"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { verifyToken } from "../services/authService";
import StudentPortalSkeleton from "@/src/component/StudentPortalSkeleton";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await verifyToken();
        if (res.success) {
          setUser(res.user);
        }
      } catch (err) {
        // token invalid → user stays null
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
