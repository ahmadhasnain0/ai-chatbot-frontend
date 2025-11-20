
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const news = [
  {
    image: "https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc2MzM5NDY0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Research",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "Breakthrough in Renewable Energy Research",
    description:
      "AHU scientists develop innovative solar cell technology achieving a remarkable 45% efficiency rate, setting new industry standards for sustainable energy solutions.",
    author: "Dr. Sarah Mitchell",
    date: "November 15, 2025",
    readTime: "5 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1762075314731-10fa03d2727a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcmVzZWFyY2glMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzQ1NzQ1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Technology",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "AHU Launches Advanced AI Research Center",
    description:
      "New state-of-the-art facility will focus on artificial intelligence, machine learning, and ethical AI development with partnerships from leading tech companies.",
    author: "Prof. James Chen",
    date: "November 12, 2025",
    readTime: "4 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvbmZlcmVuY2UlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzYzMzcwOTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Academic",
    categoryColor: "bg-green-100 text-green-700",
    title: "International Research Symposium 2025",
    description:
      "Over 500 scholars from 40 countries gathered to present groundbreaking research and foster global academic collaboration at AHU's annual symposium.",
    author: "Dr. Emily Rodriguez",
    date: "November 8, 2025",
    readTime: "6 min read",
  },
];

export function NewsEventsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl text-blue-900 mb-2">Latest News</h2>
            <p className="text-gray-600">
              Stay informed about the latest developments and achievements at AHU
            </p>
          </div>

          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 primary-color text-white rounded-lg  transition-colors"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div
                  className={`absolute top-4 left-4 px-3 py-1 ${item.categoryColor} rounded-full backdrop-blur-sm`}
                >
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl text-blue-900 mb-3 group-hover:text-[#0092e0] transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span className="truncate">{item.author}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {item.readTime}
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 primary-text-link mt-4 group/link"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="md:hidden text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 primary-color text-white rounded-lg"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
