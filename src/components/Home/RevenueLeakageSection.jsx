import bg03Img from '../../assets/bg03.png';

export default function RevenueLeakageSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-8 sm:mb-12 px-4 z-10 relative">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#0A0A0A] mb-3 tracking-tight">
          Why Most Restaurants Are Quietly Losing Revenue
        </h2>
        <p className="text-[#6B7280] text-[18px] sm:text-base font-medium tracking-wide">
          Premium SaaS Analytics Dashboard
        </p>
      </div>

      <div className="relative z-10 w-[95%] max-w-[1200px] mx-auto flex items-center justify-center">
        <img 
          src={bg03Img} 
          alt="Revenue Leakage Analytics Dashboard" 
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.07)]"
        />
      </div>
    </section>
  );
}
