import AIChatPanel from "./AIChatPanel";
import VoiceAgentPanel from "./VoiceAgentPanel";

export default function HeroContent() {
  return (
    <div className="w-full px-2 sm:px-10 flex flex-col justify-center max-w-xl mx-auto lg:mx-0 z-10 relative py-10">

      {/* Glassmorphism card wrapper */}
      <div className="
        relative
        backdrop-blur-[12px]
        bg-white/35

      ">
        <h1 className="text-4xl sm:text-5xl lg:text-[47px] mt-4 lg:mt-0 font-bold text-[#1A202C] leading-[1.15] mb-8 tracking-tight font-sans text-center lg:text-left">
          DaitchPro – AI Restaurant Revenue Intelligence Agent
        </h1>

        {/* Panels for Mobile Only */}
        <div className="flex lg:hidden flex-row items-stretch justify-center gap-2 sm:gap-4 mb-8 w-full mt-4">
          <div className="w-1/2 transform scale-95 sm:scale-100">
            <VoiceAgentPanel isMobile/>
          </div>
          <div className="w-1/2 transform scale-95 sm:scale-100">
            <AIChatPanel isMobile/>
          </div>
        </div>

        <ul className="hidden lg:block space-y-4 mb-10 pl-5 text-gray-800 text-[18px]">
          <li className="list-disc">Missed call → <strong>order recovery</strong> automation</li>
          <li className="list-disc">Reservation and table booking management</li>
          <li className="list-disc">Revenue leakage → recovery analytics</li>
          <li className="list-disc">Customer <strong>re-engagement</strong> & repeat visit automation</li>
        </ul>

        <div className="flex flex-row items-center justify-center lg:justify-start gap-4 mb-8 w-full">
          <button className="
            flex-1 rounded-[12px] text-white font-semibold text-[15px] px-6 py-3.5
            bg-[radial-gradient(515.89%_72.14%_at_40.59%_15.83%,rgba(175,217,177,0.95)_0%,rgba(60,153,91,0.95)_100%)]
            border border-[#3C995B]
            backdrop-blur-[10px]
            shadow-[0_4px_15px_rgba(60,153,91,0.3)]
          ">
            Start Taking More Orders
          </button>
          <button className="
            flex-1 rounded-[12px] text-[#3C995B] font-semibold text-[15px] px-6 py-3.5
            bg-white/60
            border border-[#3C995B]
            backdrop-blur-[10px]
            text-center
          ">
            Book a Demo
          </button>
        </div>

        <p className="hidden lg:block text-[#1A202C] text-[17px] leading-snug">
          Start automating your <strong>restaurant</strong><br />
          <strong>communication</strong> in minutes
        </p>
      </div>
    </div>
  );
}