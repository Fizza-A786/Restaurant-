"use client";
import React from "react";
// Local asset path import matching your directory structure
import bgImage from "../../assets/bg.png";

export default function RestaurantRevenueCalculator() {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center space-y-3 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[42px]  text-black tracking-tight font-bold leading-[1.1] md:leading-tight">
            How Much Revenue Is Your Restaurant Losing?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#666666]">
            Estimate your lost and recoverable revenue based on real customer communication and order behavior.
          </p>
        </div>

        {/* Main Dashboard Box using Local Asset Background */}
        <div 
          className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden bg-cover bg-center bg-no-repeat shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-5 sm:p-8 md:p-10 lg:p-14"
          style={{
            backgroundImage: `url(${bgImage.src || bgImage})`,
          }}
        >
          {/* Subtle Layer Overlay */}
          <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

          {/* Two Columns Grid Wrapper */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-8 max-w-6xl mx-auto">
            
            {/* LEFT GLASS CARD */}
            <div className="flex-1 rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/40 backdrop-blur-xl p-5 sm:p-8 md:p-10 flex flex-col justify-between shadow-sm">
              
              {/* Upper Stats Readout */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between border-b border-[#1A202C]/10 pb-3 gap-2">
                  <span className="text-[22px] sm:text-[28px] font-extrabold text-[#1A202C]">1,500</span>
                  <span className="text-[13px] sm:text-[16px] font-semibold text-[#1A202C] text-right">Monthly Calls / Order Inquiries</span>
                </div>
                
                <div className="flex items-center justify-between border-b border-[#1A202C]/10 pb-3 gap-2">
                  <span className="text-[22px] sm:text-[28px] font-extrabold text-[#1A202C]">22%</span>
                  <span className="text-[13px] sm:text-[16px] font-semibold text-[#1A202C] text-right">Missed Calls</span>
                </div>
                
                <div className="flex items-center justify-between border-b border-[#1A202C]/10 pb-3 gap-2">
                  <span className="text-[22px] sm:text-[28px] font-extrabold text-[#1A202C]">18%</span>
                  <span className="text-[13px] sm:text-[16px] font-semibold text-[#1A202C] text-right">Order Conversion Rate</span>
                </div>
                
                <div className="flex items-center justify-between border-b border-[#1A202C]/10 pb-3 gap-2">
                  <span className="text-[22px] sm:text-[28px] font-extrabold text-[#1A202C]">$35</span>
                  <span className="text-[13px] sm:text-[16px] font-semibold text-[#1A202C] text-right">Average Order Value</span>
                </div>
              </div>

              {/* Bottom Calculated Leakage */}
              <div className="mt-10 sm:mt-16 space-y-4">
                <p className="text-[13px] sm:text-[15px] font-bold text-black uppercase tracking-wide">
                  Calculated Revenue Loss:
                </p>
                
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[14px] sm:text-[17px] font-medium text-[#333333]">Lost Monthly Revenue:</span>
                  <span className="text-[22px] sm:text-[28px] font-extrabold text-black">$207,900</span>
                </div>
                
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[14px] sm:text-[17px] font-medium text-[#333333]">Lost Annually:</span>
                  <span className="text-[26px] sm:text-[32px] font-extrabold text-black">$2,494,800</span>
                </div>
              </div>

            </div>

            {/* RIGHT GLASS CARD WITH EXACT INNER BOXES */}
            <div className="flex-1 rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/30 backdrop-blur-xl p-5 sm:p-8 md:p-10 flex flex-col justify-between shadow-sm relative pt-12 sm:pt-14">
              
              {/* Badges on top corner - Made responsive to prevent overflow on mobile */}
              <div className="absolute -top-3 sm:-top-4 right-4 sm:right-8 flex flex-row items-center justify-end gap-1.5 sm:gap-2 w-full max-w-[90%] flex-wrap sm:flex-nowrap">
                <span className="bg-[#C2FFE5] text-[#276B43] text-[9px] sm:text-[11px] font-bold px-2 sm:px-3 py-1 rounded-md border border-[#3C995B]/20 whitespace-nowrap shadow-sm">
                  AI Powered
                </span>
                <span className="bg-[#C2FFE5] text-[#276B43] text-[9px] sm:text-[11px] font-bold px-2 sm:px-3 py-1 rounded-md border border-[#3C995B]/20 whitespace-nowrap shadow-sm">
                  Real-Time Optimization
                </span>
              </div>

              {/* Inner Boxes Rows */}
              <div className="space-y-3 sm:space-y-3.5">
                
                {/* Row 1 */}
                <div className="bg-[#EAEAEA]/80 rounded-xl p-3.5 sm:p-4 border border-white/40 flex items-center justify-between shadow-sm gap-2">
                  <span className="text-[14px] sm:text-[16px] font-bold text-[#1A202C] flex items-center gap-1.5 sm:gap-2 leading-tight">
                    Monthly Calls <span className="font-normal text-gray-500 text-xs sm:text-sm">➔</span>
                  </span>
                  <span className="text-[18px] sm:text-[20px] font-extrabold text-[#1A202C]">1,500</span>
                </div>

                {/* Row 2 */}
                <div className="bg-[#EAEAEA]/80 rounded-xl p-3.5 sm:p-4 border border-white/40 flex items-center justify-between shadow-sm gap-2">
                  <span className="text-[14px] sm:text-[16px] font-bold text-[#1A202C] flex items-center gap-1.5 sm:gap-2 leading-tight">
                    Missed Inquiry % <span className="font-normal text-gray-500 text-xs sm:text-sm">➔</span>
                  </span>
                  <span className="text-[18px] sm:text-[20px] font-extrabold text-[#1A202C]">22%</span>
                </div>

                {/* Row 3 */}
                <div className="bg-[#EAEAEA]/80 rounded-xl p-3.5 sm:p-4 border border-white/40 flex items-center justify-between shadow-sm gap-2">
                  <span className="text-[14px] sm:text-[16px] font-bold text-[#1A202C] flex items-center gap-1.5 sm:gap-2 leading-tight">
                    Conversion Rate <span className="font-normal text-gray-500 text-xs sm:text-sm">➔</span>
                  </span>
                  <span className="text-[18px] sm:text-[20px] font-extrabold text-[#1A202C]">18%</span>
                </div>

                {/* Row 4 */}
                <div className="bg-[#EAEAEA]/80 rounded-xl p-3.5 sm:p-4 border border-white/40 flex items-center justify-between shadow-sm gap-2">
                  <span className="text-[14px] sm:text-[16px] font-bold text-[#1A202C] flex items-center gap-1.5 sm:gap-2 leading-tight">
                    Average Job value <span className="font-normal text-gray-500 text-xs sm:text-sm">➔</span>
                  </span>
                  <span className="text-[18px] sm:text-[20px] font-extrabold text-[#1A202C]">$35</span>
                </div>

              </div>

              {/* Bottom Big Recovered Panel */}
              <div className="mt-6 sm:mt-8 bg-[#F0E6DD]/90 rounded-2xl p-5 sm:p-6 border border-white/60 text-center flex flex-col items-center justify-center space-y-2 sm:space-y-3">
                <p className="text-[11px] sm:text-[13px] font-extrabold text-black tracking-wide uppercase">
                  ESTIMATED ANNUAL REVENUE RECOVERED
                </p>
                
                {/* Big Green $ Cursor Block */}
                <div className="flex items-center justify-center font-serif text-4xl sm:text-5xl md:text-6xl text-[#1E5631] font-normal py-1 sm:py-2 tracking-widest">
                  <span>$</span>
                  <span className="animate-pulse ml-1 text-[#22703A]">|</span>
                </div>

                <p className="text-[11px] sm:text-[12px] text-gray-700 max-w-sm leading-tight px-2">
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