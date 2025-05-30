import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "./LanguageContext";

const Navbar = () => {
  const linkStyle = "p-7 hover:text-white";
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <nav className="flex justify-between p-4 bg-blue-950 text-gray-300 font-semibold">
      <div>
        <Link to="/" className={linkStyle}>
          Home
        </Link>
        <Link to="/projects" className={linkStyle}>
          Projects
        </Link>
        <Link to="/about" className={linkStyle}>
          Introduction
        </Link>
      </div>
      <button
        onClick={changeLanguage}
        className="border-2 px-2 bg-gray-300 text-blue-950 hover:bg-white cursor-pointer"
      >
        {language === "ko" ? "ENGLISH 전환" : "한국어 전환"}
      </button>
    </nav>
  );
};

export default Navbar;
