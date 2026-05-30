import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaBars, FaTimes, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// ── Language Switcher Data ───────────────────────────────────────────────────
const LANGUAGES = [
  { code: 'en', label: 'English', flag: 'src/assets/flags/US.svg', link: '/' },
  { code: 'es', label: 'Español (Spanish)', flag: 'src/assets/flags/ES.svg', link: '/' },
  { code: 'fr', label: 'Français (French)', flag: 'src/assets/flags/FR.svg', link: '/' },
  { code: 'de', label: 'Deutsch (German)', flag: 'src/assets/flags/DE.svg', link: '/' },
  { code: 'it', label: 'Italiano (Italian)', flag: 'src/assets/flags/IT.svg', link: '/' },
  { code: 'pt', label: 'Português (Portuguese)', flag: 'src/assets/flags/PT.svg', link: '/' },
  { code: 'ja', label: '日本語 (Japanese)', flag: 'src/assets/flags/JP.svg', link: '/' },
  { code: 'zh', label: '中文 (Chinese, Simplified)', flag: 'src/assets/flags/CN.svg', link: '/' },
  { code: 'ko', label: '한국어 (Korean)', flag: 'src/assets/flags/KR.svg', link: '/' },
  { code: 'bn', label: 'বাংলা (Bengali)', flag: 'src/assets/flags/BD.svg', link: '/' },
  { code: 'ar', label: 'See more languages', flag: ' →', link: '/languages' }
];

const LanguageSwitcher = ({ openDropdown, toggleDropdown, dropdownId = 'language' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        if (openDropdown === dropdownId) toggleDropdown(dropdownId);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown, dropdownId, toggleDropdown]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => toggleDropdown(dropdownId)}
        className="flex items-center gap-1.5 text-gray-700 hover:text-emerald-600 transition-colors text-[14px] xl:text-[15px] bg-transparent border-none cursor-pointer whitespace-nowrap"
      >
        <img className="h-[12px] w-[18px]" src={LANGUAGES[0].flag} alt={LANGUAGES[0].label} />
        <span>{LANGUAGES[0].label}</span>
        <FaChevronDown
          size={10}
          className={`mt-0.5 text-gray-500 transition-transform ${openDropdown === dropdownId ? 'rotate-180' : ''}`}
        />
      </button>
      {openDropdown === dropdownId && (
        <div className={`
          absolute right-[-30px] overflow-x-hidden mt-1 py-1 rounded-lg shadow-lg min-w-[200px] max-h-[60vh] overflow-y-auto z-50 bg-white border border-gray-200
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-[#316945]
          [&::-webkit-scrollbar-thumb]:rounded-full
          [scrollbar-width:thin]
          [scrollbar-color:#316945_transparent]
        `}>
          {LANGUAGES.map((lang) => (
            <div key={lang.code} className="w-full">
              {lang.code === 'ar' ? (
                <Link
                  to={lang.link}
                  onClick={() => toggleDropdown(dropdownId)}
                  className="block px-4 py-2 text-sm text-emerald-600 font-medium hover:bg-emerald-50 transition-colors whitespace-nowrap"
                >
                  {lang.label}
                </Link>
              ) : (
                <button
                  onClick={() => {
                    toggleDropdown(dropdownId);
                  }}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors whitespace-nowrap"
                >
                  <img className="h-[12px] w-[18px]" src={lang.flag} alt={lang.label} />
                  <span>{lang.label}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Move these helper components outside of the Navbar render to avoid recreating
const SimpleDropdown = ({ items, viewMoreHref }) => (
  <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2 max-h-[70vh] overflow-y-auto">
    {items.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
      >
        {item.label}
      </a>
    ))}
    {viewMoreHref && (
      <a
        href={viewMoreHref}
        className="block px-4 py-2 text-sm text-emerald-600 font-semibold border-t border-gray-100 mt-1 pt-3 hover:bg-emerald-50 transition-colors"
      >
        View More →
      </a>
    )}
  </div>
);

const MobileLangDropdown = ({ toggleDropdown, selectedLang, setSelectedLang, openDropdown, setMobileMenuOpen }) => (
  <div className="flex flex-col w-full px-6">
    <button
      onClick={() => toggleDropdown('lang-mobile')}
      className="flex items-center justify-center gap-3 text-slate-800 text-[16px] font-medium py-3 px-4 w-full text-center hover:bg-slate-200/50 rounded-lg transition-colors"
    >
      <img className='h-[16px] w-[24px] object-cover rounded-sm' src={selectedLang.flag} alt={selectedLang.label} />
      <span>{selectedLang.label}</span>
      <FaChevronDown size={10} className={`text-slate-400 transition-transform ${openDropdown === 'lang-mobile' ? 'rotate-180' : ''}`} />
    </button>
    {openDropdown === 'lang-mobile' && (
      <div className="bg-white/80 rounded-lg shadow-inner mt-2 py-2 flex flex-col w-full border border-slate-200/60 max-h-[200px] overflow-y-auto">
        {LANGUAGES.map((lang) => {
          if (lang.code === 'ar') {
            return (
              <Link
                key={lang.code}
                to={lang.link}
                onClick={() => { setMobileMenuOpen(false); toggleDropdown(null); }}
                className="block text-center py-2.5 text-[15px] text-emerald-600 font-medium hover:bg-slate-100 transition-colors"
              >
                {lang.label}
              </Link>
            );
          }
          return (
            <button
              key={lang.code}
              onClick={() => { setSelectedLang(lang); toggleDropdown('lang-mobile'); }}
              className={`flex items-center justify-center gap-3 py-2.5 text-[15px] transition-colors ${
                selectedLang.code === lang.code
                  ? 'text-emerald-600 bg-emerald-50/50 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <img className='h-[14px] w-[20px] object-cover rounded-sm' src={lang.flag} alt={lang.label} />
              <span>{lang.label}</span>
            </button>
          );
        })}
      </div>
    )}
  </div>
);

// ── Main Navbar ──────────────────────────────────────────────────────────────
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredAgentIndex, setHoveredAgentIndex] = useState(0);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  
  // States for scroll hide/show
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle auto-hide on scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Don't hide if the mobile menu or a dropdown is currently open
        if (mobileMenuOpen) return;

        // Hide if scrolling down past 80px, show if scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, mobileMenuOpen]);

  // Handle clicking outside mobile sidebar menu to auto-close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.mobile-sidebar-container') && !event.target.closest('.mobile-toggle-btn')) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleDropdown = (name) => setOpenDropdown(openDropdown === name ? null : name);

  // ── Nav Data ────────────────────────────────────────────────────────────────
  const solutionsItems = [
    { label: 'Web Agency', href: '/solutions/web-agency' },
    { label: 'Digital Agency', href: '/solutions/digital-agency' },
    { label: 'Startups', href: '/solutions/startups' },
    { label: 'SaaS', href: '/solutions/saas' },
    { label: 'Social Media Agency', href: '/solutions/social-media-agency' },
    { label: 'Marketing', href: '/solutions/marketing' },
    { label: 'Creative Agencies', href: '/solutions/creative-agencies' },
    { label: 'Software Vendor', href: '/solutions/software-vendor' },
    { label: 'Sales', href: '/solutions/sales' },
  ];

  const platformItems = [
    { label: 'AI Workforce', href: '/platform/ai-workforce' },
    { label: 'Marketplace', href: '/marketplace' },
    { label: 'Automations', href: '/platform/automations' },
    { label: 'Project Management', href: '/platform/project-management' },
    { label: 'Payments', href: '/platform/payments' },
    { label: 'Affiliate', href: '/affiliate' },
  ];

  const areasItems = [
    { label: 'Primary Care', href: '/industries/primary-care/workflow' },
    { label: 'Dental Practices', href: '/industries/dental/workflow' },
    { label: 'Salons', href: '/industries/salons/workflow' },
    { label: 'Home Services', href: '/industries/home-services/workflow' },
    { label: 'Restaurants', href: '/industries/restaurants/workflow' },
    { label: 'Automotive Dealerships', href: '/industries/automotive/workflow' },
    { label: 'Real Estate', href: '/industries/real-estate/workflow' },
    { label: 'Veterinary Clinics', href: '/industries/veterinary/workflow' },
    { label: 'Professional Services', href: '/industries/professional-services/workflow' },
    { label: 'Retail & E-commerce', href: '/industries/retail/workflow' },
  ];

  const getStartedItems = [
    { label: 'Client', href: '/signup?role=client' },
    { label: 'Agency Owner', href: '/signup?role=agency_owner' },
    { label: 'Seller', href: '/signup?role=seller' },
    { label: 'Buyer', href: '/signup?role=buyer' },
    { label: 'Affiliate User', href: '/affiliate/register' },
  ];

  const aiAgents = [
    {
      name: 'Scheduling Agent',
      summary: 'Automates appointment booking, reminders, and calendar management across all your channels.',
      subAgents: [
        { name: 'Booking Bot', description: 'Handles real-time slot booking' },
        { name: 'Reminder Agent', description: 'Sends follow-up reminders' },
        { name: 'Reschedule Agent', description: 'Manages cancellations & changes' },
        { name: 'Calendar Sync', description: 'Syncs across platforms' },
      ],
    },
    {
      name: 'Marketing Agent',
      summary: 'Runs your campaigns, social posts, and email sequences on autopilot.',
      subAgents: [
        { name: 'Email Marketer', description: 'Automated email sequences' },
        { name: 'Social Poster', description: 'Schedules social content' },
        { name: 'Ad Manager', description: 'Optimizes ad spend' },
        { name: 'SEO Agent', description: 'Improves search rankings' },
      ],
    },
    {
      name: 'Support Agent',
      summary: 'Handles customer inquiries, tickets, and live chat 24/7 without human intervention.',
      subAgents: [
        { name: 'Live Chat Bot', description: 'Instant customer responses' },
        { name: 'Ticket Resolver', description: 'Auto-resolves support tickets' },
        { name: 'FAQ Agent', description: 'Answers common questions' },
        { name: 'Escalation Agent', description: 'Routes complex issues' },
      ],
    },
    {
      name: 'Sales Agent',
      summary: 'Qualifies leads, follows up prospects, and closes deals while you sleep.',
      subAgents: [
        { name: 'Lead Qualifier', description: 'Scores and segments leads' },
        { name: 'Follow-up Agent', description: 'Automated follow-up sequences' },
        { name: 'Demo Booker', description: 'Books sales calls automatically' },
        { name: 'CRM Updater', description: 'Keeps your CRM in sync' },
      ],
    },
  ];

  return (
    <>
      {/* ── DESKTOP/MOBILE HEADER BAR ───────────────────────────────────────── */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] z-40 rounded-2xl px-4 xl:px-6 py-4 transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[200%] opacity-0'
        }`}
        style={{
          top: '54px', /* Adjusted top margin for a fixed nav */
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.3)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        }}
      >
        <div className="flex items-center justify-between">
          {/* LEFT: Logo */}
          <div className="flex items-center h-[24px] xl:h-[30px] gap-2 cursor-pointer shrink-0">
            <img
              src="src/assets/logo.png"
              className="h-full w-auto object-contain brightness-0"
              alt="DaitchPro"
            />
          </div>

          {/* CENTER: Desktop Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8 justify-center flex-1 mx-4">
            <div className="relative navbar-dropdown-wrapper">
              <button
                onClick={() => toggleDropdown('ai-agents')}
                className="flex font-medium text-[14px] xl:text-[15px] items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap"
              >
                <FaRobot className="text-emerald-500" />
                <span>AI Agents</span>
                <FaChevronDown size={10} className={`mt-0.5 text-gray-500 transition-transform ${openDropdown === 'ai-agents' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="relative navbar-dropdown-wrapper">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex font-medium text-[14px] xl:text-[15px] items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap"
              >
                <span>Solution</span>
                <FaChevronDown size={10} className={`mt-0.5 text-gray-500 transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'solutions' && <SimpleDropdown items={solutionsItems} />}
            </div>

            <div className="relative navbar-dropdown-wrapper">
              <button
                onClick={() => toggleDropdown('platform')}
                className="flex font-medium text-[14px] xl:text-[15px] items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap"
              >
                <span>Platform</span>
                <FaChevronDown size={10} className={`mt-0.5 text-gray-500 transition-transform ${openDropdown === 'platform' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'platform' && <SimpleDropdown items={platformItems} />}
            </div>

            <div className="relative navbar-dropdown-wrapper">
              <button
                onClick={() => toggleDropdown('areas')}
                className="flex font-medium text-[14px] xl:text-[15px] items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap"
              >
                <span>Areas We Handle</span>
                <FaChevronDown size={10} className={`mt-0.5 text-gray-500 transition-transform ${openDropdown === 'areas' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'areas' && <SimpleDropdown items={areasItems} viewMoreHref="/industries" />}
            </div>

            <a href="#pricing" className="text-[14px] xl:text-[15px] font-medium text-gray-700 hover:text-emerald-600 transition-colors whitespace-nowrap">
              Pricing
            </a>
          </div>

          {/* RIGHT: Desktop Auth Actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <div className="navbar-dropdown-wrapper">
              <LanguageSwitcher openDropdown={openDropdown} toggleDropdown={toggleDropdown} dropdownId="language" />
            </div>

            <a href="/login" className="text-gray-700 font-medium text-[14px] xl:text-[15px] hover:text-gray-900 transition-colors whitespace-nowrap">
              Sign In
            </a>

            <div className="relative navbar-dropdown-wrapper">
              <button
                onClick={() => toggleDropdown('get-started')}
                className="inline-flex font-medium items-center justify-center gap-2 h-9 xl:h-10 px-4 xl:px-6 rounded-xl text-black border border-white opacity-90 bg-[radial-gradient(59.41%_515.38%_at_40.59%_15.83%,rgba(175,217,177,0.89)_0%,rgba(60,153,91,0.89)_100%)] shadow-[0px_0px_30px_rgba(0,0,0,0.15)] backdrop-blur-[39.45px] transition-all hover:scale-105 whitespace-nowrap text-[14px] xl:text-[15px]"
              >
                Get Started
                <FaChevronDown size={10} className={`transition-transform ${openDropdown === 'get-started' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'get-started' && (
                <div className="absolute top-full right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2">
                  {getStartedItems.map((item) => (
                    <a key={item.href} href={item.href} className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors whitespace-nowrap">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Icon Selector Trigger */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn text-gray-800 hover:text-emerald-600 focus:outline-none p-2 relative z-50"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE FULL SIDEBAR MENU ────────────────────────────────────────── */}
      <div
        className={`mobile-sidebar-container fixed top-0 right-0 h-full w-[300px] bg-[#f8fafc] border-l border-slate-200 shadow-2xl z-[60] lg:hidden transition-transform duration-300 ease-in-out flex flex-col justify-start pt-4 overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col w-full px-2">
          
          {/* 1. AI Agents */}
          <div className="flex flex-col w-full mb-1">
            <button
              onClick={() => toggleDropdown('ai-agents-mobile')}
              className={`flex items-center justify-between text-slate-800 text-[16px] font-semibold py-3.5 px-6 rounded-xl w-full text-left transition-colors ${
                openDropdown === 'ai-agents-mobile' ? 'bg-slate-200/60 text-emerald-700' : 'hover:bg-slate-200/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <FaRobot className="text-[18px] text-emerald-500" />
                <span>AI Agents</span>
              </div>
              <FaChevronDown size={12} className={`text-slate-400 transition-transform ${openDropdown === 'ai-agents-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'ai-agents-mobile' && (
              <div className="flex flex-col w-full py-2 pl-4 pr-2">
                {aiAgents.map((agent) => (
                  <a key={agent.name} href="#" className="block text-[15px] pl-8 pr-4 py-2.5 text-slate-600 rounded-lg hover:text-emerald-600 hover:bg-slate-100 transition-colors">
                    {agent.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 2. Solution */}
          <div className="flex flex-col w-full mb-1">
            <button
              onClick={() => toggleDropdown('solutions-mobile')}
              className={`flex items-center justify-between text-slate-800 text-[16px] font-semibold py-3.5 px-6 rounded-xl w-full text-left transition-colors ${
                openDropdown === 'solutions-mobile' ? 'bg-slate-200/60 text-emerald-700' : 'hover:bg-slate-200/40'
              }`}
            >
              <span className="pl-[26px]">Solution</span>
              <FaChevronDown size={12} className={`text-slate-400 transition-transform ${openDropdown === 'solutions-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'solutions-mobile' && (
              <div className="flex flex-col w-full py-2 pl-4 pr-2 max-h-[300px] overflow-y-auto">
                {solutionsItems.map((item) => (
                  <a key={item.href} href={item.href} className="block pl-8 pr-4 py-2.5 text-[15px] text-slate-600 rounded-lg hover:text-emerald-600 hover:bg-slate-100 transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 3. Platform */}
          <div className="flex flex-col w-full mb-1">
            <button
              onClick={() => toggleDropdown('platform-mobile')}
              className={`flex items-center justify-between text-slate-800 text-[16px] font-semibold py-3.5 px-6 rounded-xl w-full text-left transition-colors ${
                openDropdown === 'platform-mobile' ? 'bg-slate-200/60 text-emerald-700' : 'hover:bg-slate-200/40'
              }`}
            >
              <span className="pl-[26px]">Platform</span>
              <FaChevronDown size={12} className={`text-slate-400 transition-transform ${openDropdown === 'platform-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'platform-mobile' && (
              <div className="flex flex-col w-full py-2 pl-4 pr-2">
                {platformItems.map((item) => (
                  <a key={item.href} href={item.href} className="block pl-8 pr-4 py-2.5 text-[15px] text-slate-600 rounded-lg hover:text-emerald-600 hover:bg-slate-100 transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 4. Areas We Handle */}
          <div className="flex flex-col w-full mb-1">
            <button
              onClick={() => toggleDropdown('areas-mobile')}
              className={`flex items-center justify-between text-slate-800 text-[16px] font-semibold py-3.5 px-6 rounded-xl w-full text-left transition-colors ${
                openDropdown === 'areas-mobile' ? 'bg-slate-200/60 text-emerald-700' : 'hover:bg-slate-200/40'
              }`}
            >
              <span className="pl-[26px]">Areas We Handle</span>
              <FaChevronDown size={12} className={`text-slate-400 transition-transform ${openDropdown === 'areas-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'areas-mobile' && (
              <div className="flex flex-col w-full py-2 pl-4 pr-2 max-h-[300px] overflow-y-auto">
                {areasItems.map((item) => (
                  <a key={item.href} href={item.href} className="block pl-8 pr-4 py-2.5 text-[15px] text-slate-600 rounded-lg hover:text-emerald-600 hover:bg-slate-100 transition-colors">
                    {item.label}
                  </a>
                ))}
                <a href="/industries" className="block pl-8 pr-4 py-2.5 text-[15px] text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors mt-1">
                  View More →
                </a>
              </div>
            )}
          </div>

          {/* 5. Pricing */}
          <a
            href="#pricing"
            className="block text-slate-800 text-[16px] font-semibold py-3.5 px-6 pl-[50px] w-full text-left rounded-xl hover:bg-slate-200/40 transition-colors"
          >
            Pricing
          </a>

          {/* Horizontal Separation Rule Line */}
          <div className="border-t border-slate-200 my-4 mx-4"></div>

          {/* 6. Language Segment Label */}
          <div className="w-full mb-4">
            <p className="text-slate-400 text-[13px] font-semibold uppercase tracking-wider pl-6 mb-2">Region & Language</p>
            <MobileLangDropdown
              toggleDropdown={toggleDropdown}
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
              openDropdown={openDropdown}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </div>

          {/* 7. Sign In */}
          <div className="px-4 mt-2">
            <a
              href="/login"
              className="block text-slate-700 text-[16px] font-semibold py-3 px-6 text-center w-full rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors"
            >
              Sign In
            </a>
          </div>

          {/* 8. Get Started Mobile Section */}
          <div className="flex flex-col w-full px-4 mt-3 pb-8">
            <button
              onClick={() => toggleDropdown('get-started-mobile')}
              className="flex items-center justify-center gap-2 text-white bg-emerald-600 text-[16px] font-semibold py-3 px-6 w-full rounded-xl text-center shadow-md hover:bg-emerald-700 transition-colors"
            >
              <span>Get Started</span>
              <FaChevronDown size={12} className={`text-emerald-200 transition-transform ${openDropdown === 'get-started-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'get-started-mobile' && (
              <div className="bg-white rounded-xl shadow-md border border-slate-100 py-2 flex flex-col w-full mt-2">
                {getStartedItems.map((item) => (
                  <a key={item.href} href={item.href} className="block text-center py-2.5 text-[15px] text-slate-700 font-medium hover:text-emerald-600 hover:bg-slate-50 transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── AI AGENTS MEGA DROPDOWN (Desktop Only) ──────────────────────────── */}
      {openDropdown === 'ai-agents' && (
        <div
          className="fixed left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-30 rounded-b-xl overflow-hidden shadow-2xl hidden lg:block"
          style={{
            top: 'calc(4.5rem + 30px)',
            height: '480px',
            background: 'linear-gradient(180deg, #063A2F 0%, #052d24 100%)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <button
            onClick={() => setOpenDropdown(null)}
            className="absolute top-4 right-4 p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors z-10"
          >
            <FaTimes size={16} />
          </button>
          <div className="flex flex-row h-full">
            <div className="w-64 shrink-0 flex flex-col py-4 border-r border-white/10 overflow-y-auto">
              <div className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                DaitchPro AI Solutions
              </div>
              <ul className="flex flex-col mt-1">
                {aiAgents.map((agent, idx) => (
                  <li key={agent.name}>
                    <button
                      onMouseEnter={() => setHoveredAgentIndex(idx)}
                      onClick={() => setHoveredAgentIndex(idx)}
                      className={`w-full text-left flex items-center gap-2.5 px-5 py-3 transition-colors text-sm ${hoveredAgentIndex === idx
                        ? 'bg-white/10 text-white'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }`}
                    >
                      <FaRobot className="text-emerald-400 shrink-0" size={16} />
                      <span>{agent.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
              <h3 className="text-white font-semibold text-lg mb-1">
                {aiAgents[hoveredAgentIndex]?.name}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                {aiAgents[hoveredAgentIndex]?.summary}
              </p>
              <a href="#" className="inline-block text-emerald-400 font-medium text-sm hover:underline mb-5">
                Learn more →
              </a>
              <hr className="border-white/10 mb-5" />
              <div className="grid grid-cols-2 gap-4">
                {(aiAgents[hoveredAgentIndex]?.subAgents ?? []).map((sub) => (
                  <a
                    key={sub.name}
                    href="#"
                    className="flex flex-col gap-1 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <FaRobot className="text-emerald-400/70 shrink-0" size={14} />
                      <span className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                        {sub.name}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs leading-snug pl-5">{sub.description}</p>
                  </a>
                ))}
              </div>
              <div className="mt-5 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-white font-semibold text-sm mb-2">
                  See how DaitchPro AI automates scheduling, follow-ups, and marketing.
                </p>
                <a href="/contact" className="inline-flex items-center text-emerald-400 font-medium text-sm hover:underline">
                  Get a demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;