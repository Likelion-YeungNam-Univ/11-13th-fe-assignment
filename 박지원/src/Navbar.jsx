import { Link } from "react-router-dom";
import { useLanguage } from "./contexts/context";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="flex justify-evenly sticky top-0 w-full bg-blue-600">
      <div className="flex items-center">
        <span className="text-xl font-bold text-white">
          {language === "EN" ? "Jiwon's portfolio" : "박지원 포트폴리오"}
        </span>
      </div>

      <div className="flex space-x-4">
        <Link
          to="/"
          className="px-3 py-2 font-medium text-white hover:bg-blue-700"
        >
          {language === "EN" ? "Home" : "홈"}
        </Link>
        <Link
          to="/about"
          className="px-3 py-2 font-medium text-white hover:bg-blue-700"
        >
          {language === "EN" ? "About" : "자기소개"}
        </Link>
        <Link
          to="/projects"
          className="px-3 py-2 font-medium text-white hover:bg-blue-700"
        >
          {language === "EN" ? "Projects" : "프로젝트"}
        </Link>

        <button
          onClick={toggleLanguage}
          className="ml-2 px-3 py-2 font-medium text-white hover:bg-blue-700"
        >
          Language: {language}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
