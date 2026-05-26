import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

// ── Complete Language Data Array (108 Languages) ──────────────────────────
const LANGUAGES_DATA = [
  { code: 'en', label: 'English', flag: 'src/assets/Languages/daitchpro.com-9.svg' },
  { code: 'es', label: 'Español (Spanish)', flag: 'src/assets/Languages/daitchpro.com-10.svg' },
  { code: 'fr', label: 'Français (French)', flag: 'src/assets/Languages/daitchpro.com-11.svg' },
  { code: 'de', label: 'Deutsch (German)', flag: 'src/assets/Languages/daitchpro.com-12.svg' },
  { code: 'it', label: 'Italiano (Italian)', flag: 'src/assets/Languages/daitchpro.com-13.svg' },
  { code: 'pt', label: 'Português (Portuguese)', flag: 'src/assets/Languages/daitchpro.com-14.svg' },
  { code: 'ja', label: '日本語 (Japanese)', flag: 'src/assets/Languages/daitchpro.com-15.svg' },
  { code: 'zh', label: '中文 (Chinese, Simplified)', flag: 'src/assets/Languages/daitchpro.com-16.svg' },
  { code: 'tw', label: '繁體中文 (Traditional)', flag: 'src/assets/Languages/daitchpro.com-17.svg' },
  { code: 'ko', label: '한국어 (Korean)', flag: 'src/assets/Languages/daitchpro.com-18.svg' },
  { code: 'ar', label: 'العربية (Arabic)', flag: 'src/assets/Languages/daitchpro.com-19.svg' },
  { code: 'ru', label: 'Русский (Russian)', flag: 'src/assets/Languages/daitchpro.com-20.svg' },
  { code: 'nl', label: 'Nederlands (Dutch)', flag: 'src/assets/Languages/daitchpro.com-21.svg' },
  { code: 'pl', label: 'Polski (Polish)', flag: 'src/assets/Languages/daitchpro.com-22.svg' },
  { code: 'tr', label: 'Türkçe (Turkish)', flag: 'src/assets/Languages/daitchpro.com-23.svg' },
  { code: 'sv', label: 'Svenska (Swedish)', flag: 'src/assets/Languages/daitchpro.com-24.svg' },
  { code: 'he', label: 'עברית (Hebrew)', flag: 'src/assets/Languages/daitchpro.com-25.svg' },
  { code: 'hi', label: 'हिन्दी (Hindi)', flag: 'src/assets/Languages/daitchpro.com-26.svg' },
  { code: 'th', label: 'ไทย (Thai)', flag: 'src/assets/Languages/daitchpro.com-27.svg' },
  { code: 'vi', label: 'Tiếng Việt (Vietnamese)', flag: 'src/assets/Languages/daitchpro.com-28.svg' },
  { code: 'id', label: 'Bahasa Indonesia', flag: 'src/assets/Languages/daitchpro.com-29.svg' },
  { code: 'ms', label: 'Bahasa Melayu (Malay)', flag: 'src/assets/Languages/daitchpro.com-30.svg' },
  { code: 'da', label: 'Dansk (Danish)', flag: 'src/assets/Languages/daitchpro.com-31.svg' },
  { code: 'no', label: 'Norsk (Norwegian)', flag: 'src/assets/Languages/daitchpro.com-32.svg' },
  { code: 'fi', label: 'Suomi (Finnish)', flag: 'src/assets/Languages/daitchpro.com-33.svg' },
  { code: 'cs', label: 'Čeština (Czech)', flag: 'src/assets/Languages/daitchpro.com-34.svg' },
  { code: 'hu', label: 'Magyar (Hungarian)', flag: 'src/assets/Languages/daitchpro.com-35.svg' },
  { code: 'ro', label: 'Română (Romanian)', flag: 'src/assets/Languages/daitchpro.com-36.svg' },
  { code: 'uk', label: 'Українська (Ukrainian)', flag: 'src/assets/Languages/daitchpro.com-37.svg' },
  { code: 'bn', label: 'বাংলা (Bengali)', flag: 'src/assets/Languages/daitchpro.com-38.svg' },
  { code: 'tl', label: 'Filipino', flag: 'src/assets/Languages/daitchpro.com-39.svg' },
  { code: 'ta', label: 'தமிழ் (Tamil)', flag: 'src/assets/Languages/daitchpro.com-40.svg' },
  { code: 'te', label: 'తెలుగు (Telugu)', flag: 'src/assets/Languages/daitchpro.com-41.svg' },
  { code: 'el', label: 'Ελληνικά (Greek)', flag: 'src/assets/Languages/daitchpro.com-42.svg' },
  { code: 'af', label: 'Afrikaans', flag: 'src/assets/Languages/daitchpro.com-43.svg' },
  { code: 'sq', label: 'Shqip (Albanian)', flag: 'src/assets/Languages/daitchpro.com-44.svg' },
  { code: 'am', label: 'አማርኛ (Amharic)', flag: 'src/assets/Languages/daitchpro.com-45.svg' },
  { code: 'hy', label: 'Հայերեն (Armenian)', flag: 'src/assets/Languages/daitchpro.com-46.svg' },
  { code: 'az', label: 'Azərbaycan', flag: 'src/assets/Languages/daitchpro.com-47.svg' },
  { code: 'eu', label: 'Euskara (Basque)', flag: 'src/assets/Languages/daitchpro.com-48.svg' },
  { code: 'bs', label: 'Bosanski', flag: 'src/assets/Languages/daitchpro.com-49.svg' },
  { code: 'bg', label: 'Български', flag: 'src/assets/Languages/daitchpro.com-50.svg' },
  { code: 'ca', label: 'Català', flag: 'src/assets/Languages/daitchpro.com-51.svg' },
  { code: 'ceb', label: 'Cebuano', flag: 'src/assets/Languages/daitchpro.com-52.svg' },
  { code: 'ny', label: 'Chichewa', flag: 'src/assets/Languages/daitchpro.com-53.svg' },
  { code: 'co', label: 'Corsu', flag: 'src/assets/Languages/daitchpro.com-54.svg' },
  { code: 'hr', label: 'Hrvatski', flag: 'src/assets/Languages/daitchpro.com-55.svg' },
  { code: 'eo', label: 'Esperanto', flag: 'src/assets/Languages/daitchpro.com-56.svg' },
  { code: 'et', label: 'Eesti', flag: 'src/assets/Languages/daitchpro.com-57.svg' },
  { code: 'fy', label: 'Frysk', flag: 'src/assets/Languages/daitchpro.com-58.svg' },
  { code: 'gl', label: 'Galego', flag: 'src/assets/Languages/daitchpro.com-59.svg' },
  { code: 'ka', label: 'ქართული', flag: 'src/assets/Languages/daitchpro.com-60.svg' },
  { code: 'gu', label: 'ગુજરાતી', flag: 'src/assets/Languages/daitchpro.com-61.svg' },
  { code: 'ht', label: 'Kreyòl ayisyen', flag: 'src/assets/Languages/daitchpro.com-62.svg' },
  { code: 'ha', label: 'Hausa', flag: 'src/assets/Languages/daitchpro.com-63.svg' },
  { code: 'haw', label: 'ʻŌlelo Hawaiʻi', flag: 'src/assets/Languages/daitchpro.com-64.svg' },
  { code: 'hmn', label: 'Hmong', flag: 'src/assets/Languages/daitchpro.com-65.svg' },
  { code: 'ig', label: 'Igbo', flag: 'src/assets/Languages/daitchpro.com-66.svg' },
  { code: 'ga', label: 'Gaeilge', flag: 'src/assets/Languages/daitchpro.com-67.svg' },
  { code: 'jv', label: 'Basa Jawa', flag: 'src/assets/Languages/daitchpro.com-68.svg' },
  { code: 'kn', label: 'ಕನ್ನಡ', flag: 'src/assets/Languages/daitchpro.com-69.svg' },
  { code: 'kk', label: 'Қазақ', flag: 'src/assets/Languages/daitchpro.com-70.svg' },
  { code: 'km', label: 'ខ្មែរ', flag: 'src/assets/Languages/daitchpro.com-71.svg' },
  { code: 'rw', label: 'Kinyarwanda', flag: 'src/assets/Languages/daitchpro.com-72.svg' },
  { code: 'ku', label: 'Kurdî', flag: 'src/assets/Languages/daitchpro.com-73.svg' },
  { code: 'ky', label: 'Кыргызча', flag: 'src/assets/Languages/daitchpro.com-74.svg' },
  { code: 'lo', label: 'ລາວ', flag: 'src/assets/Languages/daitchpro.com-75.svg' },
  { code: 'lv', label: 'Latviešu', flag: 'src/assets/Languages/daitchpro.com-76.svg' },
  { code: 'lt', label: 'Lietuvių', flag: 'src/assets/Languages/daitchpro.com-77.svg' },
  { code: 'lb', label: 'Lëtzebuergesch', flag: 'src/assets/Languages/daitchpro.com-78.svg' },
  { code: 'mk', label: 'Македонски', flag: 'src/assets/Languages/daitchpro.com-79.svg' },
  { code: 'mg', label: 'Malagasy', flag: 'src/assets/Languages/daitchpro.com-80.svg' },
  { code: 'ml', label: 'മലയാളം', flag: 'src/assets/Languages/daitchpro.com-81.svg' },
  { code: 'mt', label: 'Malti', flag: 'src/assets/Languages/daitchpro.com-82.svg' },
  { code: 'mi', label: 'Te Reo Māori', flag: 'src/assets/Languages/daitchpro.com-83.svg' },
  { code: 'mr', label: 'मराठी', flag: 'src/assets/Languages/daitchpro.com-84.svg' },
  { code: 'mn', label: 'Монгол', flag: 'src/assets/Languages/daitchpro.com-85.svg' },
  { code: 'my_mm', label: 'မြန်မာ', flag: 'src/assets/Languages/daitchpro.com-86.svg' },
  { code: 'ne', label: 'नेपाली', flag: 'src/assets/Languages/daitchpro.com-87.svg' },
  { code: 'or', label: 'ଓଡ଼ିଆ', flag: 'src/assets/Languages/daitchpro.com-88.svg' },
  { code: 'ps', label: 'پښتو', flag: 'src/assets/Languages/daitchpro.com-89.svg' },
  { code: 'fa', label: 'فارسی', flag: 'src/assets/Languages/daitchpro.com-90.svg' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', flag: 'src/assets/Languages/daitchpro.com-91.svg' },
  { code: 'sm', label: 'Gagana Samoa', flag: 'src/assets/Languages/daitchpro.com-92.svg' },
  { code: 'gd', label: 'Gàidhlig', flag: 'src/assets/Languages/daitchpro.com-93.svg' },
  { code: 'sr', label: 'Српски', flag: 'src/assets/Languages/daitchpro.com-94.svg' },
  { code: 'st', label: 'Sesotho', flag: 'src/assets/Languages/daitchpro.com-95.svg' },
  { code: 'sn', label: 'ChiShona', flag: 'src/assets/Languages/daitchpro.com-96.svg' },
  { code: 'sd', label: 'सिन्धी', flag: 'src/assets/Languages/daitchpro.com-97.svg' },
  { code: 'si', label: 'සිංහල', flag: 'src/assets/Languages/daitchpro.com-98.svg' },
  { code: 'sk', label: 'Slovenčina', flag: 'src/assets/Languages/daitchpro.com-99.svg' },
  { code: 'sl', label: 'Slovenščina', flag: 'src/assets/Languages/daitchpro.com-100.svg' },
  { code: 'so', label: 'Soomaali', flag: 'src/assets/Languages/daitchpro.com-101.svg' },
  { code: 'su', label: 'Basa Sunda', flag: 'src/assets/Languages/daitchpro.com-102.svg' },
  { code: 'sw', label: 'Kiswahili', flag: 'src/assets/Languages/daitchpro.com-103.svg' },
  { code: 'tg', label: 'Тоҷикӣ', flag: 'src/assets/Languages/daitchpro.com-104.svg' },
  { code: 'tt', label: 'Татар', flag: 'src/assets/Languages/daitchpro.com-105.svg' },
  { code: 'tk', label: 'Türkmençe', flag: 'src/assets/Languages/daitchpro.com-106.svg' },
  { code: 'ur', label: 'اردو', flag: 'src/assets/Languages/daitchpro.com-107.svg' },
  { code: 'ug', label: 'ئۇيغۇرچە', flag: 'src/assets/Languages/daitchpro.com-108.svg' },
  { code: 'uz', label: "O'zbek", flag: 'src/assets/Languages/daitchpro.com-109.svg' },
  { code: 'cy', label: 'Cymraeg', flag: 'src/assets/Languages/daitchpro.com-110.svg' },
  { code: 'xh', label: 'isiXhosa', flag: 'src/assets/Languages/daitchpro.com-111.svg' },
  { code: 'yi', label: 'ייִדיש', flag: 'src/assets/Languages/daitchpro.com-112.svg' },
  { code: 'yo', label: 'Yorùbá', flag: 'src/assets/Languages/daitchpro.com-113.svg' },
  { code: 'zu', label: 'isiZulu', flag: 'src/assets/Languages/daitchpro.com-114.svg' },
  { code: 'is', label: 'Íslenska', flag: 'src/assets/Languages/daitchpro.com-115.svg' },
  { code: 'la', label: 'Latina', flag: 'src/assets/Languages/daitchpro.com-116.svg' }
];

export default function Languages() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic
  const filteredLanguages = LANGUAGES_DATA.filter((lang) =>
    lang.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pt-30 pb-12 relative overflow-hidden">
      
      {/* Optional: A subtle background element to make the glassmorphism pop */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#063B30]/5 to-transparent -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Back to Home Link ── */}
        <div className="mb-6 mt-3">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#063b3097] hover:text-[#063B30] font-medium transition-colors"
          >
            <FaArrowLeft size={14} />
            Back to home
          </Link>
        </div>

        {/* ── Headers ── */}
        <div className="text-center mb-8">
          <h1 
            className="text-3xl sm:text-4xl font-bold text-[#063A2F] mb-3" 
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Choose your language
          </h1>
          <p 
            className="text-[#383838] text-lg max-w-2xl mx-auto" 
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Select a language to view DaitchPro in your preferred language.
          </p>
          <p 
            className="text-gray-500 text-sm mt-2" 
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {LANGUAGES_DATA.length} languages available
          </p>
        </div>

        {/* ── Search Filter ── */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search language..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#063B30]/20 focus:border-[#063B30] shadow-sm transition-all text-gray-700"
            />
          </div>
        </div>

        {/* ── Glassmorphic Container ── */}
        <div 
          className="rounded-2xl p-6 sm:p-8 shadow-lg border border-white/40" 
          style={{
            background: 'rgba(255, 255, 255, 0.92)',
            boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.08)',
            backdropFilter: 'blur(12px)',
            minHeight: '320px'
          }}
        >
          {/* ── Language Grid ── */}
          {filteredLanguages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              {filteredLanguages.map((lang) => (
                <Link
                  key={lang.code}
                  to={`/?lang=${lang.code}`}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border border-gray-200/80 bg-white/80 hover:border-[#063B30] hover:bg-[#063B30]/5 hover:shadow-md transition-all group min-h-[56px]"
                >
                  <span className="shrink-0 flex items-center justify-center w-9 h-7">
                    {/* Render standard image flag, or text emoji for Esperanto */}
                    {lang.flag === '🌐' ? (
                      <span className="inline-flex items-center justify-center text-xl w-[28px] h-[21px]" aria-hidden="true">
                        🌐
                      </span>
                    ) : (
                      <img
                        src={lang.flag}
                        alt={`${lang.label} flag`}
                        className="w-[28px] h-[21px] shrink-0 rounded object-cover shadow-sm"
                        loading="lazy"
                      />
                    )}
                  </span>
                  <span 
                    className="font-medium text-[#383838] group-hover:text-[#063B30] text-sm sm:text-base leading-snug flex-1 min-w-0 transition-colors"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {lang.label}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center">
              <FiSearch className="text-gray-300 text-4xl mb-3" />
              <p className="text-gray-500 font-medium">
                No languages found matching <span className="text-gray-800">"{searchTerm}"</span>
              </p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-[#063B30] hover:underline text-sm font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}