import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "./contexts/LanguageContext";

const NavBar = () => {
  const { language, changeLang } = useContext(LanguageContext);

  return (
    <nav className="flex min-h-15 px-5 py-4 bg-gradient-to-r from-blue-200 to-red-200 justify-between overflow-hidden">
      <span className="flex space-x-6">
        <Link
          to="/"
          className="font-semibold text-lg hover:underline hover:scale-110"
        >
          홈
        </Link>
        <Link
          to="/about"
          className="font-semibold text-lg hover:underline hover:scale-110"
        >
          소개
        </Link>
        <Link
          to="/projects"
          className="font-semibold text-lg hover:underline hover:scale-110"
        >
          프로젝트 목록
        </Link>
      </span>

      <span className="flex space-x-2">
        <span className="flex border">
          <div className="w-12 h-7 text-center text-md font-semibold">
            {language}
          </div>
          <button
            onClick={() => changeLang(language)}
            className="bg-black text-white w-9 h-7"
          >
            변경
          </button>
        </span>

        <a
          href="https://github.com/Likelion-YeungNam-Univ/11-13th-fe-assignment/tree/feature/hong_jin_seong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-lg font-semibold">11회차 과제 Context API</h3>
        </a>
      </span>
    </nav>
  );
};

export default NavBar;
