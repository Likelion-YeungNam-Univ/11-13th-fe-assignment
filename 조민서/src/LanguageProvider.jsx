import React, { useState } from "react";
import LanguageContext from "./LanguageContext"; 

const LanguageProvider = ({ children }) => {
  
  const [language, setLanguage] = useState("en");


  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ko" : "en"));
  };

  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
