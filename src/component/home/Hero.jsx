"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1631599143424-5bc234fbebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNjMxNTk5MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="University Campus"
          className="w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0077B6]/60 to-[#0077B6]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          Shape Your Future
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join Atlas Heights University and become part of a community dedicated to
          academic excellence, innovation, and leadership.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
