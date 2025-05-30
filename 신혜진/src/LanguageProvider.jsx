import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ko");

  const changeLanguage = () => {
    setLanguage((prev) => (prev === "ko" ? "en" : "ko"));
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
