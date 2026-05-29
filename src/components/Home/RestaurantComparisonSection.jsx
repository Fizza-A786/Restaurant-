
import { Check, CheckCircle2, MessageSquare, User, Settings } from 'lucide-react';

export default function RestaurantComparisonSection() {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[1320px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="ttext-[26px] sm:text-[32px] md:text-[40px] lg:text-[42px]  text-black tracking-tight font-bold leading-[1.1] md:leading-tight mb-4">
            Why Traditional Restaurant Communication Is Broken
          </h2>
          <p className="text-[13px] sm:text-lg text-gray-500 font-normal">
            Operational inefficiencies vs intelligent automation
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[24px] overflow-hidden shadow-xl min-h-[600px]">
          
          {/* LEFT PANEL: Human-Only Model */}
          <div 
            className="relative bg-cover bg-center p-6 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[500px] lg:min-h-auto"
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000')` 
              /* Replace with your local path: '../../assets/human-model.jpg' */
            }}
          >
            {/* Absolute tint fallback */}
            <div className="absolute inset-0 bg-amber-950/10 mix-blend-multiply pointer-events-none" />

            {/* Glass Card */}
            <div 
              className="relative w-full max-w-[480px] rounded-2xl p-6 sm:p-8 mb-8 backdrop-blur-md border border-white/20"
              style={{ background: 'rgba(255, 255, 255, 0.45)' }}
            >
              <h3 className="text-[#8B3A1E] font-bold text-xl sm:text-2xl tracking-wide uppercase mb-6 leading-tight">
                HUMAN-ONLY<br className='hidden md:block'/>{''} MODEL
              </h3>
              
              <ul className="space-y-2 md:space-y-3.5 text-gray-900 md:font-medium text-[15px] sm:text-base">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                  Limited working hours only
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                  Peak-hour order overload
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                  Missed calls during rush time
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                  Manual order entry errors
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                  No centralised order tracking
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                  No customer behaviour insights
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                  No automated revenue recovery
                </li>
              </ul>
            </div>

            {/* Efficiency Indicator */}
            <div 
              className="relative w-full max-w-[280px] rounded-full px-5 py-2.5 backdrop-blur-md border border-white/30 text-[14px] sm:text-base text-gray-900 font-medium"
              style={{ background: 'rgba(255, 255, 255, 0.6)' }}
            >
              Workflow efficiency: <span className="text-[#C84B31] font-bold">35% Effective</span>
            </div>
          </div>


          {/* RIGHT PANEL: AI-Powered DaitchPro Model */}
          <div 
            className="relative bg-[#E8F3ED] bg-cover bg-center p-6 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[550px] lg:min-h-auto overflow-hidden"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000')`
              /* Replace with your local path if isolating the subject setup: '../../assets/ai-model.jpg' */
            }}
          >
            {/* White/Green Soft Vignette Overlay for image integration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E6F4EA]/90 via-[#F3F8F5]/80 to-transparent pointer-events-none" />

            {/* Top Bar Labeling & Brand */}
            <div className="relative w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10">
              {/* Brand Logo Layout */}
              <div className="flex items-center gap-2 text-gray-900 font-bold text-xl">
                <div className="w-6 h-6 bg-gray-900 transform rotate-45 flex items-center justify-center rounded-sm">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span>DaitchPro</span>
              </div>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-[#E2F2E9] text-[#2E7D46] border border-[#B6DEC5] px-2.5 py-1 rounded-full text-xs font-semibold">AI Powered</span>
                <span className="bg-[#E2F2E9] text-[#2E7D46] border border-[#B6DEC5] px-2.5 py-1 rounded-full text-xs font-semibold">Real Time</span>
                <span className="bg-[#E2F2E9] text-[#2E7D46] border border-[#B6DEC5] px-2.5 py-1 rounded-full text-xs font-semibold">Automation Enabled</span>
              </div>
            </div>

            {/* Floating Micro UI Mockup Assets */}
            <div className="absolute left-[54%] top-[48%] -translate-x-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
              {/* Floating Icon 1 */}
              <div className="absolute -left-12 top-0 bg-white p-2.5 rounded-xl shadow-md border border-[#E2F2E9] text-[#34A853]">
                <MessageSquare size={18} />
              </div>
              {/* Floating Icon 2 */}
              <div className="absolute -left-16 bottom-12 bg-white p-2.5 rounded-xl shadow-md border border-[#E2F2E9] text-[#34A853] flex items-center gap-1">
                <User size={18} />
                <span className="w-2 h-2 rounded-full bg-[#34A853] animate-ping" />
              </div>
              {/* Floating Icon 3 */}
              <div className="absolute -right-24 bottom-24 bg-white p-2.5 rounded-xl shadow-md border border-[#E2F2E9] text-[#34A853]">
                <Settings size={18} />
              </div>
            </div>

            {/* Main AI Specs Card */}
            <div className="relative w-full max-w-[440px] bg-white/95 rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-100/40 ml-auto my-8 z-10">
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-[#216938] font-bold text-xl sm:text-2xl tracking-wide uppercase leading-tight">
                  AI-POWERED<br />DAITCHPRO MODEL
                </h3>
                <div className="bg-[#E2F2E9] text-[#216938] p-1 rounded-full">
                  <Check size={16} strokeWidth={3} />
                </div>
              </div>

              <ul className="space-y-3.5 text-gray-800 font-medium text-[15px] sm:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2 flex-shrink-0" />
                  24/7 order handling
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2 flex-shrink-0" />
                  No missed calls during peak hours
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2 flex-shrink-0" />
                  Instant order capture and routing
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2 flex-shrink-0" />
                  Automatic CRM and order logging
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2 flex-shrink-0" />
                  Structured customer data insights
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2 flex-shrink-0" />
                  Real-time sentiment and behavior tracking
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2 flex-shrink-0" />
                  Revenue recovery automation
                </li>
              </ul>
            </div>

            {/* Efficiency Indicator */}
            <div className="relative w-full max-w-[320px] bg-white/90 border border-emerald-100 rounded-full px-5 py-2.5 ml-auto text-[14px] sm:text-base text-gray-900 font-medium shadow-sm z-10">
              Workflow efficiency: <span className="text-[#2E7D46] font-bold">96% Effective</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}