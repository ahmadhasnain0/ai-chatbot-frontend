'use client';

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { verifyToken } from "../services/authService";

export default function AuthGuard({ children, requireAuth = true }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function validate() {
      const token = localStorage.getItem("token");

      // -------------------------- 
      // 1️⃣ If on LOGIN PAGE & token exists → redirect to portal
      // -------------------------- 
      if (!requireAuth && token) {
        console.log("AuthGuard: Validating token for public page");
        setLoading(true);
        try {
          const res = await verifyToken();
          if (res.success) {
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
      if (requireAuth) {
        setLoading(true);
        if (!token) {
          router.replace("/");
          return;
        }

        try {
          const res = await verifyToken();
          if (res.success) {
            setLoading(false);
          } else {
            router.replace("/");
          }
        } catch {
          router.replace("/");
        }
        return;
      }

      // Default for public pages (non-protected)
      setLoading(false);
    }

    validate();
  }, [pathname, requireAuth, router]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  return children;
}