"use client";

import { ArrowRight, GraduationCap } from "lucide-react";

const programmes = [
  {
    image: "https://images.unsplash.com/photo-1653539465770-2d7120d830bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya2luZ3xlbnwxfHx8fDE3NjM0NTY4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Engineering",
    title: "Engineering & Technology",
    description:
      "Shape the future with innovative engineering solutions. Our programs cover mechanical, electrical, civil, and software engineering.",
    programs: "25+ Programs",
    color: "primary-bg",
  },
  {
    image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBzdHVkZW50c3xlbnwxfHx8fDE3NjM0Mzk5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Business",
    title: "Business & Management",
    description:
      "Develop leadership skills and business acumen. Excel in finance, marketing, entrepreneurship, and international business.",
    programs: "20+ Programs",
    color: "primary-bg",
  },
  {
    image: "https://images.unsplash.com/photo-1758691462651-611d730c5272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjM0NTY4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Healthcare",
    title: "Health Sciences",
    description:
      "Make a difference in healthcare. Study medicine, nursing, pharmacy, and allied health sciences with hands-on clinical experience.",
    programs: "18+ Programs",
    color: "primary-bg",
  },
  {
    image: "https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NjM0NTY4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Technology",
    title: "Computer Science & IT",
    description:
      "Lead the digital revolution. Master artificial intelligence, cybersecurity, data science, and software development.",
    programs: "22+ Programs",
    color: "primary-bg",
  },
];

export function AcademicProgrammesSection() {
  return (
    <section className="py-20 bg-white overflow-hidden" id="addmisions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-100 text-blue-900 rounded-full mb-4">
            <span>Academic Excellence</span>
          </div>

          <h2 className="text-4xl md:text-5xl text-blue-900 mb-4">
            Ignite Your Path to a Fulfilling Career
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            with AHU's Top-Class Academic Programmes
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Choose from our diverse range of world-class programs designed to prepare you for leadership in your chosen field
          </p>
        </div>

        {/* Programme Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programmes.map((programme, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={programme.image}
                  alt={programme.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${programme.color} text-white rounded-lg shadow-lg`}
                >
                  {programme.category}
                </div>

                {/* Programs Count */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-900 rounded-lg shadow-lg">
                  {programme.programs}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl primary-text mb-3">{programme.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {programme.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 primary-text-link group/link transition-colors"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Bottom Gradient Border */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${programme.color}`}
              ></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 primary-color text-white rounded-lg  shadow-lg hover:shadow-xl"
          >
            View All Academic Programs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
