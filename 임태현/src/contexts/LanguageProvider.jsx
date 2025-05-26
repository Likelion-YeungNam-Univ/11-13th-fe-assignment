import React, { useState } from "react";
import translations from "../translations/translations";
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ko");

  const translation = (key) => {
    const keys = key.split(".");
    let result = translations[language];
    for (const k of keys) {
      result = result?.[k];
      if (!result) return key;
    }
    return result;
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, translation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
