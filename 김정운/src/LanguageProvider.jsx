import React, { useState } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ko");
  const toggleLanguage = () => setLanguage(prev => prev === "ko" ? "en" : "ko");
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;