import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "./LanguageContext";

const Navbar = () => {
  const { language, KO, EN } = useContext(LanguageContext);
  const { languageIs } = language;

  const changeLanguage = () => {
    languageIs === "한국어" ? EN() : KO();
  };

  return (
    <nav className="p-4 bg-gray-100 flex justify-between items-center">
      <div>
        {languageIs === "한국어" ? (
          <>
            <Link to="/" className="mr-4">
              홈
            </Link>
            <Link to="/about" className="mr-4">
              자기소개
            </Link>
            <Link to="/projects" className="mr-4">
              프로젝트
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="mr-4">
              Home
            </Link>
            <Link to="/about" className="mr-4">
              About me
            </Link>
            <Link to="/projects" className="mr-4">
              Projects
            </Link>
          </>
        )}
      </div>
      <button
        onClick={changeLanguage}
        className="bg-white border px-3 py-1 rounded"
      >
        {languageIs === "한국어" ? "English" : "한국어"}
      </button>
    </nav>
  );
};

export default Navbar;
