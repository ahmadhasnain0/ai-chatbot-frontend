"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { verifyToken } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const protectedRoutes = [
    "/student-portal",
    "/chatbot",
  ];

  const checkAuth = async () => {
    const token = localStorage.getItem("token");

    // -----------------------------
    // If no token → redirect to home
    // -----------------------------
    if (!token) {
      setUser(null);
      setLoading(false);
      router.push("/");  // ⬅️ redirect immediately
      return;
    }

    try {
      const res = await verifyToken();

      if (res.success) {
        setUser(res.user);
      } else {
        setUser(null);
        router.push("/"); // ⬅️ redirect if token invalid
      }
    } catch (err) {
      setUser(null);
      router.push("/"); // ⬅️ redirect on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (protectedRoutes.includes(pathname)) {
      setLoading(true);
      checkAuth();
    } else {
      setLoading(false);
    }
  }, [pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/"); // redirect on logout
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, checkAuth }}>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <p>Loading...</p>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
