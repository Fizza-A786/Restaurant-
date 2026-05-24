import { MdSend } from 'react-icons/md';

export default function AIChatPanel({ isMobile }) {
  return (
    <div 
      className={`flex flex-col w-full h-[290px] max-w-[210px]  bg-white/70 backdrop-blur-xl border border-white/60 rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.15)] pointer-events-auto ${isMobile ? 'mx-auto' : 'absolute top-[5%] xl:top-[7%] right-0 xl:right-4'}`}
    >
      <div className="bg-black/10 py-1.5 text-center backdrop-blur-md border-b border-white/20">
        <span className="font-bold text-gray-900 text-[11px] tracking-wide">AI Chat Panel</span>
      </div>
      
      <div className="p-3 flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <img 
            src="https://i.pravatar.cc/150?img=5" 
            alt="AI Avatar" 
            className="w-5 h-5 rounded-full border border-white shadow-sm mt-0.5 object-cover" 
          />
          <div className="bg-[#EAF5EF] rounded-[14px] rounded-tl-sm p-2 shadow-sm border border-white/40">
            <p className="text-[10px] text-gray-800 leading-snug font-medium">
              Hello! I'm Katherine, your AI Restaurant Assistant. How can I help you today?
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-2 pt-0 mt-auto">
        <div className="relative flex items-center">
         <textarea
  placeholder="Ask about reservations..."
  className="w-full bg-white/80 border border-white/80 rounded-[14px] py-1.5 pl-2.5 pr-8 text-[10px] text-gray-800 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#8BC5A1] transition-shadow resize-none h-8 sm:h-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
/>
          <button className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[linear-gradient(180deg,#AFD9B1_0%,#3C995B_100%)] flex items-center justify-center text-white shadow-md hover:bg-[#7AB591] hover:scale-105 active:scale-95 transition-all">
            <MdSend className="w-3 h-3 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
