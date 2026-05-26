const announcements = [
  {
    emoji: "🎉",
    text: "New: AI Voice Agents now support 25+ languages",
  },
  {
    emoji: "⚡",
    text: "14-Day Free Trial — No credit card required",
  },
  {
    emoji: "🌎",
    text: "Scale globally with Multi-Language AI agents",
  },
  {
    emoji: "📞",
    text: "Get a personalized demo — See DaitchPro in action",
  },
];

export default function AnnouncementBanner() {
  return (
    <>
      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Banner */}
      <div className="fixed top-0 left-0 z-50 h-[52px] w-full overflow-hidden border-b border-white/10 bg-[#063A2F] shadow-md">

        {/* Glow Effect */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B5D49]/20 via-transparent to-[#0B5D49]/20" />

        {/* Marquee Wrapper */}
        <div className="flex h-full items-center overflow-hidden whitespace-nowrap">

          {/* Animated Track */}
          <div className="marquee-track">

            {/* Duplicate Content for Infinite Loop */}
            {[...announcements, ...announcements].map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 px-8 md:px-10"
              >
                {/* Emoji */}
                <span className="text-[20px] transition-transform duration-300 group-hover:scale-125">
                  {item.emoji}
                </span>

                {/* Text */}
                <span className="text-sm  tracking-wide text-white md:text-[16px]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}