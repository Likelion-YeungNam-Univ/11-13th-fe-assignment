import { createContext, useContext, useState } from "react";

// Context 생성
const LanguageContext = createContext({
  language: "ko",
  toggleLanguage: () => {},
});

// Provider 컴포넌트
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ko"); // 기본은 한국어

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ko" ? "en" : "ko"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// useContext를 간단히 쓰게 도와주는 훅
export const useLanguage = () => useContext(LanguageContext);
