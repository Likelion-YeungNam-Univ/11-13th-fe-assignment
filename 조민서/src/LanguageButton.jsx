import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

const LanguageButton = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === "en" ? "한국어로 보기" : "Switch to English"}
      </button>
    </div>
  );
};

export default LanguageButton
