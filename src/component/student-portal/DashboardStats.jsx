import { BarChart3, Zap, TrendingUp, Clock } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, subtitle, colorClass }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-lg ${colorClass} flex items-center justify-center mb-4`}>
        {Icon && <Icon className="h-6 w-6 text-white" />}
      </div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  );
};

const DashboardStats = () => {
  const stats = [
    {
      icon: BarChart3,
      label: "Current GPA",
      value: "3.82",
      subtitle: "+0.15 this semester",
      colorClass: "bg-green-500",
    },
    {
      icon: Zap,
      label: "Print Credits",
      value: "847 pages",
      subtitle: "82 pages used this month",
      colorClass: "bg-blue-500",
    },
    {
      icon: TrendingUp,
      label: "Course Progress",
      value: "6 of 6",
      subtitle: "All courses on track",
      colorClass: "bg-purple-500",
    },
    {
      icon: Clock,
      label: "Pending Requests",
      value: "2 items",
      subtitle: "1 requires action",
      colorClass: "bg-orange-500",
    },
  ];

  return (
          <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
            {/* Top Heading */}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
