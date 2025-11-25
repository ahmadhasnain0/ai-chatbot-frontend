'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { verifyToken } from "../services/authService";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function validate() {
      try {
        await verifyToken();
        setChecking(false);
      } catch (err) {
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
