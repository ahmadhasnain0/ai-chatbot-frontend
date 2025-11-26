"use client";

import { useAuth } from "@/src/context/AuthContext";
import { logoutUser } from "@/src/services/authService";
import { User, Menu, Bell, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";


export default function PortalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { user, loading, logout: contextLogout } = useAuth();
  console.log("Authenticated user in PortalHeader:", user);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();

      if (response.success) {
        router.push("/");
        contextLogout(); // Clear context
      }
    } catch (error) {
      console.error("Logout error:", error);
      // Force logout even if API call fails
      contextLogout();
      router.push("/");
    }
  };

  // Get user initials for avatar
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Show loading skeleton while fetching user
  if (loading) {
    return (
      <header className="bg-white shadow-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#00456A] rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">MEC</span>
              </div>
              <div className="hidden sm:block">
                <div className="w-32 h-4 bg-slate-200 rounded animate-pulse mb-2"></div>
                <div className="w-24 h-3 bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="w-24 h-8 bg-slate-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo and Title */}
          <Link href="/home" >

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 primary-color  rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">AH</span>
              </div>
              <div className="hidden sm:block">
                <div className="flex flex-col ">
                  <span className="primary-text tracking-tight">
                    Atlas Heights University
                  </span>
                  <span className="text-sm text-gray-600">Excellence in Education</span>
                </div>
              </div>

            </div>
          </Link>
          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {["Dashboard", "Services", "Resources", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="primary-text-link  px-3 py-2 rounded-lg font-medium transition-colors hover:bg-slate-50"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Notifications, Profile & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Notification */}
            <button className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-3 pl-4 border-l border-slate-200 cursor-pointer">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-slate-900">
                    {user?.name || "Guest User"}
                  </p>
                  <p className="text-xs text-slate-500">
                    {user?.email || "No email"}
                  </p>
                </div>
                <div className="w-9 h-9 bg-[#00456A] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-sm font-semibold">
                    {getInitials(user?.name)}
                  </span>
                </div>
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="p-4 border-b border-slate-200">
                  <p className="text-sm font-semibold text-slate-900">
                    {user?.name || "Guest User"}
                  </p>
                  <p className="text-xs text-slate-500 break-all">
                    {user?.email || "No email"}
                  </p>
                  {user?.role && (
                    <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded capitalize">
                      {user.role}
                    </span>
                  )}
                </div>

                <a href="#"
                  className="block px-4 py-2 text-slate-700 hover:bg-slate-50 text-sm"
                >
                  Profile Settings
                </a>

                <a href="#"
                  className="block px-4 py-2 text-slate-700 hover:bg-slate-50 text-sm"
                >
                  Change Password
                </a>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 text-sm border-t border-slate-200 flex items-center space-x-2 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>

              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-200 shadow-md absolute bg-white w-full px-10 left-0">
          <nav className="flex flex-col px-4 py-2 space-y-1">
            {["Dashboard", "Services", "Resources", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="primary-text-link  px-3 py-2 rounded-lg font-medium transition-colors hover:bg-slate-50"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
