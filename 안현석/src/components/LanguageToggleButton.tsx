import { useLanguage } from "../contexts/LanguageContext";

const LanguageToggleButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {language === "ko" ? "Switch to English 🇺🇸" : "한국어로 변경 🇰🇷"}
    </button>
  );
};

export default LanguageToggleButton;
