import { Bell, Calendar, FileText, AlertCircle } from "lucide-react";

const announcements = [
  {
    icon: Calendar,
    type: "Event",
    title: "Spring Semester Registration Opens",
    date: "December 1, 2025",
    color: "bg-blue-100 primary-text"
  },
  {
    icon: Bell,
    type: "Notice",
    title: "Campus Holiday Schedule Released",
    date: "November 20, 2025",
    color: "bg-blue-100 primary-text"
  },
  {
    icon: FileText,
    type: "Academic",
    title: "Final Exam Schedule Available",
    date: "November 15, 2025",
    color: "bg-blue-100 primary-text"
  },
  {
    icon: AlertCircle,
    type: "Important",
    title: "New Academic Policy Updates",
    date: "November 10, 2025",
    color: "bg-blue-100 primary-text"
  }
];

export function AnnouncementsSection() {
  return (
    <section className="py-20 bg-[#00456A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl text-white mb-2">Announcements</h2>
            <p className="text-gray-200">Stay updated with the latest news and important dates</p>
          </div>
          <a
            href="#"
            className="hidden md:inline-block px-6 py-3 border-2 border-blue-100 text-blue-100 rounded-lg hover:bg-blue-100 hover:text-black transition-colors"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.map((announcement, index) => {
            const Icon = announcement.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${announcement.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">{announcement.type}</div>
                    <h3 className="text-lg text-blue-900 mb-2">{announcement.title}</h3>
                    <div className="text-sm text-gray-600 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {announcement.date}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:hidden text-center mt-8">
          <a
            href="#"
            className="inline-block px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            View All Announcements
          </a>
        </div>
      </div>
    </section>
  );
}