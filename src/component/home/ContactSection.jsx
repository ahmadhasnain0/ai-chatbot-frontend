import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Campus Address",
    details: ["1234 University Avenue", "Atlas Heights, AH 12345"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 123-4568"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@atlasheights.edu", "admissions@atlasheights.edu"]
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"]
  }
];

export function ContactSection() {
  return (
    <section className="py-20 bg-[#00456a] text-white" id="contactus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions? Our admissions team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-lg text-white mb-3">{item.title}</h3>
                <div className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-blue-100">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <form className="grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-3 rounded-lg bg-white placeholder:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-3 rounded-lg bg-white placeholder:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 rounded-lg bg-white placeholder:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="px-4 py-3 rounded-lg bg-white placeholder:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-800 resize-none"
            ></textarea>
            <button
              type="submit"
              className="px-8 py-3 bg-[#001A29] text-white rounded-lg transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
