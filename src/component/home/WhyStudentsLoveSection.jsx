import { GraduationCap, Award, Users, Briefcase, Globe2, Sparkles, BookOpen, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Academic Excellence",
    description: "Ranked among top universities with world-class faculty and cutting-edge curriculum"
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from industry leaders and renowned professors with extensive real-world experience"
  },
  {
    icon: Briefcase,
    title: "Career Success",
    description: "95% employment rate within 6 months of graduation with top companies"
  },
  {
    icon: Globe2,
    title: "Global Network",
    description: "International partnerships and exchange programs across 50+ countries"
  },
  {
    icon: Sparkles,
    title: "Modern Facilities",
    description: "State-of-the-art labs, libraries, and learning spaces equipped with latest technology"
  },
  {
    icon: BookOpen,
    title: "Diverse Programs",
    description: "165+ programs across multiple disciplines to match your passion and career goals"
  },
  {
    icon: TrendingUp,
    title: "Industry Connections",
    description: "Strong ties with leading companies ensuring internships and job placements"
  },
  {
    icon: GraduationCap,
    title: "Student Support",
    description: "Comprehensive support services including mentoring, counseling, and career guidance"
  }
];

export function WhyStudentsLoveSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-100 text-blue-900 rounded-full mb-4">
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-blue-900 mb-4">
            Top Reasons Why Students Love AHU
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes Atlas Heights University the perfect place to pursue your academic dreams and build a successful future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 primary-bg rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-blue-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-4 primary-color text-white rounded-lg shadow-lg hover:shadow-xl"
          >
            Discover More About AHU
          </a>
        </div>
      </div>
    </section>
  );
}