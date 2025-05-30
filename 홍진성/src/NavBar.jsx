import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "./contexts/LanguageContext";

const NavBar = () => {
  const { language, changeLang } = useContext(LanguageContext);

  const texts = {
    "🇰🇷 KO": {
      home: "홈",
      about: "소개",
      projects: "프로젝트 목록",
      change: "변경",
      title: "11회차 과제 Context API",
    },
    "🇺🇸 EN": {
      home: "Home",
      about: "About",
      projects: "Project List",
      change: "Change",
      title: "11th-FE-Assignment Context API",
    },
  };

  return (
    <nav className="flex min-h-15 px-5 py-4 bg-gradient-to-r from-blue-200 to-red-200 justify-between overflow-hidden">
      <span className="flex space-x-6">
        <Link
          to="/"
          className="font-semibold text-lg hover:underline hover:scale-110"
        >
          {texts[language].home}
        </Link>
        <Link
          to="/about"
          className="font-semibold text-lg hover:underline hover:scale-110"
        >
          {texts[language].about}
        </Link>
        <Link
          to="/projects"
          className="font-semibold text-lg hover:underline hover:scale-110"
        >
          {texts[language].projects}
        </Link>
      </span>

      <span className="flex space-x-2">
        <span className="flex border">
          <div className="w-12 h-7 text-center text-md font-semibold">
            {language}
          </div>
          <button
            onClick={() => changeLang(language)}
            className="bg-black text-white px-1 h-7 hover:bg-gray-600"
          >
            {texts[language].change}
          </button>
        </span>

        <a
          href="https://github.com/Likelion-YeungNam-Univ/11-13th-fe-assignment/tree/feature/hong_jin_seong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-lg font-semibold">{texts[language].title}</h3>
        </a>
      </span>
    </nav>
  );
};

export default NavBar;
