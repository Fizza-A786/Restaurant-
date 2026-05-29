"use client";
import bgImage from "../../assets/bg03.png";
import {
  AlertTriangle,
  Phone,
  Users,
  Calendar,
  Tag,
  Megaphone,
} from "lucide-react";

const stats = [
  { value: "87", label: "Missed Calls (Last 7 Days)" },
  { value: "$18,500", label: "Estimated Lost Orders" },
  { value: "30%", label: "Unanswered Calls" },
  { value: "25%", label: "No Callback Rate" },
];

const groupedIssues = [
  {
    top: {
      icon: AlertTriangle,
      title: "Missed Calls = Lost Orders",
      desc: "Avg $1,200 daily loss",
    },
    bottom: {
      icon: Phone,
      title: "Order Handling Overload",
      desc: "High-value orders missed",
    },
    borderColor: "border-[#C25E42]/30",
  },
  {
    top: {
      icon: Users,
      title: "Staff Overload",
      desc: "4+ hours repetitive tasks",
    },
    bottom: {
      icon: Calendar,
      title: "Reservation No-Shows",
      desc: "15% seating loss",
    },
    borderColor: "border-[#C25E42]/20",
  },
  {
    top: {
      icon: AlertTriangle,
      title: "Poor Follow-Up",
      desc: "Lost repeat customers",
    },
    bottom: {
      icon: Tag,
      title: "High-Value Order Loss",
      desc: "$50,000+ yearly loss",
    },
    borderColor: "border-[#C25E42]/20",
  },
  {
    top: {
      icon: AlertTriangle,
      title: "Menu Confusion",
      desc: "20% staff time wasted",
    },
    bottom: {
      icon: Megaphone,
      title: "Marketing Leakage",
      desc: "Low ROI from missed leads",
    },
    borderColor: "border-[#C25E42]/20",
  },
];

function StatCard({ value, label }) {
  return (
    <div className="group relative h-[141px] w-full rounded-2xl border border-white bg-white/85 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-2 px-4 text-center cursor-default hover:scale-[1.02]">
      <div className="absolute right-4 top-3 h-[12px] w-[12px] rounded-full bg-[#3C995B] shadow-[0_0_8px_rgba(60,153,91,0.5)]" />
      <h3 className="text-[42px] font-bold leading-none text-[#C25E42] tracking-tight">
        {value}
      </h3>
      <p className="text-[16px] font-semibold leading-tight text-[#2D2D2D]">
        {label}
      </p>
    </div>
  );
}

function SubCardRow({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-center gap-3 w-full text-left">
      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-[#F5E6E1]">
        <Icon className="h-5 w-5 text-[#C25E42]" />
      </div>
      <div className="flex flex-col">
        <h4 className="text-[16px] font-bold leading-tight text-black">
          {title}
        </h4>
        <p className="text-[13px] leading-tight text-[#444444] font-medium mt-0.5">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function RevenueLeakageSection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#C25E42]/20 bg-[#F9F6F3]">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-5xl">
          <h1 className="text-[32px] md:text-[40px] lg:text-[42px] font-semibold text-black tracking-tight leading-tight">
            Why Most Restaurants Are Quietly Losing Revenue
          </h1>
          <p className="text-[14px] md:text-[18px] text-[#666666] font-medium">
            Premium SaaS Analytics Dashboard
          </p>
        </div>

        {/* Dashboard Container with FULL VISIBLE bgImage */}
<div
  className="relative w-full rounded-[40px] border border-[#E5E7EB] p-6 md:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden bg-[length:100%_100%] bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${bgImage.src || bgImage})`,
  }}
>
          {/* NOTE: Agar image ko bilkul raw dekhna hai toh niche wali line ko aise hi rehne dein (No White Mask Layer) */}
          
          <div className="relative z-10 space-y-12">
            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((item, idx) => (
                <StatCard key={idx} {...item} />
              ))}
            </div>

            {/* Middle Main Banner Area */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left Column: Pills & CTA */}
              <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-auto">
                <div className="flex flex-col gap-3">
                  {[
                    "AI Powered",
                    "Real-Time Insights",
                    "Automation Enabled",
                  ].map((text) => (
                    <div
                      key={text}
                      className="px-5 py-2 text-sm font-bold text-[#3C995B] bg-[#D6F4DC] border border-[#3C995B]/50 rounded-full whitespace-nowrap shadow-md"
                    >
                      {text}
                    </div>
                  ))}
                </div>

                {/* Hidden on mobile, flex on desktop/tablet */}
                <button className="group hidden sm:flex py-[24px] px-[32px] text-lg font-bold text-white rounded-full bg-[#3C995B] hover:bg-[#32854d] shadow-[0_10px_20px_rgba(60,153,91,0.4)] transition-all duration-300 items-center justify-center gap-2 hover:translate-y-[-2px]">
                  Fix Revenue Leakage
                </button>
              </div>

              {/* Central Oval Badge (EXACTLY ORIGINAL HEIGHT/WIDTH/FONT) */}
              <div className="relative flex-1 md:w-full aspect-[3/1] lg:aspect-auto lg:h-[220px] rounded-[100px] border-[3px] border-[#C2FFE5] bg-gradient-to-br from-[#CE7452] via-[#DF6C64] to-[#D7705B] shadow-[0_20px_40px_rgba(218,105,95,0.4)] flex flex-col items-center justify-center text-center px-8 transition-transform hover:scale-[1.01] duration-500">
                <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
                  Analytics Dashboard
                </span>
                <h2 className="text-3xl md:text-[50px] lg:text-5xl font-bold leading-none text-white mt-3 tracking-wide drop-shadow-sm">
                  CRITICAL REVENUE
                  <br />
                  LEAKAGE
                </h2>
              </div>

              {/* Right Invisible Spacer - Maintain original empty space layout */}
              <div className="relative w-[200px] h-[200px] hidden lg:block pointer-events-none" />
            </div>

            {/* Bottom Issues Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {groupedIssues.map((group, index) => (
                <div
                  key={index}
                  className={`group w-full rounded-3xl border bg-white/95 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-500 p-6 flex flex-col justify-between gap-5 cursor-default hover:translate-y-[-5px] ${group.borderColor}`}
                >
                  {/* Top Issue */}
                  <SubCardRow {...group.top} />

                  {/* Elegant Divider */}
                  <div className="relative w-full flex items-center justify-center">
                    <div className="w-full h-[1px] bg-gray-200" />
                    <div className="absolute h-5 w-5 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <div
                        className="h-2 w-2 rounded-full bg-[#3C995B]"
                        style={{
                          animation:
                            "customPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                        }}
                      />
                    </div>
                  </div>

                  {/* Bottom Issue */}
                  <SubCardRow {...group.bottom} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes softPulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        @keyframes customPing {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}