import React, { useContext } from "react";
import LanguageContext from "../contexts/Languagecontext";

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const btnClass = "p-1 border";

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  return (
    <header className="flex gap-2">
      <span className={btnClass}>Language:{language.toUpperCase()}</span>
      <button className={btnClass} onClick={toggleLanguage}>
        언어 변경
      </button>
    </header>
  );
};

export default LanguageSelector;
