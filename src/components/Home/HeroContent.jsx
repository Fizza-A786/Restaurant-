import AIChatPanel from "./AIChatPanel";
import VoiceAgentPanel from "./VoiceAgentPanel";

export default function HeroContent() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-10 flex flex-col justify-center max-w-xl mx-auto lg:mx-0 z-10 relative py-6 lg:py-12">

      {/* --- Mobile Background White Glow Circle --- */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-white/80 rounded-full blur-[70px] -z-10 lg:hidden pointer-events-none"></div>

      {/* Glassmorphism card wrapper - Mobile par transparent padding-less, Desktop par glassy */}
      <div className="
        relative
        backdrop-blur-none
        bg-transparent
        lg:backdrop-blur-[12px]
        lg:bg-white/35
        lg:rounded-2xl
        lg:p-8
        lg:-ml-8
      ">
        {/* Responsive Heading: Scales from 28px on tiny phones up to 47px on desktop */}
        <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[47px] mt-2 lg:mt-0 font-bold md:text-[#1A202C] text-black text-left md:text-left leading-[1.15] sm:leading-[1.2] w-[90%] md:w-full mb-4 sm:mb-6 tracking-tight font-sans">
          DaitchPro – AI Restaurant Revenue Intelligence Agent
        </h1>

        {/* Panels for Mobile Only - Clean side by side design */}
        <div className="flex lg:hidden flex-row items-stretch justify-center gap-2 sm:gap-3 mb-6 w-full mt-4">
          <div className="w-1/2 flex flex-col">
            {/* Added container flexibility to ensure child components scale */}
            <VoiceAgentPanel isMobile />
          </div>
          <div className="w-1/2 flex flex-col">
            <AIChatPanel isMobile />
          </div>
        </div>

        {/* Desktop List */}
        <ul className="hidden lg:block space-y-3 lg:space-y-4 mb-8 lg:mb-10 pl-5 text-gray-800 text-[16px] lg:text-[18px]">
          <li className="list-disc">Missed call → <strong>order recovery</strong> automation</li>
          <li className="list-disc">Reservation and table booking management</li>
          <li className="list-disc">Revenue leakage → recovery analytics</li>
          <li className="list-disc">Customer <strong>re-engagement</strong> & repeat visit automation</li>
        </ul>

        {/* Buttons - Adjusted text size and padding for smaller screens */}
        <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 lg:mb-6 w-full">
          <button className="
            flex-1 rounded-[12px] sm:rounded-[14px] text-[#1A202C] lg:text-white font-semibold 
            text-[14px] sm:text-[16px] lg:text-[18px] 
            px-2 sm:px-4 py-3 sm:py-4
            bg-gradient-to-b from-[#7FB88A]/80 to-[#4E9A63]/90 lg:bg-[radial-gradient(515.89%_72.14%_at_40.59%_15.83%,rgba(175,217,177,0.95)_0%,rgba(60,153,91,0.95)_100%)]
            border border-[#64A877] lg:border-[#3C995B]
            backdrop-blur-[5px] lg:backdrop-blur-[10px]
            shadow-[0_4px_15px_rgba(60,153,91,0.2)]
            text-center whitespace-nowrap transition-transform hover:scale-[1.02] active:scale-95
          ">
            Start Free Trial
          </button>
          
          <button className="
            flex-1 rounded-[12px] sm:rounded-[14px] text-[#3C995B] font-semibold 
            text-[14px] sm:text-[16px] lg:text-[18px] 
            px-2 sm:px-4 py-3 sm:py-4
            bg-white/80 lg:bg-white/60
            border border-white/60 lg:border-[#3C995B]
            backdrop-blur-[5px] lg:backdrop-blur-[10px]
            shadow-[0_4px_15px_rgba(0,0,0,0.05)]
            text-center whitespace-nowrap transition-transform hover:scale-[1.02] active:scale-95
          ">
            Book a Demo
          </button>
        </div>

        {/* Desktop Bottom Text */}
        <p className="hidden lg:block text-[#1A202C] text-[15px] lg:text-[17px] leading-snug">
          Start automating your <strong>restaurant</strong><br />
          <strong>communication</strong> in minutes
        </p>
      </div>
    </div>
  );
}