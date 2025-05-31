import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageSelector = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return <button onClick={toggleLanguage}>Language: {language}</button>;
};

export default LanguageSelector;
