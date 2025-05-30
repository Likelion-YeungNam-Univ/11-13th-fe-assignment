import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState({
    isChanged: false,
    languageIs: "한국어",
  });

  const EN = () => {
    setLanguage({
      isChanged: true,
      languageIs: "English",
    });
  };

  const KO = () => {
    setLanguage({
      isChanged: false,
      languageIs: "한국어",
    });
  };

  return (
    <LanguageContext.Provider value={{ language, KO, EN }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
