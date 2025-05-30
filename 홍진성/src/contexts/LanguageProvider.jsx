import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("🇰🇷 KO");

  const changeLang = (nowLang) => {
    nowLang === "🇰🇷 KO" ? setLanguage("🇺🇸 EN") : setLanguage("🇰🇷 KO");
  };

  return (
    <LanguageContext.Provider value={{ language, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
