"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // <-- Import Link from Next.js
import { verifyToken } from "@/src/services/authService";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const handleStudentPortalClick = async () => {
    try {
      const isValid = await verifyToken();
      if (isValid?.success) {
        router.push("/student-portal");
        return;
      }
      router.push("/");
    } catch (err) {
      router.push("/");
    }
  };


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and University Name */}
          <Link href="/home" >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 primary-color  rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">AH</span>
              </div>
              <div className="flex flex-col">
                <span className="primary-text tracking-tight">
                  Atlas Heights University
                </span>
                <span className="text-sm text-gray-600">Excellence in Education</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/home" className="primary-text-link">
              Home
            </Link>
            <Link href="/home#about" className="primary-text-link">
              About
            </Link>
            <Link href="/home#addmisions" className="primary-text-link">
              Admissions
            </Link>
            <Link href="/home#contactus" className="primary-text-link">
              Contact
            </Link>
            <button
              onClick={handleStudentPortalClick}
              className="px-4 py-2 primary-color text-white rounded-lg text-center cursor-pointer"
            >
              Student Portal
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 absolute bg-white w-full px-10 left-0">
            <Link href="/home" className="primary-text-link">
              Home
            </Link>
            <Link href="/home#about" className="primary-text-link">
              About
            </Link>
            <Link href="/home#addmisions" className="primary-text-link">
              Admissions
            </Link>
            <Link href="/home#contactus" className="primary-text-link">
              Contact
            </Link>
            <button
              onClick={handleStudentPortalClick}
              className="px-4 py-2 primary-color text-white rounded-lg transition-colors text-center cursor-pointer"
            >
              Student Portal
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
