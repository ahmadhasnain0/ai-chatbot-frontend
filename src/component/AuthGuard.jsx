'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { verifyToken } from "../services/authService";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/");
      return;
    }

    async function validate() {
      try {
        await verifyToken(); // backend confirms token
        setChecking(false);
      } catch (err) {
        localStorage.removeItem("token");
        router.replace("/");
      }
    }

    validate();

  }, [router]);

  if (checking) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Authenticating...</p>
      </div>
    );
  }

  return children;
}
