import { GraduationCap, Users, BookOpen, Award } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    number: "25,000+",
    label: "Students Enrolled"
  },
  {
    icon: Users,
    number: "1,200+",
    label: "Faculty Members"
  },
  {
    icon: BookOpen,
    number: "165+",
    label: "Academic Programs"
  },
  {
    icon: Award,
    number: "50+",
    label: "Years of Excellence"
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-[#00456a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
