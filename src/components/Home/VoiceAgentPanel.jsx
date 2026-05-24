import { MdKeyboardVoice } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import voiceSvg from '../../assets/Voice.svg';

export default function VoiceAgentPanel({ isMobile }) {

  return (
    <div
      className={`w-full max-w-[230px] bg-white/70  backdrop-blur-xl border border-white/60 rounded-[20px] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.15)] pointer-events-auto ${
        isMobile
          ? 'mr-auto ml-1 lg:mx-auto'
          : 'absolute top-[65%] left-[25%] xl:left-[20%] -translate-x-1/2 -translate-y-1/2 z-20'
      }`}
    >
      {/* Header: Avatar image + Title */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-8 h-8 bg-[#C2FFE5]/60 rounded flex items-center justify-center  shrink-0 overflow-hidden ">
        <MdKeyboardVoice className='text-[18px] text-[#3C995B]'/>
        </div>
        <span className="font-bold text-gray-900 text-[11px] tracking-wide leading-tight">
          Voice Agent Panel
        </span>
      </div>

      {/* Waveform row: Play image button + animated bars */}
      <div className="flex items-center gap-2 mb-3">
        {/* Play button — image or fallback green circle */}
        <button className="w-7 h-7 rounded-full flex items-center justify-center shadow-md shrink-0 overflow-hidden hover:scale-105 active:scale-95 transition-all bg-[#4CAF50]">
        <FaPlay className="w-3 h-3 text-white ml-0.5" />
        </button>

        {/* Animated Waveform */}
        <div className="flex items-center justify-between flex-1 h-8 px-1">
    <img src={voiceSvg} alt="voiceagent" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Live status */}
      <div className="text-[10px] text-gray-800 mb-2">
        Live status:{' '}
        <span className="text-[#3C995B] font-bold">Ready to Take Orders</span>
      </div>

      {/* Chat bubble */}
      <div className="bg-[#C2FFE5] rounded-[10px] p-2 shadow-sm border border-white/40">
        <p className="text-[13px] text-gray-800 leading-relaxed font-medium">
        Hello, I'm Katherine -your Al Restaurant Assistant. How can I help you today?
        </p>
      </div>
    </div>
  );
}