"use client";

import { Users, Trophy, Globe, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Organizations",
    description: "Join 150+ clubs and organizations"
  },
  {
    icon: Trophy,
    title: "Athletics",
    description: "Compete in 20+ varsity sports"
  },
  {
    icon: Globe,
    title: "Study Abroad",
    description: "Programs in 40+ countries"
  },
  {
    icon: Heart,
    title: "Community Service",
    description: "Make a difference locally and globally"
  }
];

export function CampusLifeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl text-blue-900 mb-6">Campus Life</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Atlas Heights University, education extends far beyond the classroom. 
              Our vibrant campus community offers countless opportunities for personal 
              growth, leadership development, and lifelong friendships.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 primary-text" />
                    </div>
                    <div>
                      <h3 className="primary-text mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#"
              className="inline-block mt-8 px-8 py-3 primary-color text-white rounded-lg "
            >
              Explore Campus Life
            </a>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1752920299211-28be8c9b0121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NjMzODMxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students studying"
                className="rounded-lg w-full h-64 object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1623461487986-9400110de28e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNjIzNDYxNDg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Graduation"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>

            <div className="pt-8">
              <img
                src="https://images.unsplash.com/photo-1726390415698-3c60d6b16c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwb3V0ZG9vcnxlbnwxfHx8fDE3MjYzOTA0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Campus outdoor"
                className="rounded-lg w-full h-80 object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
