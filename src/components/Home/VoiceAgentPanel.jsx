import { FaPlay } from "react-icons/fa6";
import { MdKeyboardVoice } from "react-icons/md";
import VoiceSVG from "../../assets/Voice.svg";



export default function VoiceAgentPanel({ isMobile }) {
  return (
    <div
      className={`relative overflow-hidden w-full max-w-[240px] rounded-[20px] border border-white/60 bg-white/20 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] ${
        isMobile
          ? "mx-auto"
          : "absolute top-[65%] left-[24%] -translate-x-1/2 -translate-y-1/2 z-20"
      }`}
    >
      {/* Background Blur Image */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-white/35 backdrop-blur-[6px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-3">
        {/* Heading */}
        <h3 className="text-[14px] font-semibold text-black mb-3">
          Voice Agent Panel
        </h3>

        <div className="flex justify-center mb-4">
          <div className="relative flex items-center justify-center">
            {/* Outer Glow */}
            <span className="absolute w-[54px] h-[54px] rounded-full bg-[#5AC76F]/20 animate-pulse" />

            {/* Main Circle */}
            <div className="relative z-10 w-[42px] h-[42px] rounded-full bg-[#4CAF63] flex items-center justify-center shadow-md">
              <MdKeyboardVoice className="text-white text-[20px]" />
            </div>
          </div>
        </div>

        {/* Voice Wave Section */}
        <div className="flex items-center gap-3 mb-4">
          {/* Play Button */}
          <div className="relative flex items-center justify-center shrink-0">
            <span className="absolute w-[44px] h-[44px] rounded-full bg-[#5AC76F]/20" />

            <div className="relative z-10 w-[34px] h-[34px] rounded-full bg-[#4CAF63] flex items-center justify-center">
              <FaPlay className="text-white text-[11px] ml-[2px]" />
            </div>
          </div>

          {/* Wave Bars */}
          <div className="flex items-center gap-[2.5px] flex-1 h-[42px]">
          <img src={VoiceSVG} alt="wave" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Status */}
        <div className="text-[11px] text-[#333] mb-3">
          Live status:{" "}
          <span className="text-[#43A85B] font-semibold">
            Ready to Take Orders
          </span>
        </div>

        {/* Chat Bubble */}
        <div className="bg-[#CFFFF0] rounded-[12px] px-3 py-2 shadow-sm">
          <p className="text-[13px] leading-[18px] text-black font-medium">
            Hello, I'm Katherine -your AI Restaurant Assistant. How can I help
            you today?
          </p>
        </div>
      </div>
    </div>
  );
}