"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { verifyToken } from "../services/authService";
import StudentPortalSkeleton from "@/src/component/StudentPortalSkeleton";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const protectedRoutes = ["/student-portal", "/chatbot"];
  const publicRoutes = ["/"]; // login page

  const checkAuth = async () => {
    const token = localStorage.getItem("token");

    // --------------------------
    // 1️⃣ If on PUBLIC PAGE & token exists → redirect to portal
    // --------------------------
    if (publicRoutes.includes(pathname) && token) {
      setLoading(true);
      try {
        const res = await verifyToken();
        if (res.success) {
          setUser(res.user);
          router.replace("/student-portal");
          return; // stop further execution
        }
      } catch (e) {
        // if token invalid → allow staying on login page
      }
      setLoading(false);
      return;
    }

    // --------------------------
    // 2️⃣ Protected routes handling
    // --------------------------
    if (protectedRoutes.includes(pathname)) {
      setLoading(true);

      if (!token) {
        setUser(null);
        router.replace("/");
        return;
      }

      try {
        const res = await verifyToken();

        if (res.success) {
          setUser(res.user);
          setLoading(false);
        } else {
          setUser(null);
          router.replace("/");
        }
      } catch {
        setUser(null);
        router.replace("/");
      }

      return;
    }

    // Default for public pages (non-protected)
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, [pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.replace("/");
  };

if (loading) {
  return <StudentPortalSkeleton />;
}

  return (
    <AuthContext.Provider value={{ user, loading, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
