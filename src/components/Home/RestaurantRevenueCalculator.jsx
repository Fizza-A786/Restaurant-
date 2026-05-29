"use client";
import React from "react";
// Local asset path import matching your directory structure
import bgImage from "../../assets/bg.png";

export default function RestaurantRevenueCalculator() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center space-y-3 mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-black tracking-tight">
            How Much Revenue Is Your Restaurant Losing?
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#666666]">
            Estimate your lost and recoverable revenue based on real customer communication and order behavior.
          </p>
        </div>

        {/* Main Dashboard Box using Local Asset Background */}
        <div 
          className="relative w-full rounded-[40px] overflow-hidden bg-cover bg-center bg-no-repeat shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-6 md:p-10 lg:p-14"
          style={{
            backgroundImage: `url(${bgImage.src || bgImage})`,
          }}
        >
          {/* Subtle Layer Overlay */}
          <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

          {/* Two Columns Grid Wrapper */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-6xl mx-auto">
            
            {/* LEFT GLASS CARD */}
            <div className="flex-1 rounded-[32px] border border-white/60 bg-white/40 backdrop-blur-xl p-6 md:p-10 flex flex-col justify-between shadow-sm">
              
              {/* Upper Stats Readout */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#1A202C]/10 pb-3">
                  <span className="text-[28px] font-extrabold text-[#1A202C]">1,500</span>
                  <span className="text-[16px] font-semibold text-[#1A202C]">Monthly Calls / Order Inquiries</span>
                </div>
                
                <div className="flex items-center justify-between border-b border-[#1A202C]/10 pb-3">
                  <span className="text-[28px] font-extrabold text-[#1A202C]">22%</span>
                  <span className="text-[16px] font-semibold text-[#1A202C]">Missed Calls</span>
                </div>
                
                <div className="flex items-center justify-between border-b border-[#1A202C]/10 pb-3">
                  <span className="text-[28px] font-extrabold text-[#1A202C]">18%</span>
                  <span className="text-[16px] font-semibold text-[#1A202C]">Order Conversion Rate</span>
                </div>
                
                <div className="flex items-center justify-between border-b border-[#1A202C]/10 pb-3">
                  <span className="text-[28px] font-extrabold text-[#1A202C]">$35</span>
                  <span className="text-[16px] font-semibold text-[#1A202C]">Average Order Value</span>
                </div>
              </div>

              {/* Bottom Calculated Leakage */}
              <div className="mt-16 space-y-4">
                <p className="text-[15px] font-bold text-black uppercase tracking-wide">
                  Calculated Revenue Loss:
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-[17px] font-medium text-[#333333]">Lost Monthly Revenue:</span>
                  <span className="text-[28px] font-extrabold text-black">$207,900</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-[17px] font-medium text-[#333333]">Lost Annually:</span>
                  <span className="text-[32px] font-extrabold text-black">$2,494,800</span>
                </div>
              </div>

            </div>

            {/* RIGHT GLASS CARD WITH EXACT INNER BOXES */}
            <div className="flex-1 rounded-[32px] border border-white/60 bg-white/30 backdrop-blur-xl p-6 md:p-10 flex flex-col justify-between shadow-sm relative pt-12">
              
              {/* Badges on top corner */}
              <div className="absolute -top-3 right-8 flex items-center gap-2">
                <span className="bg-[#C2FFE5] text-[#276B43] text-[11px] font-bold px-3 py-1 rounded-md border border-[#3C995B]/20">
                  AI Powered
                </span>
                <span className="bg-[#C2FFE5] text-[#276B43] text-[11px] font-bold px-3 py-1 rounded-md border border-[#3C995B]/20">
                  Real-Time Optimization
                </span>
              </div>

              {/* Inner Boxes Rows */}
              <div className="space-y-3.5">
                
                {/* Row 1 */}
                <div className="bg-[#EAEAEA]/80 rounded-xl p-4 border border-white/40 flex items-center justify-between shadow-sm">
                  <span className="text-[16px] font-bold text-[#1A202C] flex items-center gap-2">
                    Monthly Calls <span className="font-normal text-gray-500">➔</span>
                  </span>
                  <span className="text-[20px] font-extrabold text-[#1A202C]">1,500</span>
                </div>

                {/* Row 2 */}
                <div className="bg-[#EAEAEA]/80 rounded-xl p-4 border border-white/40 flex items-center justify-between shadow-sm">
                  <span className="text-[16px] font-bold text-[#1A202C] flex items-center gap-2">
                    Missed Inquiry % <span className="font-normal text-gray-500">➔</span>
                  </span>
                  <span className="text-[20px] font-extrabold text-[#1A202C]">22%</span>
                </div>

                {/* Row 3 */}
                <div className="bg-[#EAEAEA]/80 rounded-xl p-4 border border-white/40 flex items-center justify-between shadow-sm">
                  <span className="text-[16px] font-bold text-[#1A202C] flex items-center gap-2">
                    Conversion Rate <span className="font-normal text-gray-500">➔</span>
                  </span>
                  <span className="text-[20px] font-extrabold text-[#1A202C]">18%</span>
                </div>

                {/* Row 4 */}
                <div className="bg-[#EAEAEA]/80 rounded-xl p-4 border border-white/40 flex items-center justify-between shadow-sm">
                  <span className="text-[16px] font-bold text-[#1A202C] flex items-center gap-2">
                    Average Job value <span className="font-normal text-gray-500">➔</span>
                  </span>
                  <span className="text-[20px] font-extrabold text-[#1A202C]">$35</span>
                </div>

              </div>

              {/* Bottom Big Recovered Panel */}
              <div className="mt-8 bg-[#F0E6DD]/90 rounded-2xl p-6 border border-white/60 text-center flex flex-col items-center justify-center space-y-3">
                <p className="text-[13px] font-extrabold text-black tracking-wide uppercase">
                  ESTIMATED ANNUAL REVENUE RECOVERED
                </p>
                
                {/* Big Green $ Cursor Block */}
                <div className="flex items-center justify-center font-serif text-5xl md:text-6xl text-[#1E5631] font-normal py-2 tracking-widest">
                  <span>$</span>
                  <span className="animate-pulse ml-1 text-[#22703A]">|</span>
                </div>

                <p className="text-[12px] text-gray-700 max-w-sm leading-tight">
                  Projection based on provided inputs. Results vary by restaurant size and operations.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}