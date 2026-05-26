import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaBars, FaTimes, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// ── Language Switcher ────────────────────────────────────────────────────────
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
  // const [selected, setSelected] = useState(LANGUAGES[0]);
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
        className="flex items-center gap-1.5 text-gray-700 hover:text-emerald-600 transition-colors text-lg bg-transparent border-none cursor-pointer"
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
          absolute right-[-30px] mt-1 py-1 rounded-lg shadow-lg min-w-[200px] max-h-[60vh] overflow-y-auto z-50 bg-white border border-gray-200
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-[#316945]
          [&::-webkit-scrollbar-thumb]:rounded-full
          [scrollbar-width:thin]
          [scrollbar-color:#316945_transparent]
        `}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                // setSelected(lang);
                toggleDropdown(dropdownId);
              }}
              className={`w-full text-left flex items-center gap-2 px-4 py-2 text-sm transition-colors`}
            >
              {
                lang.code === 'ar' ? (
                  <span className="block text-emerald-600 font-medium text-sm">{lang.label} {' →'}</span>
                ) : (
                  <>
                    <Link to={lang.link} className="   text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2">
                    <img className="h-[12px] w-[18px]" src={lang.flag} alt={lang.label} />
                      <span>{lang.label}</span>
                    </Link>
                  </>
                )
              }
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Main Navbar ──────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredAgentIndex, setHoveredAgentIndex] = useState(0);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-dropdown-wrapper')) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown) {
      setTimeout(() => document.addEventListener('mousedown', handleClickOutside), 10);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

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

  // ── Simple dropdown used for Solutions / Platform / Areas ───────────────────
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

  // ── Language dropdown for mobile ────────────────────────────────────────────
  const MobileLangDropdown = () => (
    <div className="flex flex-col">
      <button
        onClick={() => toggleDropdown('lang-mobile')}
        className="flex items-center gap-2 text-gray-800 text-[15px] p-2 hover:bg-gray-50 rounded-lg cursor-pointer w-full text-left"
      >
        <img className='h-[12px] w-[18px]' src={selectedLang.flag} alt={selectedLang.label} />
        <span>{selectedLang.label}</span>
      </button>
      {openDropdown === 'lang-mobile' && (
        <div className="pl-4 mt-1 flex flex-col gap-1">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setSelectedLang(lang); toggleDropdown('lang-mobile'); }}
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors text-left ${selectedLang.code === lang.code
                ? 'text-emerald-600 bg-emerald-50 font-medium'
                : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
            >
              {lang.code !== 'ar' && <img className='h-[12px] w-[18px]' src={lang.flag} alt={lang.label} />}
              <Link to=''>
                <span>{lang.label}</span>
              </Link>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── NAVBAR BAR ────────────────────────────────────────────────────── */}
      <nav
        className="absolute md:left-[43px]  w-80 left-[20px] lg:w-[95%] z-50 rounded-2xl px-6 py-4 transition-all duration-300"
        style={{
          top: '54px',
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.3)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        }}
      >
        <div className="flex items-center justify-between">

          {/* LEFT: Logo */}
          <div className="flex items-center h-[30px] gap-2 cursor-pointer">
            <img
              src="src/assets/logo.png"
              className="h-full w-auto object-contain brightness-0"
              alt="DaitchPro"
            />
          </div>

          {/* CENTER: Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* AI Agents */}
            <div className="relative navbar-dropdown-wrapper">
              <button
                onClick={() => toggleDropdown('ai-agents')}
                className="flex font-medium text-[15px] items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer bg-transparent border-none"
              >
                <FaRobot className="text-emerald-500" />
                <span>AI Agents</span>
                <FaChevronDown
                  size={10}
                  className={`mt-0.5 text-gray-500 hover:text-emerald-600 transition-transform ${openDropdown === 'ai-agents' ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {/* Solution */}
            <div className="relative navbar-dropdown-wrapper">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex text-[15px] font-medium items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer bg-transparent border-none"
              >
                <span>Solution</span>
                <FaChevronDown
                  size={10}
                  className={`mt-0.5 text-gray-500 hover:text-emerald-600 transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'solutions' && <SimpleDropdown items={solutionsItems} />}
            </div>

            {/* Platform */}
            <div className="relative navbar-dropdown-wrapper">
              <button
                onClick={() => toggleDropdown('platform')}
                className="flex text-[15px] font-medium items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer bg-transparent border-none"
              >
                <span>Platform</span>
                <FaChevronDown
                  size={10}
                  className={`mt-0.5 text-gray-500 hover:text-emerald-600 transition-transform ${openDropdown === 'platform' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'platform' && <SimpleDropdown items={platformItems} />}
            </div>

            {/* Areas We Handle */}
            <div className="relative navbar-dropdown-wrapper">
              <button
                onClick={() => toggleDropdown('areas')}
                className="flex text-[15px] font-medium items-center gap-1 text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer bg-transparent border-none"
              >
                <span>Areas We Handle</span>
                <FaChevronDown
                  size={10}
                  className={`mt-0.5 text-gray-500 hover:text-emerald-600 transition-transform ${openDropdown === 'areas' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'areas' && (
                <SimpleDropdown items={areasItems} viewMoreHref="/industries" />
              )}
            </div>

            {/* Pricing */}
            <a href="#pricing" className="text-[15px] font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              Pricing
            </a>
          </div>

          {/* RIGHT: Language + Auth + CTA */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Language Switcher */}
            <div className="navbar-dropdown-wrapper">
              <LanguageSwitcher
                openDropdown={openDropdown}
                toggleDropdown={toggleDropdown}
                dropdownId="language"
              />
            </div>

            <a href="/login" className="text-gray-700 font-medium text-[15px] hover:text-gray-900 transition-colors">
              Sign In
            </a>

            {/* Get Started with dropdown */}
            <div className="relative navbar-dropdown-wrapper">
              <button
                onClick={() => toggleDropdown('get-started')}
                className="inline-flex font-medium items-center justify-center gap-2 h-10 px-6 rounded-xl text-black whitespace-nowrap border border-white opacity-90 bg-[radial-gradient(59.41%_515.38%_at_40.59%_15.83%,rgba(175,217,177,0.89)_0%,rgba(60,153,91,0.89)_100%)] shadow-[0px_0px_30px_rgba(0,0,0,0.15)] backdrop-blur-[39.45px] transition-all"
              >
                Get Started
                <FaChevronDown
                  size={10}
                  className={`transition-transform ${openDropdown === 'get-started' ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === 'get-started' && (
                <div className="absolute top-full right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2">
                  {getStartedItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none p-2"
            >
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── AI AGENTS MEGA DROPDOWN (Desktop) ───────────────────────────────── */}
      {openDropdown === 'ai-agents' && (
        <div
          className="fixed left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-40 rounded-b-xl overflow-hidden shadow-2xl hidden lg:block"
          style={{
            top: 'calc(3.5rem + 54px)',
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
            {/* Sidebar */}
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

            {/* Content Panel */}
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

      {/* ── MOBILE MENU (Right-Aligned Floating Dropdown) ──────────────────── */}
      <div
        className={`fixed  top-[130px] sm:top-[56px] right-[2.5%] w-[280px] bg-white border border-gray-100 rounded-xl shadow-xl z-50 lg:hidden transition-all duration-300 transform origin-top-right overflow-y-auto max-h-[calc(100vh-130px)] ${mobileMenuOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col p-4 gap-1">

          {/* AI Agents Mobile */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleDropdown('ai-agents-mobile')}
              className="flex items-center justify-between text-gray-800 text-[15px] p-2 hover:bg-gray-50 rounded-lg cursor-pointer w-full text-left"
            >
              <div className="flex items-center gap-3">
                <FaRobot className="text-emerald-600" size={18} />
                AI Agents
              </div>
              <FaChevronDown size={10} className={`text-gray-500 transition-transform ${openDropdown === 'ai-agents-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'ai-agents-mobile' && (
              <div className="pl-9 mt-1 flex flex-col gap-1">
                {aiAgents.map((agent) => (
                  <a key={agent.name} href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors">
                    {agent.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Solution Mobile */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleDropdown('solutions-mobile')}
              className="flex items-center justify-between text-gray-800 text-[15px] p-2 hover:bg-gray-50 rounded-lg cursor-pointer w-full text-left"
            >
              <div className="flex items-center gap-3 pl-[28px]">
                Solution
              </div>
              <FaChevronDown size={10} className={`text-gray-500 transition-transform ${openDropdown === 'solutions-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'solutions-mobile' && (
              <div className="pl-9 mt-1 flex flex-col gap-1">
                {solutionsItems.map((item) => (
                  <a key={item.href} href={item.href} className="block px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Platform Mobile */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleDropdown('platform-mobile')}
              className="flex items-center justify-between text-gray-800 text-[15px] p-2 hover:bg-gray-50 rounded-lg cursor-pointer w-full text-left"
            >
              <div className="flex items-center gap-3 pl-[28px]">
                Platform
              </div>
              <FaChevronDown size={10} className={`text-gray-500 transition-transform ${openDropdown === 'platform-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'platform-mobile' && (
              <div className="pl-9 mt-1 flex flex-col gap-1">
                {platformItems.map((item) => (
                  <a key={item.href} href={item.href} className="block px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Areas We Handle Mobile */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleDropdown('areas-mobile')}
              className="flex items-center justify-between text-gray-800 text-[15px] p-2 hover:bg-gray-50 rounded-lg cursor-pointer w-full text-left"
            >
              <div className="flex items-center gap-3 pl-[28px]">
                Areas We Handle
              </div>
              <FaChevronDown size={10} className={`text-gray-500 transition-transform ${openDropdown === 'areas-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'areas-mobile' && (
              <div className="pl-9 mt-1 flex flex-col gap-1">
                {areasItems.map((item) => (
                  <a key={item.href} href={item.href} className="block px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors">
                    {item.label}
                  </a>
                ))}
                <a href="/industries" className="block px-3 py-2 text-sm text-emerald-600 font-medium hover:bg-emerald-50 rounded-lg transition-colors">
                  View More →
                </a>
              </div>
            )}
          </div>

          {/* Pricing Mobile */}
          <a href="#pricing" className="flex items-center text-gray-800 text-[15px] p-2 pl-[36px] hover:bg-gray-50 rounded-lg">
            Pricing
          </a>

          {/* Divider line before Language/Auth */}
          <div className="border-t border-gray-100 my-2 pt-2"></div>

          {/* Language Switcher Mobile */}
          <div className="px-2 mb-2">
            <p className="text-[13px] text-gray-500 mb-1 ml-1">Language</p>
            <MobileLangDropdown />
          </div>

          {/* Sign In */}
          <a href="/login" className="flex items-center text-gray-800 text-[15px] p-2 pl-3 hover:bg-gray-50 rounded-lg mb-2">
            Sign In
          </a>

          {/* Get Started Mobile */}
          <div className="flex flex-col px-2 pb-2">
            <button
              onClick={() => toggleDropdown('get-started-mobile')}
              className="flex items-center justify-between text-gray-800 text-[15px] p-2 hover:bg-gray-50 rounded-lg cursor-pointer w-full text-left"
            >
              <span>Get Started</span>
              <FaChevronDown size={10} className={`text-gray-500 transition-transform ${openDropdown === 'get-started-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'get-started-mobile' && (
              <div className="mt-1 flex flex-col gap-1 pl-2 border-l-2 border-emerald-100 ml-2">
                {getStartedItems.map((item) => (
                  <a key={item.href} href={item.href} className="block px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;