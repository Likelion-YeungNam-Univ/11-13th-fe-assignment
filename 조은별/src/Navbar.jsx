import { Link } from "react-router-dom";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Navbar = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const text = {
    kor: {
      home: "홈",
      projects: "프로젝트",
      about: "자기소개",
    },
    eng: {
      home: "Home",
      projects: "Projects",
      about: "About",
    },
  };

  const lan = text[language];

  return (
    <nav className="flex justify-center items-center space-x-8 py-4 shadow-md bg-white">
      <div className="flex space-x-8">
        <Link to="/" className="text-lg font-medium hover:text-red-400">
          {lan.home}
        </Link>
        <Link to="/projects" className="text-lg font-medium hover:text-red-400">
          {lan.projects}
        </Link>
        <Link to="/about" className="text-lg font-medium hover:text-red-400">
          {lan.about}
        </Link>
      </div>
      <button
        onClick={changeLanguage}
        className="text-sm px-3 py-1 rounded bg-red-400 text-white hover:bg-red-400 cursor-pointer"
      >
        {language === "kor" ? "ENG" : "KOR"}
      </button>
    </nav>
  );
};

export default Navbar;
