import ServiceCard from './ServiceCard';
import {
  Wifi,
  Mail,
  Printer,
  Wrench,
  Headphones,
  Book,
  Download,
  Shield,
  Cloud,
  Laptop,
  Settings,
  FileText
} from 'lucide-react';

const services = [
  {
    icon: Wifi,
    title: 'Wi-Fi Services',
    description: 'Connect to campus network, manage devices, and view bandwidth usage',
    color: 'from-blue-500 to-blue-600',
    link: '#'
  },
  {
    icon: Mail,
    title: 'Email Setup',
    description: 'Configure your student email, access webmail, and manage forwarding',
    color: 'from-cyan-500 to-cyan-600',
    link: '#'
  },
  {
    icon: Printer,
    title: 'Printing Requests',
    description: 'Submit print jobs, track quota usage, and manage print settings',
    color: 'from-teal-500 to-teal-600',
    link: '#'
  },
  {
    icon: Wrench,
    title: 'Technical Support',
    description: 'Get help with technical issues, troubleshooting, and diagnostics',
    color: 'from-orange-500 to-orange-600',
    link: '#'
  },
  {
    icon: Headphones,
    title: 'IT Helpdesk',
    description: 'Contact our support team, submit tickets, and track requests',
    color: 'from-red-500 to-red-600',
    link: '#'
  },
  {
    icon: Book,
    title: 'IT Resources',
    description: 'Access guides, tutorials, documentation, and knowledge base',
    color: 'from-green-500 to-green-600',
    link: '#'
  },
  {
    icon: Download,
    title: 'Software Downloads',
    description: 'Download licensed software, tools, and applications for students',
    color: 'from-emerald-500 to-emerald-600',
    link: '#'
  },
  {
    icon: Shield,
    title: 'Account Security',
    description: 'Manage passwords, two-factor authentication, and security settings',
    color: 'from-slate-500 to-slate-600',
    link: '#'
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'Access cloud storage, file sharing, and collaboration tools',
    color: 'from-sky-500 to-sky-600',
    link: '#'
  },
  {
    icon: Laptop,
    title: 'Device Registration',
    description: 'Register devices for network access and manage device settings',
    color: 'from-amber-500 to-amber-600',
    link: '#'
  },
  {
    icon: Settings,
    title: 'System Status',
    description: 'Check system status, maintenance schedules, and service updates',
    color: 'from-lime-500 to-lime-600',
    link: '#'
  },
  {
    icon: FileText,
    title: 'Request Forms',
    description: 'Submit IT service requests, track status, and manage approvals',
    color: 'from-rose-500 to-rose-600',
    link: '#'
  }
];

export default function ServiceGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">IT Services & Support</h2>
        <p className="text-slate-600 text-lg">Quick access to all IT services and campus resources</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}