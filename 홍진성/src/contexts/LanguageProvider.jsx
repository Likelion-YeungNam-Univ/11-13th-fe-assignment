import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "🇰🇷 KO";
  });

  const changeLang = (nowLang) => {
    const newLang = nowLang === "🇰🇷 KO" ? "🇺🇸 EN" : "🇰🇷 KO";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
