import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";

const texts = {
  ko: {
    about: "자기소개",
    projects: "프로젝트 목록",
    langBtn: "영어로 보기",
  },
  en: {
    about: "About",
    projects: "Project List",
    langBtn: "View in Korean",
  },
};

const Navbar = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);

  const lang = texts[language] ? language : "ko";

  return (
    <nav className="p-4 bg-gray-100 flex justify-between items-center shadow-md h-15">
      <div>
        <Link to="/" className="p-3 m-1 bg-gray-200 hover:bg-gray-300 text-black font-medium rounded-full">
          🏚
        </Link>
        <Link to="/about" className="p-3 m-1 hover:bg-gray-300 text-black font-medium rounded-xl">
          {texts[lang].about}
        </Link>
        <Link to="/projects" className="p-3 m-1 hover:bg-gray-300 text-black font-medium rounded-xl">
          {texts[lang].projects}
        </Link>
      </div>
      <div>
        <button
          onClick={() => navigate(-1)}
          className="ml-4 px-2 py-1 bg-red-300 rounded-full hover:bg-red-400"
        >
          ←
        </button>
        <button
          onClick={() => navigate(+1)}
          className="ml-4 px-2 py-1 bg-green-300 rounded-full hover:bg-green-400 "
        >
          →
        </button>
        {/* 언어 변경 버튼은 하나만 남깁니다 */}
        <button
          onClick={toggleLanguage}
          className="ml-4 px-2 py-1 bg-blue-400 rounded-full hover:bg-blue-500 text-white"
        >
          {texts[lang].langBtn}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;