
export default function LanguageSwitcher() {
  return (
    <div 
      className="flex items-center gap-2 text-[#383838] hover:text-[#3C995B] transition-colors cursor-pointer select-none text-[14px] xl:text-[18px] leading-[21px] font-normal"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <span role="img" aria-label="US Flag">🇺🇸</span>
      <span>English</span>
    </div>
  );
}
