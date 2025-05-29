import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LanguageContext from './LanguageContext';

function BackButton() {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  return (
    <button
      onClick={() => navigate(-1)}
      className="px-2 py-1 border rounded text-white bg-black hover:bg-gray-700"
    >
      {language === 'en' ? 'Back' : '뒤로가기'}
    </button>
  );
}

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <nav className="p-4 border-b flex items-center gap-4 bg-black font-bold text-xl text-white">
      <Link to="/"         className="hover:underline"> {language === 'en' ? 'Home'     : '홈'}     </Link>
      <Link to="/projects" className="hover:underline"> {language === 'en' ? 'Projects' : '프로젝트'} </Link>
      <Link to="/about"    className="hover:underline"> {language === 'en' ? 'About'    : '소개'}    </Link>

      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={toggleLanguage}
          className="px-2 py-1 border rounded bg-white text-black hover:bg-gray-200"
        >
          {language === 'en' ? 'KO' : 'EN'}
        </button>
        <BackButton />
      </div>
    </nav>
  );
}

export default Navbar;
