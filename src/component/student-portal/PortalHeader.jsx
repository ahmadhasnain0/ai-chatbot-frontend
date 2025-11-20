"use client";

import { User, Menu, Bell, LogOut } from "lucide-react";
import { useState } from "react";

export default function PortalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#00456A] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">MEC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-slate-900">Student Portal</h1>
              <p className="text-xs text-slate-500">Academic & IT Services</p>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {["Dashboard", "Services", "Resources", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg font-medium transition-colors hover:bg-slate-50"
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
                  <p className="text-sm font-semibold text-slate-900">John Student</p>
                  <p className="text-xs text-slate-500">ID: 20241234</p>
                </div>
                <div className="w-9 h-9 bg-[#00456A] rounded-full flex items-center justify-center shadow-md">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 border-b border-slate-200">
                  <p className="text-sm font-semibold text-slate-900">John Student</p>
                  <p className="text-xs text-slate-500">john@student.edu</p>
                </div>
                <a
                  href="#"
                  className="block px-4 py-2 text-slate-700 hover:bg-slate-50 text-sm"
                >
                  Profile Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-slate-700 hover:bg-slate-50 text-sm"
                >
                  Change Password
                </a>
                <button className="w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 text-sm border-t border-slate-200 flex items-center space-x-2">
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
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-md">
          <nav className="flex flex-col px-4 py-2 space-y-1">
            {["Dashboard", "Services", "Resources", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg font-medium transition-colors hover:bg-slate-50"
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
