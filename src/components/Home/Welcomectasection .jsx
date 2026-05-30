'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
// Using your local asset containing the built-in white box card
import bgBannerImage from '../../assets/foter.png'

export default function WelcomeCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px', amount: 0.15 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full px-4 sm:px-6 lg:px-8 overflow-x-hidden my-8"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Main Banner Wrapper */}
        <div 
          className="relative w-full rounded-2xl sm:rounded-[32px] overflow-hidden bg-cover bg-center bg-no-repeat h-[180px] xs:h-[220px] sm:h-[300px] md:h-[380px] lg:h-[450px]"
          style={{ backgroundImage: `url(${bgBannerImage.src || bgBannerImage})` }}
        >
          
          {/* TEXT & BUTTON OVERLAY */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-1 xs:pt-2 sm:pt-4 md:pt-5">
            <div className="w-full max-w-[240px] xs:max-w-[290px] sm:max-w-[390px] md:max-w-[460px] flex flex-col items-center gap-1.5 sm:gap-3 md:gap-4 text-center">
              
              {/* Responsive Headline Group */}
              <div className="flex flex-col items-center gap-0 sm:gap-0.5 w-full select-none">
                <h2
                  className="text-gray-900 font-bold leading-tight m-0 tracking-tight"
                  style={{ fontSize: 'clamp(11px, 3.4vw, 22px)' }}
                >
                  Let AI Run Your Orders -
                </h2>
                <div
                  className="text-gray-900 font-bold leading-tight m-0 flex items-center justify-center gap-1 flex-wrap tracking-tight"
                  style={{ fontSize: 'clamp(11px, 3.4vw, 22px)' }}
                >
                  So You Can Focus on&nbsp;
                  <span>
                    Customers
                  </span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-row justify-center gap-1.5 sm:gap-2.5 w-full px-2 sm:px-6">
                {/* Primary Button — Start Free Trial */}
                <a
                  href="/signup"
                  className="flex-1 inline-flex items-center justify-center rounded-md sm:rounded-lg font-semibold no-underline transition-all duration-200 hover:opacity-90 active:scale-[0.97] whitespace-nowrap text-center"
                  style={{
                    // Increased first parameter here for more vertical padding (py)
                    padding: 'clamp(6px, 1.4vw, 12px) clamp(4px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1.8vw, 13px)',
                    background: 'radial-gradient(ellipse at 40% 15%, rgba(175,217,177,0.95) 0%, rgba(60,153,91,0.95) 100%)',
                    color: '#000000',
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 1px 4px rgba(60,153,91,0.12)',
                    // Increased minHeight slightly to respect the taller py scale
                    minHeight: 'clamp(24px, 5vw, 42px)',
                  }}
                >
                  Start Free Trial
                </a>

                {/* Secondary Button — Book a Demo */}
                <a
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center rounded-md sm:rounded-lg font-semibold no-underline transition-all duration-200 hover:bg-gray-50 active:scale-[0.97] whitespace-nowrap text-center"
                  style={{
                    // Increased first parameter here for more vertical padding (py)
                    padding: 'clamp(6px, 1.4vw, 12px) clamp(4px, 1.2vw, 12px)',
                    fontSize: 'clamp(8px, 1.8vw, 13px)',
                    background: '#ffffff',
                    color: '#3C995B',
                    border: '1px solid #3C995B',
                    // Increased minHeight slightly to respect the taller py scale
                    minHeight: 'clamp(24px, 5vw, 42px)',
                  }}
                >
                  Book a Demo
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.section> 
  )
}