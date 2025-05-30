import React, { useContext } from "react";
import LanguageContext from "../LanguageContext";

const Home = () => {
  const { language } = useContext(LanguageContext);
  const { languageIs } = language;

  return (
    <div className="p-5 text-2xl font-bold flex justify-center">
      {languageIs === "한국어"
        ? "김민정의 포트폴리오 🐹"
        : "Minjeong Kim's Portfolio 🐹"}
    </div>
  );
};

export default Home;
