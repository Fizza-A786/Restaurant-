import { motion } from 'framer-motion';
import HeroContent from '../components/Home/HeroContent';
import AIChatPanel from '../components/Home/AIChatPanel';
import VoiceAgentPanel from '../components/Home/VoiceAgentPanel';
import CustomerCareSection from '../components/Home/CustomerCareSection';
import sectionImg from '../assets/Section-01.png';
import WaveformDemoSection from '../components/Home/WaveformDemoSection';
import RevenueLeakageSection from '../components/Home/RevenueLeakageSection';
import WelcomeCTASection from '../components/Home/Welcomectasection ';
import RestaurantRevenueCalculator from '../components/Home/RestaurantRevenueCalculator';
import RestaurantComparisonSection from '../components/Home/RestaurantComparisonSection';
import RestaurantAiWorkforce from '../components/Home/RestaurantAiWorkforce';

export default function Hero() {
  return (
    <main className="w-full flex flex-col">
      
      <section className="relative w-full min-h-[100svh] pt-24 lg:pt-20 flex flex-col lg:flex-row bg-gradient-to-r from-[#9ADBB8]/40 to-white/40 backdrop-blur-lg overflow-hidden">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 relative z-10 pt-4 lg:pt-0">
          <HeroContent />
        </div>

        {/* Right Side Image & Floating Panels */}
        <div className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-1/2 min-h-[100svh] lg:min-h-screen z-0">
          
          <motion.img 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src={sectionImg} 
            alt="Restaurant environment" 
            className="absolute inset-0 w-full h-full object-cover "
          />

          {/* Glass Panels Overlay Container */}
          <div className="hidden lg:flex absolute inset-0 pt-32 pb-16 px-6 sm:px-12 lg:px-16 pointer-events-none flex-col justify-between overflow-visible">
            <AIChatPanel />
            <VoiceAgentPanel />
          </div>

        </div> {/* ← Missing closing div was here */}

      </section>

      <CustomerCareSection />
      <WaveformDemoSection />
      <RevenueLeakageSection />
      <RestaurantRevenueCalculator/>
      <RestaurantComparisonSection/>
      <RestaurantAiWorkforce/>
      
      <WelcomeCTASection/>

    </main>
  );
}