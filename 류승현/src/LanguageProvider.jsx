import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState({
    isChanged: false,
    languageIs: "한국어",
  });

  const KO = (lang) => {
    setLanguage({
      isChanged: false,
      languageIs: "한국어",
    });
  };

  const EN = (lang) => {
    setLanguage({
      isChanged: true,
      languageIs: "English",
    });
  };

  return (
    <LanguageContext.Provider value={{ language, KO, EN }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
