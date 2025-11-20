import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ icon: Icon, title, description, color, link }) {
  return (
    <a
      href={link}
      className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 p-6 border border-slate-200 hover:border-blue-300 hover:-translate-y-2"
    >
      <div
        className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
      >
        {Icon && <Icon className="w-6 h-6 text-white" />}
      </div>
      <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#0077b6] transition-colors">
        {title}
      </h4>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center text-[#0077b6] text-sm font-medium group-hover:translate-x-1 transition-transform">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </a>
  );
}
