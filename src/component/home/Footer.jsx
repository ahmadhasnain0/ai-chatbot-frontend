import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Academics",
    links: ["Programs", "Departments", "Faculty", "Research", "Libraries"]
  },
  {
    title: "Admissions",
    links: ["Undergraduate", "Graduate", "International", "Financial Aid", "Visit Campus"]
  },
  {
    title: "Campus Life",
    links: ["Housing", "Dining", "Athletics", "Student Services", "Safety"]
  },
  {
    title: "About",
    links: ["Mission & Vision", "Leadership", "News & Events", "Careers", "Contact Us"]
  }
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
];

export function Footer() {
  return (
    <footer className="bg-[#001A29] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* University Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 primary-bg rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">AH</span>
              </div>
              <span className="text-white">Atlas Heights</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Excellence in Education since 1952
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0077B6] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Atlas Heights University. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}