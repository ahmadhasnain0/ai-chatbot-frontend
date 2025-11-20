import { GraduationCap, Calendar, Users, FileText, Bell, MapPin, ArrowRight } from "lucide-react";

const QuickLinkCard = ({ icon: Icon, title, description, colorClass, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`group p-5 cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5 border border-white/20 rounded-lg`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${colorClass}`}>
            {Icon && <Icon className="h-6 w-6 text-white" />}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-100 mb-1">{title}</h3>
            <p className="text-sm text-gray-200 line-clamp-1">{description}</p>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#0092e0] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
      </div>
    </div>
  );
};

const QuickLinks = () => {
  const quickLinks = [
    {
      icon: GraduationCap,
      title: "Course Registration",
      description: "Register for next semester courses",
      colorClass: "bg-blue-500",
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      description: "View important dates and deadlines",
      colorClass: "bg-cyan-500",
    },
    {
      icon: Users,
      title: "Student Directory",
      description: "Find student and faculty contacts",
      colorClass: "bg-green-500",
    },
    {
      icon: FileText,
      title: "Grade Report",
      description: "Check your grades and transcripts",
      colorClass: "bg-red-500",
    },
    {
      icon: Bell,
      title: "Announcements",
      description: "View latest campus announcements",
      colorClass: "bg-orange-500",
    },
    {
      icon: MapPin,
      title: "Campus Map",
      description: "Find locations on campus",
      colorClass: "bg-purple-500",
    },
  ];

  return (
    <div className="bg-[#00456A] ">
 <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-100 mb-2">Quick Links</h2>
        <p className="text-gray-200">Fast access to commonly used student resources</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {quickLinks.map((link) => (
          <QuickLinkCard key={link.title} {...link} />
        ))}
      </div>
    </div>
    </div>
     
  );
};

export default QuickLinks;
