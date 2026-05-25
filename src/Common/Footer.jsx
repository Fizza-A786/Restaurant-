import React from 'react'
import { Send } from 'lucide-react'
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { useI18n } from '@/lib/i18n-client'

export default function Footer() {
  const { t } = useI18n()

  const solutionsLinks = [
    { label: t('nav.webAgency', 'Web Agency'), href: '/solutions/web-agency' },
    { label: t('nav.digitalAgency', 'Digital Agency'), href: '/solutions/digital-agency' },
    { label: t('nav.startups', 'Startups'), href: '/solutions/startups' },
    { label: t('nav.saas', 'SaaS'), href: '/solutions/saas' },
    { label: t('nav.sales', 'Sales Automation'), href: '/solutions/sales' },
  ]

  const platformLinks = [
    { label: t('nav.aiWorkforce', 'AI Workforce'), href: '/platform/ai-workforce' },
    { label: t('nav.marketplace', 'Marketplace'), href: '/marketplace' },
    { label: t('nav.automations', 'Automations'), href: '/platform/automations' },
    { label: t('nav.projectManagement', 'Project Management'), href: '/platform/project-management' },
    { label: t('nav.payments', 'Payments'), href: '/platform/payments' },
  ]

  const areasLinks = [
    { label: t('nav.primaryCare', 'Primary Care'), href: '/industries/primary-care/workflow' },
    { label: t('nav.dentalPractices', 'Dental Practices'), href: '/industries/dental/workflow' },
    { label: t('nav.salons', 'Salons'), href: '/industries/salons/workflow' },
    { label: t('nav.homeServices', 'Home Services'), href: '/industries/home-services/workflow' },
    { label: t('nav.restaurants', 'Restaurants'), href: '/industries/restaurants/workflow' },
  ]

  const resourceLinks = [
    { label: t('footer.blog', 'Blog'), href: '/blog' },
    { label: t('footer.documentation', 'Documentation'), href: '/docs' },
    { label: t('footer.helpCenter', 'Help Center'), href: '/help' },
    { label: t('footer.status', 'System Status'), href: '/status' },
  ]

  const companyLinks = [
    { label: t('footer.aboutUs', 'About Us'), href: '/about' },
    { label: t('footer.careers', 'Careers'), href: '/careers' },
    { label: t('footer.contact', 'Contact'), href: '/contact' },
    { label: t('footer.partners', 'Partners'), href: '/partners' },
  ]

  const legalLinks = [
    { label: t('footer.privacy', 'Privacy Policy'), href: '/privacy' },
    { label: t('footer.terms', 'Terms of Service'), href: '/terms' },
    { label: t('footer.security', 'Security'), href: '/security' },
  ]

  return (
    <footer className="bg-[#052d24] text-white border-t border-white/10 pt-16 pb-8 px-6 md:px-12 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Main Columns Container - wraps on screens < 1400px */}
        <div className="flex flex-row flex-wrap gap-x-8 gap-y-12 items-start justify-between w-full">
          
          {/* Column 1: Newsletter (newsletter keeps fixed width but shrinks below 768px) */}
          <div className="w-[320px] shrink md:shrink-0 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-wide" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Daitch<span className="text-[#82C1A6]">Pro</span>
              </span>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
              {t('footer.description', 'Empowering local businesses with state-of-the-art AI receptionist, ordering, and booking workflows.')}
            </p>

            {/* Newsletter Input */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-[#82C1A6] uppercase tracking-wider" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {t('footer.subscribeTitle', 'Stay Updated')}
              </h4>
              <div className="relative w-full max-w-sm">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder', 'Enter your email')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#82C1A6] transition-colors"
                />
                <button 
                  className="absolute right-1.5 top-1.5 p-2 bg-[#82C1A6] hover:bg-[#6FA990] text-[#052d24] rounded-lg transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social media icons - uniform p-3 padding for consistent icon centering */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FaFacebook, href: '#', label: 'Facebook' },
                { Icon: FaXTwitter, href: '#', label: 'Twitter' },
                { Icon: FaInstagram, href: '#', label: 'Instagram' },
                { Icon: FaLinkedin, href: '#', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 bg-white/5 hover:bg-[#82C1A6] text-white hover:text-[#052d24] rounded-xl transition-all duration-200 flex items-center justify-center"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="min-w-[120px] flex-1 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[#82C1A6] uppercase tracking-wider" style={{ fontFamily: "'Roboto', sans-serif" }}>
              {t('nav.solution', 'Solutions')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {solutionsLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-[#82C1A6] transition-colors text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div className="min-w-[120px] flex-1 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[#82C1A6] uppercase tracking-wider" style={{ fontFamily: "'Roboto', sans-serif" }}>
              {t('nav.platform', 'Platform')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-[#82C1A6] transition-colors text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Areas We Handle */}
          <div className="min-w-[120px] flex-1 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[#82C1A6] uppercase tracking-wider" style={{ fontFamily: "'Roboto', sans-serif" }}>
              {t('nav.areasWeHandle', 'Areas')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {areasLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-[#82C1A6] transition-colors text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div className="min-w-[120px] flex-1 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[#82C1A6] uppercase tracking-wider" style={{ fontFamily: "'Roboto', sans-serif" }}>
              {t('footer.resources', 'Resources')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-[#82C1A6] transition-colors text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 6: Company */}
          <div className="min-w-[120px] flex-1 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[#82C1A6] uppercase tracking-wider" style={{ fontFamily: "'Roboto', sans-serif" }}>
              {t('footer.company', 'Company')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-[#82C1A6] transition-colors text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 7: Legal */}
          <div className="min-w-[120px] flex-1 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[#82C1A6] uppercase tracking-wider" style={{ fontFamily: "'Roboto', sans-serif" }}>
              {t('footer.legal', 'Legal')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-[#82C1A6] transition-colors text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright row */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-xs">
          <p style={{ fontFamily: "'Roboto', sans-serif" }}>
            &copy; {new Date().getFullYear()} DaitchPro. {t('footer.allRightsReserved', 'All rights reserved.')}
          </p>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-white transition-colors">{t('footer.termsShort', 'Terms')}</a>
            <a href="/privacy" className="hover:text-white transition-colors">{t('footer.privacyShort', 'Privacy')}</a>
          </div>
        </div>

      </div>
    </footer>
  )
}