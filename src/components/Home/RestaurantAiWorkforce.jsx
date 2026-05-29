import React from 'react';

export default function RestaurantAiWorkforce() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans select-none">
      
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-10 tracking-tight">
        Run your restaurant with a complete AI workforce.
      </h1>

      {/* Main Content Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Left/Center Visual Feature Block (Spans 2 columns on large screens) */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-amber-100 min-h-[500px] flex items-end shadow-lg">
          
          {/* Background Image: Simulating the Warm Restaurant Environment */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200')` 
            }}
          />
          {/* Warm Overlays for Color Matching */}
          <div className="absolute inset-0 bg-orange-900/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Persona Image Container (Absolute Alignment Left) */}
          <div className="absolute bottom-0 left-4 md:left-10 w-2/3 max-w-[360px] aspect-[4/5] z-10">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
              alt="AI Restaurant Expert Agent" 
              className="w-full h-full object-cover object-top rounded-t-2xl drop-shadow-2xl filter brightness-105"
            />
          </div>

          {/* Interactive CRM & Feature Flow Node Tree */}
          <div className="absolute inset-0 flex items-center justify-end p-4 md:p-8 z-20 bg-gradient-to-l from-black/20 via-transparent to-transparent">
            <div className="flex items-center space-x-6 relative w-full justify-end max-w-xl">
              
              {/* Root Node: Restaurant CRM Activated */}
              <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-xl text-center w-40 flex-shrink-0 relative z-10">
                <p className="text-sm font-bold text-gray-800 leading-tight">
                  Restaurant CRM <br /> <span className="text-stone-700">Activated</span>
                </p>
              </div>

              {/* SVG Connecting Tree Lines */}
              <svg className="absolute right-[220px] top-1/2 -translate-y-1/2 w-16 h-72 hidden md:block pointer-events-none" viewBox="0 0 64 288" fill="none" stroke="currentColor">
                <path d="M0 144 H32 M32 144 V36 H64 M32 144 V108 H64 M32 144 V180 H64 M32 144 V252 H64" strokeWidth="2" strokeColor="rgba(255,255,255,0.6)" strokeLinecap="round" />
              </svg>

              {/* Child Nodes List */}
              <div className="flex flex-col space-y-3 w-56 md:w-64">
                
                {/* Node 1 */}
                <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-3 shadow-md">
                  <h4 className="text-xs md:text-sm font-bold text-gray-900">Customer & Orders</h4>
                  <p className="text-[10px] md:text-xs text-gray-700 mt-0.5 leading-snug">AI handles calls, messages, and orders</p>
                </div>

                {/* Node 2 */}
                <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-3 shadow-md">
                  <h4 className="text-xs md:text-sm font-bold text-gray-900">Reservations & Scheduling</h4>
                  <p className="text-[10px] md:text-xs text-gray-700 mt-0.5 leading-snug">Smart table booking and availability</p>
                </div>

                {/* Node 3 */}
                <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-3 shadow-md">
                  <h4 className="text-xs md:text-sm font-bold text-gray-900">Payments & Transactions</h4>
                  <p className="text-[10px] md:text-xs text-gray-700 mt-0.5 leading-snug">Billing, payments, and order processing</p>
                </div>

                {/* Node 4 */}
                <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-3 shadow-md">
                  <h4 className="text-xs md:text-sm font-bold text-gray-900">Marketing & Retention</h4>
                  <p className="text-[10px] md:text-xs text-gray-700 mt-0.5 leading-snug">Promotions, follow-ups, repeat customers</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Right Side Info & Conversion Block */}
        <div className="flex flex-col justify-between h-full py-2 space-y-8 lg:space-y-0">
          
          {/* Bulleted Feature List */}
          <ul className="space-y-4 text-gray-800 text-sm md:text-base font-medium pl-2">
            <li className="flex items-start">
              <span className="mr-3 text-black text-lg select-none">•</span>
              <span>Handles customer inquiries and orders automatically</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-black text-lg select-none">•</span>
              <span>24/7 voice and chat ordering</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-black text-lg select-none">•</span>
              <span>Smart reservation management</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-black text-lg select-none">•</span>
              <span>Automated billing and payments</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-black text-lg select-none">•</span>
              <span>Marketing and repeat customer growth</span>
            </li>
          </ul>

          {/* Footer Callout & QR Section */}
          <div className="flex flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100 lg:border-t-0">
            
            {/* Agent Status Badge */}
            <div className="flex items-center justify-between border border-emerald-100 bg-emerald-50/40 rounded-2xl p-3 w-full max-w-[240px]">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" 
                  alt="Mini Agent" 
                  className="w-10 h-10 object-cover rounded-xl border border-white shadow-sm"
                />
                <div>
                  <p className="text-[10px] text-gray-400 font-medium">Female AI Assistant</p>
                  <h5 className="text-xs font-bold text-gray-900 leading-tight">AI Restaurant</h5>
                  <h5 className="text-xs font-bold text-gray-900 leading-tight">Expert Agent</h5>
                  <span className="text-[10px] text-gray-500 mt-1 block font-semibold">DaitchPro</span>
                </div>
              </div>
              <button className="bg-emerald-200/70 hover:bg-emerald-200 transition-colors text-emerald-950 font-bold text-[10px] px-2.5 py-1.5 rounded-full shadow-xs">
                Learn More
              </button>
            </div>

            {/* QR Code Container */}
            <div className="p-2 border border-gray-200 rounded-2xl bg-white shadow-xs flex-shrink-0">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://daitch.pro" 
                alt="Scan to Learn More" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}