'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
// Importing from src/assets/bg.png
import bgBannerImage from '../../assets/bg.png'

export default function WelcomeCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px', amount: 0.15 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Banner container with fixed background string interpolation (.src) */}
        <div 
          className="relative w-full rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#FAF8F5] bg-cover bg-center bg-no-repeat h-[200px] xs:h-[220px] sm:h-[300px] md:h-[380px] lg:h-[434px]"
          style={{ backgroundImage: `url(${bgBannerImage.src})` }}
        >

          {/* Dark overlay for readability on small screens */}
          <div className="absolute inset-0 bg-black/20 sm:bg-transparent" />

          {/* CTA card — centered overlay */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
            <div
              className="
                w-full
                max-w-[min(419px,90%)]
                sm:max-w-[480px]
                md:max-w-[520px]
                rounded-2xl sm:rounded-[20px]
                px-5 py-5
                sm:px-8 sm:py-7
                flex flex-col items-center gap-4 sm:gap-5
              "
              style={{
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
              }}
            >
              {/* Headline */}
              <div className="flex flex-col items-center gap-1 sm:gap-2 text-center">
                <h2
                  className="text-black font-medium leading-tight m-0"
                  style={{ fontSize: 'clamp(16px, 3.5vw, 24px)' }}
                >
                  Let AI Run Your Orders -
                </h2>
                <div
                  className="text-black font-medium leading-tight m-0 flex items-center gap-2 flex-wrap justify-center"
                  style={{ fontSize: 'clamp(16px, 3.5vw, 24px)' }}
                >
                  So You Can Focus on&nbsp;
                  <span className="relative inline-block">
                    Customers
                    {/* Green underline accent */}
                    <span
                      className="absolute left-0"
                      style={{
                        height: 'clamp(3px, 0.5vw, 5px)',
                        background: '#3C995B',
                        borderRadius: '2px',
                        bottom: '-3px',
                        width: '100%',
                      }}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-row  mt-3 justify-center gap-3 sm:gap-4 w-full">
                {/* Primary — Start Free Trial */}
                <a
                  href="/signup"
                  className="
                    inline-flex items-center justify-center
                    rounded-xl
                    font-medium no-underline
                    transition-opacity hover:opacity-90 active:scale-[0.98]
                    whitespace-nowrap
                  "
                  style={{
                    padding: 'clamp(10px, 1.5vw, 14px) clamp(20px, 3vw, 32px)',
                    fontSize: 'clamp(13px, 2vw, 17px)',
                    background: 'radial-gradient(ellipse at 40% 15%, rgba(175,217,177,0.95) 0%, rgba(60,153,91,0.95) 100%)',
                    color: '#000',
                    border: '1px solid #fff',
                    boxShadow: '0 0 30px rgba(0,0,0,0.12)',
                    minHeight: 'clamp(38px, 6vw, 52px)',
                  }}
                >
                  Start Free Trial
                </a>

                {/* Secondary — Book a Demo */}
                <a
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-xl
                    font-medium no-underline
                    transition-colors hover:bg-gray-50 active:scale-[0.98]
                    whitespace-nowrap
                  "
                  style={{
                    padding: 'clamp(10px, 1.5vw, 14px) clamp(20px, 3vw, 32px)',
                    fontSize: 'clamp(13px, 2vw, 17px)',
                    background: '#fff',
                    color: '#3C995B',
                    border: '1px solid #3C995B',
                    minHeight: 'clamp(38px, 6vw, 52px)',
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