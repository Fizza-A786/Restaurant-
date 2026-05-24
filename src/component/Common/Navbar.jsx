import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Bot } from 'lucide-react'
import { MAIN_AGENTS, slugifyAgentName, getMainAgentProductHref } from '@/lib/ai-agent-catalog'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useI18n } from '@/lib/i18n-client'

export default function Navbar() {
  const { t } = useI18n()
  const [ setIsScrolled] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [hoveredMainAgentIndex, setHoveredMainAgentIndex] = useState(0)
  const navRef = useRef(null)
  const navInnerRef = useRef(null)
  const solutionsDropdownRef = useRef(null)
  const platformDropdownRef = useRef(null)
  const areasDropdownRef = useRef(null)
  const aiAgentsDropdownRef = useRef(null)
  const getStartedDropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
        setIsNavbarVisible(false)
      } else {
        setIsNavbarVisible(true)
      }
      lastScrollYRef.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Set CSS variable for navbar height so banner can use it
    const updateNavbarHeight = () => {
      if (navInnerRef.current) {
        const height = navInnerRef.current.getBoundingClientRect().height
        document.documentElement.style.setProperty('--navbar-height', `${height}px`)
      }
    }

    // Initial calculation
    updateNavbarHeight()

    // Update on resize and when mobile menu toggles
    window.addEventListener('resize', updateNavbarHeight)

    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(updateNavbarHeight, 100)

    return () => {
      window.removeEventListener('resize', updateNavbarHeight)
      clearTimeout(timeoutId)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      const target = event.target
      const isOutsideSolutions = solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(target)
      const isOutsidePlatform = platformDropdownRef.current && !platformDropdownRef.current.contains(target)
      const isOutsideAreas = areasDropdownRef.current && !areasDropdownRef.current.contains(target)
      const isOutsideAiAgents = aiAgentsDropdownRef.current && !aiAgentsDropdownRef.current.contains(target)
      const isOutsideGetStarted = getStartedDropdownRef.current && !getStartedDropdownRef.current.contains(target)

      if (
        isOutsideSolutions &&
        isOutsidePlatform &&
        isOutsideAreas &&
        isOutsideAiAgents &&
        isOutsideGetStarted
      ) {
        setOpenDropdown(null)
      }
    }

    if (openDropdown) {
      // Use a small delay to allow Link clicks to process first
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside)
      }, 10)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdown])

  const solutionsItems = [
    { labelKey: 'nav.webAgency', href: '/solutions/web-agency' },
    { labelKey: 'nav.digitalAgency', href: '/solutions/digital-agency' },
    { labelKey: 'nav.startups', href: '/solutions/startups' },
    { labelKey: 'nav.saas', href: '/solutions/saas' },
    { labelKey: 'nav.socialMediaAgency', href: '/solutions/social-media-agency' },
    { labelKey: 'nav.marketing', href: '/solutions/marketing' },
    { labelKey: 'nav.creativeAgencies', href: '/solutions/creative-agencies' },
    { labelKey: 'nav.softwareVendor', href: '/solutions/software-vendor' },
    { labelKey: 'nav.sales', href: '/solutions/sales' },
  ]

  const platformItems = [
    { labelKey: 'nav.aiWorkforce', href: '/platform/ai-workforce' },
    { labelKey: 'nav.marketplace', href: '/marketplace' },
    { labelKey: 'nav.automations', href: '/platform/automations' },
    { labelKey: 'nav.projectManagement', href: '/platform/project-management' },
    { labelKey: 'nav.payments', href: '/platform/payments' },
    { labelKey: 'footer.daitchproAffiliate', href: '/affiliate' },
  ]

  const areasItems = [
    { labelKey: 'nav.primaryCare', href: '/industries/primary-care/workflow' },
    { labelKey: 'nav.dentalPractices', href: '/industries/dental/workflow' },
    { labelKey: 'nav.salons', href: '/industries/salons/workflow' },
    { labelKey: 'nav.homeServices', href: '/industries/home-services/workflow' },
    { labelKey: 'nav.restaurants', href: '/industries/restaurants/workflow' },
    { labelKey: 'nav.automotiveDealerships', href: '/industries/automotive/workflow' },
    { labelKey: 'nav.realEstate', href: '/industries/real-estate/workflow' },
    { labelKey: 'nav.veterinaryClinics', href: '/industries/veterinary/workflow' },
    { labelKey: 'nav.professionalServices', href: '/industries/professional-services/workflow' },
    { labelKey: 'nav.retailEcommerce', href: '/industries/retail/workflow' },
  ]

  return (
    <nav
      ref={navRef}
      className="fixed left-0 right-0 z-50 flex justify-center px-4 w-full transition-transform duration-300 ease-in-out overflow-visible"
      style={{
        top: 'var(--announcement-banner-height, 47px)',
        transform: isNavbarVisible ? 'translateY(0)' : 'translateY(-150%)',
      }}
    >
      <div ref={aiAgentsDropdownRef} className="navbar-outer relative w-full max-w-[1600px] mx-auto px-6">
      <div
        ref={navInnerRef}
        className="navbar-bar relative flex items-center justify-between w-full max-w-full pl-8 pr-8 overflow-visible gap-x-6"
        data-navbar-desktop
        style={{
          height: 84,
          minHeight: 84,
          transformOrigin: 'top center',
          borderRadius: 8,
          border: '1px solid rgba(255, 255, 255, 0.16)',
          background: 'rgba(255, 255, 255, 0.35)',
          boxShadow: '0 0 13.3px 0 rgba(102, 102, 102, 0.25)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* Logo - scales down on smaller/Windows screens */}
        <a
          href="/"
          className="navbar-compact-logo flex items-center justify-start flex-shrink-0 h-[41px] min-w-0 max-w-[231px] w-auto"
        >
          <img
            src="/Website Logo.png"
            alt={'DaitchPro Logo'}
            className="navbar-logo-img block h-[41px] w-auto max-w-[231px] max-h-[41px] object-contain object-left brightness-0"
          />
        </a>

        {/* Desktop navigation - consistent 24px gaps on Mac & Windows */}
        <div className="navbar-gap hidden min-[920px]:flex flex-nowrap items-center flex-1 justify-center min-w-0 shrink gap-x-6 overflow-visible">
              {/* AI Agents Dropdown - Vendasta-style full-width */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenDropdown(openDropdown === 'ai-agents' ? null : 'ai-agents')
                  }}
                  className="navbar-item text-[#383838] hover:text-[#3C995B] transition-colors flex flex-shrink-0 items-center gap-2 py-0 px-0 whitespace-nowrap"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '21px' }}
                >
                  <Bot className="w-5 h-5 shrink-0 text-[#3C995B]" aria-hidden />
                  {t('nav.aiAgents', 'AI Agents')}
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${openDropdown === 'ai-agents' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Solution Dropdown */}
              <div className="relative" ref={solutionsDropdownRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions')
                  }}
                  className="navbar-item text-[#383838] hover:text-[#3C995B] transition-colors flex flex-shrink-0 items-center gap-1 py-0 px-0 whitespace-nowrap"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '21px' }}
                >
                  {t('nav.solution', 'Solution')}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-56 max-h-[70vh] overflow-y-auto overscroll-contain bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-xl py-2 z-50">
                    {solutionsItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 transition-colors text-sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          setOpenDropdown(null)
                        }}
                      >
                        {t(item.labelKey, item.labelKey)}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Platform Dropdown */}
              <div className="relative" ref={platformDropdownRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenDropdown(openDropdown === 'platform' ? null : 'platform')
                  }}
                  className="navbar-item text-[#383838] hover:text-[#3C995B] transition-colors flex flex-shrink-0 items-center gap-1 py-0 px-0 whitespace-nowrap"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '21px' }}
                >
                  {t('nav.platform', 'Platform')}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'platform' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'platform' && (
                  <div className="absolute top-full left-0 mt-2 w-56 max-h-[70vh] overflow-y-auto overscroll-contain bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-xl py-2 z-50">
                    {platformItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 transition-colors text-sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          setOpenDropdown(null)
                        }}
                      >
                        {t(item.labelKey, item.labelKey)}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Areas We Handle Dropdown */}
              <div className="relative" ref={areasDropdownRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenDropdown(openDropdown === 'areas' ? null : 'areas')
                  }}
                  className="navbar-item text-[#383838] hover:text-[#3C995B] transition-colors flex flex-shrink-0 items-center gap-1 py-0 px-0 whitespace-nowrap"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '21px' }}
                >
                  {t('nav.areasWeHandle', 'Areas We Handle')}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'areas' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'areas' && (
                  <div className="absolute top-full left-0 mt-2 w-64 max-h-[70vh] overflow-y-auto overscroll-contain bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-xl py-2 z-50">
                    {areasItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 transition-colors text-sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          setOpenDropdown(null)
                        }}
                      >
                        {t(item.labelKey, item.labelKey)}
                      </a>
                    ))}
                    <a
                      href="/industries"
                      className="block px-4 py-2 text-[#3C995B] hover:bg-gray-100 transition-colors text-sm font-semibold border-t border-gray-200 mt-2 pt-2"
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(null)
                      }}
                    >
                      {t('nav.viewMore', 'View More →')}
                    </a>
                  </div>
                )}
              </div>

              <a href="#pricing" className="navbar-item text-[#383838] hover:text-[#3C995B] transition-colors py-0 px-0 flex-shrink-0 whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '21px' }}>
                {t('nav.pricing', 'Pricing')}
              </a>
        </div>

        {/* User actions - same 24px gap as nav items for Mac/Windows parity */}
        <div className="navbar-gap hidden min-[920px]:flex flex-nowrap items-center flex-shrink-0 gap-x-6 overflow-visible">
              <LanguageSwitcher variant="navbar" />
              <a 
                href="/login" 
                className="navbar-item text-[#383838] hover:text-[#3C995B] transition-colors whitespace-nowrap flex-shrink-0"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '21px' }}
              >
                {t('nav.login', 'Sign In')}
              </a>
              <div className="relative flex-shrink-0" ref={getStartedDropdownRef}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenDropdown(openDropdown === 'get-started' ? null : 'get-started')
                  }}
                  className="navbar-get-started inline-flex flex-shrink-0 justify-center items-center gap-2 h-12 px-6 sm:px-8 py-6 rounded-xl text-black whitespace-nowrap"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 500,
                    fontSize: 18,
                    lineHeight: '21px',
                    background:
                      'radial-gradient(59.41% 515.38% at 40.59% 15.83%, rgba(175, 217, 177, 0.89) 0%, rgba(60, 153, 91, 0.89) 100%)',
                    opacity: 0.9,
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(39.45px)',
                  }}
                >
                  {t('nav.signUp', 'Get Started')}
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform ${openDropdown === 'get-started' ? 'rotate-180' : ''}`}
                  />
                </button>
                {openDropdown === 'get-started' && (
                  <div className="absolute top-full right-0 mt-2 w-56 max-h-[70vh] overflow-y-auto overscroll-contain bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-xl py-2 z-50">
                    {(
                      [
                        { href: '/signup?role=client', labelKey: 'auth.client', fallback: 'Client' },
                        { href: '/signup?role=agency_owner', labelKey: 'auth.agencyOwner', fallback: 'Agency Owner' },
                        { href: '/signup?role=seller', labelKey: 'auth.seller', fallback: 'Seller' },
                        { href: '/signup?role=buyer', labelKey: 'auth.buyer', fallback: 'Buyer' },
                        {
                          href: '/affiliate/register',
                          labelKey: 'nav.affiliateUser',
                          fallback: 'Affiliate user',
                        },
                      ]
                    ).map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 transition-colors text-sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          setOpenDropdown(null)
                        }}
                      >
                        {t(item.labelKey, item.fallback)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
        </div>

        {/* Mobile Menu Button - only when desktop nav hidden */}
        <button
          className="min-[920px]:hidden p-2 ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-[#383838]" />
          ) : (
            <Menu className="h-6 w-6 text-[#383838]" />
          )}
        </button>
      </div>

      {/* AI Agents dropdown - sibling of bar, positioned below for proper display */}
      {openDropdown === 'ai-agents' && (
        <div
          className="ai-agents-dropdown-panel absolute left-0 right-0 top-full z-[60] rounded-b-lg overflow-hidden shadow-2xl flex flex-col w-full"
          style={{
            marginTop: '-1px',
            width: '100%',
            maxWidth: '100%',
            height: '520px',
            background: 'linear-gradient(180deg, #063A2F 0%, #052d24 100%)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderTop: 'none',
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setOpenDropdown(null) }}
            className="absolute top-4 right-4 p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Close AI Agents menu"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex flex-row flex-1 min-h-0 h-full">
            <div className="ai-dropdown-sidebar w-[280px] shrink-0 flex flex-col py-3 border-r border-white/10 overflow-y-auto overscroll-contain flex-shrink-0 scrollbar-ai-dropdown">
              <div className="px-5 py-1.5 text-[#82C1A6] font-bold text-xs uppercase tracking-wide" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {t('ai.dropdownTitle', 'DaitchPro AI Solutions')}
              </div>
              <ul className="flex flex-col gap-0">
                {MAIN_AGENTS.map((agent, idx) => (
                  <li key={agent.name}>
                    <a
                      href={getMainAgentProductHref(agent.name)}
                      onMouseEnter={() => setHoveredMainAgentIndex(idx)}
                      className={`flex items-center gap-2.5 px-5 py-2.5 transition-colors text-[14px] ${hoveredMainAgentIndex === idx ? 'bg-white/10 text-white' : 'text-white/90 hover:bg-white/5 hover:text-white'}`}
                      style={{ fontFamily: "'Roboto', sans-serif", fontSize: '15px' }}
                      onClick={(e) => { e.stopPropagation(); setOpenDropdown(null) }}
                    >
                      <Bot className="w-5 h-5 shrink-0 text-[#82C1A6]" />
                      <span>{agent.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 p-5 overflow-y-auto overflow-x-hidden overscroll-contain min-w-0 scrollbar-ai-dropdown">
              <div className="mb-3">
                <h3 className="text-white font-semibold text-base mb-0.5" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  {MAIN_AGENTS[hoveredMainAgentIndex]?.name}
                </h3>
                <p className="text-white/70 text-[13px] leading-snug" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  {MAIN_AGENTS[hoveredMainAgentIndex]?.summary}
                </p>
              </div>
              <a
                href={getMainAgentProductHref(MAIN_AGENTS[hoveredMainAgentIndex]?.name ?? '')}
                className="inline-block text-[#82C1A6] font-medium text-sm hover:underline mb-4"
                style={{ fontFamily: "'Roboto', sans-serif" }}
                onClick={(e) => { e.stopPropagation(); setOpenDropdown(null) }}
              >
                {t('ai.learnMore', 'Learn more →')}
              </a>
              <hr className="border-white/10 mb-4" />
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {(MAIN_AGENTS[hoveredMainAgentIndex]?.subAgents ?? []).map((sub) => (
                  <a
                    key={sub.name}
                    href={`/ai-agent/${slugifyAgentName(MAIN_AGENTS[hoveredMainAgentIndex]?.name ?? '')}/${slugifyAgentName(sub.name)}`}
                    className="group flex flex-col gap-0.5 p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={(e) => { e.stopPropagation(); setOpenDropdown(null) }}
                  >
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 shrink-0 text-[#82C1A6] opacity-70" />
                      <span className="text-white font-medium text-[15px] group-hover:text-[#82C1A6] transition-colors" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        {sub.name}
                      </span>
                    </div>
                    <p className="text-white/60 text-[12px] leading-snug pl-5" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      {sub.description}
                    </p>
                  </a>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white font-semibold text-base mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  {t('ai.seeHow', 'See how DaitchPro AI automates scheduling, follow-ups, and marketing.')}
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-[#82C1A6] font-medium hover:underline"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                  onClick={(e) => { e.stopPropagation(); setOpenDropdown(null) }}
                >
                  {t('ai.getDemo', 'Get a demo →')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Mobile Menu - shown when viewport < 920px */}
        {isMobileMenuOpen && (
          <div
            className="min-[920px]:hidden py-4 px-4 space-y-2 mt-2 rounded-lg w-full"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              boxShadow: '0px 0px 13.3px rgba(102, 102, 102, 0.25)',
              backdropFilter: 'blur(24.4px)',
            }}
          >
            {/* AI Agents Mobile - first */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'ai-agents-mobile' ? null : 'ai-agents-mobile')}
                className="w-full flex items-center justify-between px-4 py-2.5 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-[18px] leading-[21px] font-normal"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                <span className="flex items-center gap-2">
                  <Bot className="w-5 h-5 shrink-0 text-[#3C995B]" />
                  {t('nav.aiAgents', 'AI Agents')}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'ai-agents-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'ai-agents-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  {MAIN_AGENTS.map((agent) => (
                    <a
                      key={agent.name}
                      href={getMainAgentProductHref(agent.name)}
                      className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(null)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {agent.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* Solution Dropdown Mobile */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'solutions-mobile' ? null : 'solutions-mobile')}
                className="w-full flex items-center justify-between px-4 py-2.5 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-[18px] leading-[21px] font-normal"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {t('nav.solution', 'Solution')}
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'solutions-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'solutions-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  {solutionsItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(null)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {t(item.labelKey, item.labelKey)}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Platform Dropdown Mobile */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'platform-mobile' ? null : 'platform-mobile')}
                className="w-full flex items-center justify-between px-4 py-2.5 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-[18px] leading-[21px] font-normal"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {t('nav.platform', 'Platform')}
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'platform-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'platform-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  {platformItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(null)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {t(item.labelKey, item.labelKey)}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Areas We Handle Dropdown Mobile */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'areas-mobile' ? null : 'areas-mobile')}
                className="w-full flex items-center justify-between px-4 py-2.5 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-[18px] leading-[21px] font-normal"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {t('nav.areasWeHandle', 'Areas We Handle')}
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'areas-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'areas-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  {areasItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropdown(null)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {t(item.labelKey, item.labelKey)}
                    </a>
                  ))}
                  <a
                    href="/industries"
                    className="block px-4 py-2 text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-sm font-semibold"
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpenDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {t('nav.viewMore', 'View More →')}
                  </a>
                </div>
              )}
            </div>

            <a href="#pricing" className="block px-4 py-2.5 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-[18px] leading-[21px] font-normal" style={{ fontFamily: "'Roboto', sans-serif" }} onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.pricing', 'Pricing')}
            </a>
            <div className="px-4 py-2 border-t border-gray-200 mt-2">
              <p className="text-xs text-gray-500 mb-2 px-1" style={{ fontFamily: "'Roboto', sans-serif" }}>{t('languages.menuLabel', 'Language')}</p>
              <LanguageSwitcher variant="navbar" />
            </div>
            <div className="px-4 pt-2">
              <a
                href="/login"
                className="block w-full text-[#383838] hover:text-[#3C995B] px-6 py-3 text-[18px] leading-[21px] text-center font-normal"
                style={{ fontFamily: "'Roboto', sans-serif" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.login', 'Sign In')}
              </a>
            </div>
            <div className="px-4 pt-2">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'get-started-mobile' ? null : 'get-started-mobile')}
                className="w-full flex items-center justify-between px-4 py-2.5 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-[18px] leading-[21px] font-normal"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {t('nav.signUp', 'Get Started')}
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'get-started-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'get-started-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  <a
                    href="/signup?role=client"
                    className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-sm"
                    onClick={() => {
                      setOpenDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {t('auth.client', 'Client')}
                  </a>
                  <a
                    href="/signup?role=agency_owner"
                    className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-sm"
                    onClick={() => {
                      setOpenDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {t('auth.agencyOwner', 'Agency Owner')}
                  </a>
                  <a
                    href="/signup?role=seller"
                    className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-sm"
                    onClick={() => {
                      setOpenDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {t('auth.seller', 'Seller')}
                  </a>
                  <a
                    href="/signup?role=buyer"
                    className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-sm"
                    onClick={() => {
                      setOpenDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {t('auth.buyer', 'Buyer')}
                  </a>
                  <a
                    href="/affiliate/register"
                    className="block px-4 py-2 text-[#383838] hover:text-[#3C995B] hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
                    onClick={() => {
                      setOpenDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {t('nav.affiliateUser', 'Affiliate user')}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
    </nav>
  )
}
