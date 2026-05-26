
import {
  Globe,
  Phone,
  Sparkles,
  Zap,
  Bot,
} from "lucide-react";

const announcements = [
  {
    icon: <Bot size={18} />,
    text: "AI Agents Now Available",
  },
  {
    icon: <Sparkles size={18} />,
    text: "Book Your Free Demo",
  },
  {
    icon: <Phone size={18} />,
    text: "24/7 Customer Support",
  },
  {
    icon: <Zap size={18} />,
    text: "Boost Productivity with Automation",
  },
  {
    icon: <Globe size={18} />,
    text: "Scale Globally with Multi-Language AI Agents",
  },
];

export default function AnnouncementBanner() {
  return (
    <>
      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Top Green Announcement Bar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#063A2F] border-b border-white/10 overflow-hidden h-[50px] flex items-center">
        
        {/* Scrolling Content */}
        <div className="flex whitespace-nowrap animate-marquee min-w-max">
          
          {[...announcements, ...announcements].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 md:px-14 text-white"
            >
              {/* Icon */}
              <div className="text-[#5EE9A5] animate-pulse">
                {item.icon}
              </div>

              {/* Text */}
              <span className="text-sm md:text-[18px] font-medium tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}