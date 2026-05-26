"use client";

import {
  AlertTriangle,
  Phone,
  Users,
  Calendar,
  Tag,
  Megaphone,
} from "lucide-react";

const BgImage = new URL("../../assets/bg03.png", import.meta.url).href;

const stats = [
  {
    value: "87",
    label: "Missed Calls ( Last 7 Days )",
  },
  {
    value: "$18,500",
    label: "Estimated Lost Orders",
  },
  {
    value: "30%",
    label: "Unanswered Calls",
  },
  {
    value: "25%",
    label: "No Callback Rate",
  },
];

const issueCards = [
  {
    icon: AlertTriangle,
    title: "Missed Calls = Lost Orders",
    desc: "Avg $1,200 daily loss",
  },
  {
    icon: Phone,
    title: "Order Handling Overload",
    desc: "High-value orders missed",
  },
  {
    icon: Users,
    title: "Staff Overload",
    desc: "4+ hours repetitive tasks",
  },
  {
    icon: Calendar,
    title: "Reservation No-Shows",
    desc: "15% seating loss",
  },
  {
    icon: AlertTriangle,
    title: "Poor Follow-Up",
    desc: "Lost repeat customers",
  },
  {
    icon: Tag,
    title: "High-Value Order Loss",
    desc: "$50,000+ yearly loss",
  },
  {
    icon: AlertTriangle,
    title: "Menu Confusion",
    desc: "20% staff time wasted",
  },
  {
    icon: Megaphone,
    title: "Marketing Leakage",
    desc: "Low ROI from missed leads",
  },
];

function StatCard({ value, label }) {
  return (
    <div className="relative h-[141px] rounded-2xl border border-white/20 bg-gradient-to-b from-white/40 to-[#F1EEEE]/40 backdrop-blur-xl shadow-[0px_4px_10px_rgba(0,0,0,0.15)]">
      
      {/* Green Dot */}
      <div className="absolute right-4 top-3 h-[15px] w-[15px] rounded-full bg-[#3C995B]" />

      <div className="flex h-full flex-col items-center justify-center gap-3 px-5 text-center">
        <h3 className="text-[42px] font-bold leading-none text-[#C25E42]">
          {value}
        </h3>

        <p className="text-[18px] leading-[23px] text-[#484848]">
          {label}
        </p>
      </div>
    </div>
  );
}

function IssueCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-[#D9C8BE] bg-white/70 p-4 backdrop-blur-xl shadow-[0px_4px_10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
      
      <div className="flex flex-col gap-5">
        
        {/* Top */}
        <div className="flex items-start gap-3">
          
          {/* Icon */}
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-[#EAD7D1]">
            <Icon className="h-5 w-5 text-[#B75739]" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h4 className="text-[17px] font-semibold leading-[21px] text-black">
              {title}
            </h4>

            <p className="mt-1 text-[14px] text-[#666]">
              {desc}
            </p>
          </div>
        </div>

        {/* Progress Line */}
        <div className="relative pt-2">
          
          <div className="h-[2px] w-full rounded-full bg-[#D7EEDC]" />

          <div className="absolute left-1/2 top-1/2 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#3C995B] shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default function RevenueLeakageSection() {
  return (
    <section className="w-full bg-white px-4 py-16 lg:px-8">
      
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[42px]">
        
        {/* Header */}
        <div className="flex max-w-[1306px] flex-col items-center justify-center gap-4 text-center">
          
          <h2 className="text-[32px] font-medium leading-[100%] text-black md:text-[42px]">
            Why Most Restaurants Are Quietly Losing Revenue
          </h2>

          <p className="max-w-[908px] text-[16px] text-[#484848] md:text-[18px]">
            Premium SaaS Analytics Dashboard
          </p>
        </div>

        {/* Dashboard */}
                <div className="relative overflow-hidden rounded-[32px] border border-[#ECE7E2] p-5 sm:p-8 lg:p-10">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${BgImage.src})`,
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

          {/* Content */}
          <div className="relative z-10">
            
            {/* Top Stats */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <StatCard key={item.label} {...item} />
              ))}
            </div>

            {/* Middle Section */}
            <div className="mt-10 grid items-center gap-10 xl:grid-cols-[234px_1fr_220px]">
              
              {/* Left Tags */}
              <div className="flex flex-col items-start gap-[18px]">
                
                <div className="flex flex-col gap-[17px]">
                  {[
                    "AI Powered",
                    "Real-Time Insights",
                    "Automation Enabled",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="flex h-[45px] items-center justify-center rounded-full border border-[#3C995B] bg-[#D6F4DC] px-5 text-[16px] text-black shadow-sm"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <button className="flex h-[60px] w-full items-center justify-center rounded-full border border-white bg-[radial-gradient(circle_at_top_left,rgba(175,217,177,0.89),rgba(60,153,91,0.89))] px-8 text-[18px] font-medium text-black shadow-[0px_0px_30px_rgba(0,0,0,0.15)] backdrop-blur-[39px] transition-all duration-300 hover:scale-105">
                  Fix Revenue Leakage
                </button>
              </div>

              {/* Center Pill */}
              <div className="relative mx-auto flex min-h-[205px] w-full max-w-[663px] flex-col items-center justify-center rounded-[100px] border-2 border-[#C2FFE5] bg-gradient-to-r from-[#CE7452] via-[#DF6C64] to-[#D7705B] px-6 text-center shadow-[8px_17px_21px_rgba(218,105,95,0.4)]">
                
                <p className="text-[18px] font-medium text-white">
                  Analytics Dashboard
                </p>

                <h3 className="mt-4 text-[34px] font-bold uppercase leading-[120%] text-white md:text-[50px]">
                  Critical Revenue
                  <br />
                  Leakage
                </h3>
              </div>

            </div>

            {/* Bottom Cards */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {issueCards.map((item) => (
                <IssueCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}