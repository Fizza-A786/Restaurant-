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
    <div className="group relative h-auto min-h-[120px] sm:min-h-[130px] lg:h-[141px] w-full rounded-2xl border border-white bg-white/85 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-4 text-center cursor-default hover:scale-[1.02]">
      <div className="absolute right-3 top-3 sm:right-4 sm:top-3 h-[8px] w-[8px] sm:h-[12px] sm:w-[12px] rounded-full bg-[#3C995B] shadow-[0_0_8px_rgba(60,153,91,0.5)]" />
      <h3 className="text-[32px] sm:text-[36px] lg:text-[42px] font-bold leading-none text-[#C25E42] tracking-tight">
        {value}
      </h3>
      <p className="text-[13px] sm:text-[14px] lg:text-[16px] font-semibold leading-tight text-[#2D2D2D]">
        {label}
      </p>
    </div>
  );
}

function SubCardRow({ icon: Icon, title, desc }) {
  return (
    <div className="flex sm:flex-row flex-col justify-center sm:justify-normal items-center gap-2.5 sm:gap-3 w-full text-left">
      <div className="flex h-[36px] w-[36px] sm:h-[42px] sm:w-[42px] shrink-0 items-center justify-center rounded-xl bg-[#F5E6E1]">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#C25E42]" />
      </div>
      <div className="flex flex-col sm:justify-items-normal  items-center">
        <h4 className="text-[12px] sm:text-[15px] lg:text-[16px] font-bold leading-tight text-black">
          {title}
        </h4>
        <p className="text-[11px] sm:text-[12px] lg:text-[13px] leading-tight text-[#444444] font-medium mt-0.5">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function RevenueLeakageSection() {
  return (
    <section className="relative w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#C25E42]/20 bg-[#F9F6F3]">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Header Section */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-5xl px-2">
          <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[42px]  text-black tracking-tight font-bold leading-[1.1] md:leading-tight">
            Why Most Restaurants Are Quietly Losing Revenue
          </h1>
          <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#666666] font-medium">
            Premium SaaS Analytics Dashboard
          </p>
        </div>

        {/* Dashboard Container with FULL VISIBLE bgImage */}
        <div
          className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-[#E5E7EB] p-4 sm:p-6 md:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden bg-[length:100%_100%] bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(src/assets/bg03.png)`,
            backgroundSize:'contain',
          }}
        >
          {/* NOTE: Agar image ko bilkul raw dekhna hai toh niche wali line ko aise hi rehne dein (No White Mask Layer) */}
          
          <div className="relative z-10 space-y-8 md:space-y-12">
            {/* Top Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {stats.map((item, idx) => (
                <StatCard key={idx} {...item} />
              ))}
            </div>

            {/* Middle Main Banner Area */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10">
              {/* Left Column: Pills & CTA */}
              <div className="hidden md:flex flex-row lg:flex-col flex-wrap justify-center items-center lg:items-start gap-3 sm:gap-4 md:gap-6 w-full lg:w-auto">
                <div className="flex flex-row lg:flex-col flex-wrap justify-center gap-2 sm:gap-3">
                  {[
                    "AI Powered",
                    "Real-Time Insights",
                    "Automation Enabled",
                  ].map((text) => (
                    <div
                      key={text}
                      className="px-4 py-1.5 sm:px-5 sm:py-2 text-[12px] sm:text-sm font-bold text-[#3C995B] bg-[#D6F4DC] border border-[#3C995B]/50 rounded-full whitespace-nowrap shadow-md"
                    >
                      {text}
                    </div>
                  ))}
                </div>

                {/* Hidden on mobile, flex on desktop/tablet */}
                <button className="group hidden sm:flex py-[18px] md:py-[24px] px-[24px] md:px-[32px] text-[15px] md:text-lg font-bold text-white rounded-full bg-[#3C995B] hover:bg-[#32854d] shadow-[0_10px_20px_rgba(60,153,91,0.4)] transition-all duration-300 items-center justify-center gap-2 hover:translate-y-[-2px]">
                  Fix Revenue Leakage
                </button>
              </div>

              {/* Central Oval Badge */}
              <div className="relative w-full lg:flex-1 py-4 lg:py-0 lg:h-[160px] rounded-[40px] sm:rounded-[60px] md:rounded-[100px] border-[3px] border-[#C2FFE5] bg-gradient-to-br from-[#CE7452] via-[#DF6C64] to-[#D7705B] shadow-[0_20px_40px_rgba(218,105,95,0.4)] flex flex-col items-center justify-center text-center px-4 sm:px-8 transition-transform hover:scale-[1.01] duration-500">
                <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
                  Analytics Dashboard
                </span>
                <h2 className="text-[26px] sm:text-[36px] md:text-[44px] lg:text-[30px] font-bold leading-tight md:leading-none text-white mt-2 sm:mt-3 tracking-wide drop-shadow-sm">
                  CRITICAL REVENUE
                  <br />
                  LEAKAGE
                </h2>
              </div>

              {/* Right Invisible Spacer - Maintain original empty space layout */}
              <div className="relative w-[150px] xl:w-[200px] h-[200px] hidden lg:block pointer-events-none" />
            </div>

            {/* Mobile-only CTA */}
           

            {/* Bottom Issues Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {groupedIssues.map((group, index) => (
                <div
                  key={index}
                  className={`group w-full rounded-[20px] sm:rounded-3xl border bg-white/95 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-500 p-4 sm:p-5 md:p-6 flex flex-col justify-between gap-4 sm:gap-5 cursor-default hover:translate-y-[-5px] ${group.borderColor}`}
                >
                  {/* Top Issue */}
                  <SubCardRow {...group.top} />

                  {/* Elegant Divider */}
                  <div className="relative w-full flex items-center justify-center">
                    <div className="w-full h-[1px] bg-[#3C995B61]" />
                    <div className="absolute h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-white border border-[#3C995B61] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <div
                        className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#3C995B]"
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