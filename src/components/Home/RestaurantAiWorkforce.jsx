import React from 'react';

export default function RestaurantAiWorkforce() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans select-none">
      
      {/* Main Heading */}
      <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[42px]  text-black tracking-tight font-bold leading-[1.1] md:leading-tight mb-8 md:mb-12  max-w-5xl mx-auto">
        Run your restaurant with a complete AI workforce.
      </h1>

      {/* Main Content Layout */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 items-center mx-auto">
        
        {/* Left/Center Visual Feature Block (Spans 2 columns on large screens) */}
        <div className="lg:col-span-2 relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-amber-100 min-h-[450px] sm:min-h-[550px] lg:min-h-[600px] flex items-end shadow-2xl border border-gray-100">
          
          {/* Background Image: Simulating the Warm Restaurant Environment */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200')` 
            }}
          />
          {/* Warm Overlays for Color Matching */}
          <div className="absolute inset-0 bg-orange-950/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />

          {/* Persona Image Container (Absolute Alignment Left) */}
          <div className="absolute bottom-0 left-2 sm:left-8 md:left-10 w-[60%] sm:w-[50%] max-w-[280px] sm:max-w-[360px] aspect-[4/5] z-10 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
              alt="AI Restaurant Expert Agent" 
              className="w-full h-full object-cover object-top rounded-t-2xl drop-shadow-2xl filter brightness-105"
            />
          </div>

          {/* Interactive CRM & Feature Flow Node Tree */}
          <div className="absolute inset-y-0 right-0 w-full sm:w-2/3 flex items-center justify-end p-4 sm:p-6 md:p-8 z-20">
            <div className="flex items-center gap-3 sm:gap-6 relative w-full justify-end max-w-xl">
              
              {/* Root Node: Restaurant CRM Activated */}
              <div className="bg-white/85 backdrop-blur-md border border-white/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl text-center w-28 sm:w-36 md:w-40 flex-shrink-0 relative z-10 hidden sm:block transition-transform hover:scale-105">
                <p className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-900 leading-snug">
                  Restaurant CRM <br /> <span className="text-emerald-700">Activated</span>
                </p>
              </div>

              {/* SVG Connecting Tree Lines (Visible on md and up) */}
              <svg className="absolute right-[220px] md:right-[240px] lg:right-[270px] top-1/2 -translate-y-1/2 w-8 md:w-12 lg:w-16 h-64 md:h-72 hidden sm:block pointer-events-none" viewBox="0 0 64 288" fill="none" stroke="currentColor">
                <path d="M0 144 H32 M32 144 V36 H64 M32 144 V108 H64 M32 144 V180 H64 M32 144 V252 H64" strokeWidth="2" strokeColor="rgba(255,255,255,0.8)" strokeLinecap="round" />
              </svg>

              {/* Child Nodes List */}
              <div className="flex flex-col space-y-2.5 sm:space-y-3 w-[180px] sm:w-[220px] md:w-[260px] z-10">
                
                {/* Node 1 */}
                <div className="bg-white/85 backdrop-blur-md border border-white/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-lg transition-transform hover:-translate-x-1 hover:bg-white">
                  <h4 className="text-[11px] sm:text-xs md:text-[15px] font-bold text-gray-900 leading-tight">Customer & Orders</h4>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 mt-0.5 sm:mt-1 leading-snug">AI handles calls, messages, and orders</p>
                </div>

                {/* Node 2 */}
                <div className="bg-white/85 backdrop-blur-md border border-white/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-lg transition-transform hover:-translate-x-1 hover:bg-white">
                  <h4 className="text-[11px] sm:text-xs md:text-[15px] font-bold text-gray-900 leading-tight">Reservations & Scheduling</h4>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 mt-0.5 sm:mt-1 leading-snug">Smart table booking and availability</p>
                </div>

                {/* Node 3 */}
                <div className="bg-white/85 backdrop-blur-md border border-white/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-lg transition-transform hover:-translate-x-1 hover:bg-white">
                  <h4 className="text-[11px] sm:text-xs md:text-[15px] font-bold text-gray-900 leading-tight">Payments & Transactions</h4>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 mt-0.5 sm:mt-1 leading-snug">Billing, payments, and order processing</p>
                </div>

                {/* Node 4 */}
                <div className="bg-white/85 backdrop-blur-md border border-white/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-lg transition-transform hover:-translate-x-1 hover:bg-white">
                  <h4 className="text-[11px] sm:text-xs md:text-[15px] font-bold text-gray-900 leading-tight">Marketing & Retention</h4>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 mt-0.5 sm:mt-1 leading-snug">Promotions, follow-ups, repeat customers</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Right Side Info & Conversion Block */}
        <div className="flex flex-col justify-center h-full py-2 space-y-8 lg:space-y-10">
          
          {/* Bulleted Feature List */}
          <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-gray-800 text-[15px] sm:text-[16px] md:text-[17px] font-medium pl-1 sm:pl-2">
            {[
              "Handles customer inquiries and orders automatically",
              "24/7 voice and chat ordering",
              "Smart reservation management",
              "Automated billing and payments",
              "Marketing and repeat customer growth"
            ].map((text, i) => (
              <li key={i} className="flex items-start group">
                <span className="mr-3 sm:mr-4 text-amber-600 text-xl sm:text-2xl leading-none select-none group-hover:scale-125 transition-transform">•</span>
                <span className="leading-snug pt-0.5">{text}</span>
              </li>
            ))}
          </ul>

          {/* Footer Callout & QR Section */}
          <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-200">
            
            {/* Agent Status Badge */}
            <div className="flex items-center justify-between border border-emerald-200 bg-emerald-50/60 rounded-[20px] p-2.5 sm:p-3.5 w-full max-w-[280px] shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" 
                  alt="Mini Agent" 
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-xl border border-white shadow-sm group-hover:scale-105 transition-transform"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[9px] sm:text-[10px] text-emerald-700 mb-0.5">Female AI Assistant</p>
                  <h5 className="text-[10px]  text-gray-900 leading-none">AI Restaurant</h5>
                  <h5 className="text-[10px]  text-gray-900 leading-tight">Expert Agent</h5>
                </div>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-bold text-[10px] sm:text-xs px-3 py-2 rounded-full shadow-sm whitespace-nowrap">
                Learn More
              </button>
            </div>

            {/* QR Code Container */}
            <div className="p-2 sm:p-2.5 border border-gray-200 rounded-[10px] bg-white shadow-sm hover:shadow-md transition-shadow flex-shrink-0 cursor-pointer hover:scale-105">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://daitch.pro" 
                alt="Scan to Learn More" 
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}