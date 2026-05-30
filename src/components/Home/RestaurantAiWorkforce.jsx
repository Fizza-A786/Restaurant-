'use client'

import React from 'react';

export default function RestaurantAiWorkforce() {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-start py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans select-none overflow-x-hidden">
      
      {/* 1. MAIN HEADING (Adjust desktop width using lg:max-w to change headline text flow) */}
      <h1 className="w-full text-center text-[24px] sm:text-[32px] md:text-[38px] lg:text-[40px] text-black tracking-tight font-bold leading-[1.2] mb-6 sm:mb-8 md:mb-12 max-w-[1400px] lg:max-w-[900px] mx-auto">
        Run your restaurant with a <br className="md:hidden block" /> complete AI workforce.
      </h1>

      {/* Main Container Layout */}
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mx-auto">
        
        {/* 2. LEFT COLUMN: VISUAL CARD CONTAINER (Matches reference layout on desktop) */}
        <div className="lg:col-span-2 relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-stone-900 min-h-[420px] xs:min-h-[500px] sm:min-h-[540px] md:min-h-[580px] lg:min-h-[520px] w-full flex items-center justify-center lg:justify-start p-4 sm:p-8 shadow-md border border-gray-100">
          
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200')` 
            }}
          />
          {/* Gentle dim layer */}
          <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
          
          {/* DESKTOP INTEGRATED FLOW DIAGRAM (Visible only on lg screens to perfectly mimic image) */}
          <div className="hidden lg:flex relative z-10 w-full items-center justify-end pr-4 h-full">
            <div className="flex items-center gap-6 relative">
              
              {/* Central CRM Hub Tag */}
              <div className="bg-white/90 backdrop-blur-md border border-white/50 shadow-md text-black font-bold text-xs px-4 py-3 rounded-xl text-center max-w-[140px] leading-tight">
                Restaurant CRM Activated
              </div>

              {/* Connecting Tree Lines Vector */}
              <div className="absolute left-[130px] top-1/2 -translate-y-1/2 w-[30px] h-[320px] pointer-events-none text-white/60">
                <svg className="w-full h-full" viewBox="0 0 30 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 160 H15 M15 25 V295 M15 25 H30 M15 115 H30 M15 205 H30 M15 295 H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              {/* CRM Nodes Stack */}
              <div className="flex flex-col gap-3 pl-6">
                {[
                  { title: "Customer & Orders", desc: "AI handles calls, messages, and orders" },
                  { title: "Reservations & Scheduling", desc: "Smart table booking and availability" },
                  { title: "Payments & Transactions", desc: "Billing, payments, and order processing" },
                  { title: "Marketing & Retention", desc: "Promotions, follow-ups, repeat customers" }
                ].map((node, idx) => (
                  <div key={idx} className="bg-white/80 backdrop-blur-md border border-white/40 rounded-xl p-3 shadow-sm w-[210px] transform hover:scale-[1.02] transition-transform">
                    <h4 className="text-gray-900 font-extrabold text-[12px] leading-tight mb-0.5">{node.title}</h4>
                    <p className="text-gray-700 text-[10px] leading-snug font-medium">{node.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* 3. MOBILE ONLY OVERLAY CARD (Untouched layout for mobile screens) */}
          <div className="lg:hidden relative w-full max-w-[420px] bg-white/65 backdrop-blur-xl border border-white/60 rounded-[24px] p-5 xs:p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex flex-col justify-between gap-6 z-20">
            
            {/* Mobile Feature List Bullets */}
            <ul className="space-y-4 xs:space-y-4.5 sm:space-y-5 text-gray-900 font-bold text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] pl-1 relative z-10">
              {[
                "Handles customer inquiries and orders automatically",
                "24/7 voice and chat ordering",
                "Smart reservation management",
                "Automated billing and payments",
                "Marketing and repeat customer growth"
              ].map((text, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-gray-900 text-lg leading-none select-none">•</span>
                  <span className="leading-snug tracking-tight text-gray-900">{text}</span>
                </li>
              ))}
            </ul>

            {/* Mobile Bottom Badge & QR Section */}
            <div className="flex flex-row items-center justify-between gap-3 pt-4 border-t border-black/10 relative z-10">
              
              <div className="flex items-center justify-between border border-emerald-600/20 bg-white/50 backdrop-blur-md rounded-[18px] p-2 w-full max-w-[240px] xs:max-w-[260px] sm:max-w-[280px] shadow-sm">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150" 
                    alt="Mini Agent" 
                    className="w-9 h-9 xs:w-11 xs:h-11 object-cover rounded-xl border border-white shadow-sm"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-[8.5px] xs:text-[9.5px] text-emerald-800 font-extrabold mb-0.5 tracking-wide">Female AI Assistant</p>
                    <h5 className="text-[10.5px] xs:text-[11.5px] font-bold text-gray-900 leading-none tracking-tight">AI Restaurant</h5>
                    <h5 className="text-[10.5px] xs:text-[11.5px] font-bold text-gray-900 leading-tight tracking-tight">Expert Agent</h5>
                  </div>
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-bold text-[9.5px] xs:text-[11px] px-2.5 py-1.5 rounded-full shadow-md whitespace-nowrap ml-1">
                  Learn More
                </button>
              </div>

              <div className="p-1.5 border border-black/10 rounded-[14px] bg-white shadow-md flex-shrink-0">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://daitch.pro" 
                  alt="Scan to Learn More" 
                  className="w-11 h-11 xs:w-13 xs:h-13 sm:w-16 sm:h-16 object-contain"
                />
              </div>

            </div>
          </div>

        </div>

        {/* 4. RIGHT COLUMN: CLEAN TEXT CONTENT (Visible on Desktop as per image) */}
        <div className="hidden lg:flex flex-col justify-center h-full pl-2 lg:pl-6 space-y-10">
          
          {/* Main Feature Bullet Points for Desktop */}
          <ul className="space-y-6 text-gray-900 font-semibold text-[16px] xl:text-[17px]">
            {[
              "Handles customer inquiries and orders automatically",
              "24/7 voice and chat ordering",
              "Smart reservation management",
              "Automated billing and payments",
              "Marketing and repeat customer growth"
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3.5 text-gray-900 text-xl leading-none select-none">•</span>
                <span className="leading-snug tracking-tight text-gray-800">{text}</span>
              </li>
            ))}
          </ul>

          {/* Desktop Footer Block: Badge and QR Code side-by-side */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            
            {/* Agent Badge */}
            <div className="flex items-center justify-between border border-emerald-500/20 bg-emerald-50/40 rounded-[20px] p-2.5 w-full max-w-[290px] shadow-sm">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150" 
                  alt="Mini Agent" 
                  className="w-12 h-12 object-cover rounded-xl border border-white shadow-sm"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] text-emerald-800 font-extrabold mb-0.5 tracking-wide">Female AI Assistant</p>
                  <h5 className="text-[13px] font-bold text-gray-900 leading-tight tracking-tight">AI Restaurant</h5>
                  <h5 className="text-[13px] font-bold text-gray-900 leading-tight tracking-tight">Expert Agent</h5>
                </div>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-bold text-[11px] px-3 py-2 rounded-full shadow-sm whitespace-nowrap ml-2">
                Learn More
              </button>
            </div>

            {/* Brand/QR Group */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-gray-400 font-medium">Powered by</p>
                <p className="text-sm font-bold text-gray-900 tracking-tight">DutchPro</p>
              </div>
              <div className="p-1.5 border border-gray-200/80 rounded-[14px] bg-white shadow-sm flex-shrink-0">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://daitch.pro" 
                  alt="Scan to Learn More" 
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}