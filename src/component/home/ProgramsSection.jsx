import { BookOpen, FlaskConical, Briefcase, Palette } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Arts & Humanities",
    description: "Explore literature, history, philosophy, and languages that shape human culture.",
    courses: "45+ Programs"
  },
  {
    icon: FlaskConical,
    title: "Science & Technology",
    description: "Advance your career in engineering, computer science, and natural sciences.",
    courses: "60+ Programs"
  },
  {
    icon: Briefcase,
    title: "Business & Economics",
    description: "Develop leadership skills and business acumen for the global marketplace.",
    courses: "35+ Programs"
  },
  {
    icon: Palette,
    title: "Creative Arts",
    description: "Express yourself through visual arts, music, design, and performing arts.",
    courses: "25+ Programs"
  }
];

export function ProgramsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-blue-900 mb-4">Programs Offered</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of undergraduate and graduate programs designed to prepare you for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 primary-text" />
                </div>
                <h3 className="text-xl primary-text mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <p className="text-sm primary-text">{program.courses}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 view-btn transition-colors"
          >
            View All Programs
          </a>
        </div>
      </div>
    </section>
  );
}
