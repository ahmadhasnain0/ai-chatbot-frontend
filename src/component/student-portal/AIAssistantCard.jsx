import { Bot, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link"; 


const AIAssistantCard = () => {
  const popularQuestions = ["Wi-Fi Setup", "Email Access", "Printing Issues", "Password Reset"];

  return (
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-start pb-6">
        <h1 className="text-3xl font-bold text-gray-900 ">
          Welcome to IT Services
        </h1>
        <p className="mt-2 text-gray-600 ">
          Access all your IT services and get instant help with our AI assistant
        </p>
      </div>

      {/* Card */}
      <div className="relative overflow-hidden bg-[#00456A] p-8 text-white rounded-2xl shadow-2xl">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Bot className="h-8 w-8 text-blue-200" />
            </div>
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                AI Assistant
                <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse" />
              </h2>
              <p className="text-white/80">24/7 IT Support</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/90 mb-6 text-lg">
            Need help with IT services? Ask our AI assistant any question about Wi-Fi setup, 
            email configuration, printing, or technical support.
          </p>

          {/* Action Button */}

          <Link href="/chatbot" className="w-[200px] flex items-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-slate-100 transition">
            <MessageCircle className="h-5 w-5" />
            Ask AI for Help
          </Link>

          {/* Popular Questions */}
          <div className="mt-6 pt-6 border-t border-white/30">
            <p className="text-sm text-white/70 mb-2">Popular questions:</p>
            <div className="flex flex-wrap gap-2">
              {popularQuestions.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-500/30 backdrop-blur-sm rounded-full text-xs cursor-pointer hover:bg-blue-600/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantCard;
