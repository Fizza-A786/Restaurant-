import AIChatPanel from "./AIChatPanel";
import VoiceAgentPanel from "./VoiceAgentPanel";

export default function HeroContent() {
  return (
    <div className="w-full px-4 sm:px-10 flex flex-col justify-center max-w-xl mx-auto lg:mx-0 z-10 relative py-6">

      {/* Glassmorphism card wrapper - Mobile par transparent padding-less, Desktop par glassy */}
      <div className="
        relative
        backdrop-blur-none
        bg-transparent
        lg:backdrop-blur-[12px]
        lg:bg-white/35
      ">
        {/* Left aligned text on all screens according to the image */}
        <h1 className="text-[34px] sm:text-5xl lg:text-[47px] mt-2 lg:mt-14 font-bold text-[#1A202C] leading-[1.15] mb-6 tracking-tight font-sans text-left">
          DaitchPro – AI Restaurant Revenue Intelligence Agent
        </h1>

        {/* Panels for Mobile Only - Clean side by side design */}
        <div className="flex lg:hidden flex-row items-stretch justify-center gap-3 mb-6 w-full mt-4">
          <div className="w-1/2">
            <VoiceAgentPanel isMobile/>
          </div>
          <div className="w-1/2">
            <AIChatPanel isMobile/>
          </div>
        </div>

        {/* Desktop List */}
        <ul className="hidden lg:block space-y-4 mb-10 pl-5 text-gray-800 text-[18px]">
          <li className="list-disc">Missed call → <strong>order recovery</strong> automation</li>
          <li className="list-disc">Reservation and table booking management</li>
          <li className="list-disc">Revenue leakage → recovery analytics</li>
          <li className="list-disc">Customer <strong>re-engagement</strong> & repeat visit automation</li>
        </ul>

        {/* Buttons matching image_0da268.jpg styling exactly */}
        <div className="flex flex-row items-center justify-center lg:justify-start gap-4 mb-6 w-full">
          <button className="
            flex-1 rounded-[14px] text-[#1A202C] lg:text-white font-semibold text-[17px] sm:text-[18px] px-4 py-4
            bg-gradient-to-b from-[#7FB88A]/80 to-[#4E9A63]/90 lg:bg-[radial-gradient(515.89%_72.14%_at_40.59%_15.83%,rgba(175,217,177,0.95)_0%,rgba(60,153,91,0.95)_100%)]
            border border-[#64A877] lg:border-[#3C995B]
            backdrop-blur-[5px] lg:backdrop-blur-[10px]
            shadow-[0_4px_15px_rgba(60,153,91,0.2)]
            text-center whitespace-nowrap
          ">
            Start Free Trail
          </button>
          
          <button className="
            flex-1 rounded-[14px] text-[#3C995B] font-semibold text-[17px] sm:text-[18px] px-4 py-4
            bg-white/80 lg:bg-white/60
            border border-white/60 lg:border-[#3C995B]
            backdrop-blur-[5px] lg:backdrop-blur-[10px]
            shadow-[0_4px_15px_rgba(0,0,0,0.05)]
            text-center whitespace-nowrap
          ">
            Book a Demo
          </button>
        </div>

        {/* Desktop Bottom Text */}
        <p className="hidden lg:block text-[#1A202C] text-[17px] leading-snug">
          Start automating your <strong>restaurant</strong><br />
          <strong>communication</strong> in minutes
        </p>
      </div>
    </div>
  );
}