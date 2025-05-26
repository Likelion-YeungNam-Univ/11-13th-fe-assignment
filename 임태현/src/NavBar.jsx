import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LanguageContext from "./contexts/Languagecontext";
import LanguageSelector from "./components/LanguageSelector";

const NavBar = () => {
  const navigate = useNavigate();
  const { translation } = useContext(LanguageContext);
  return (
    <nav className="flex p-4 bg-black text-white">
      <button className="mr-8" onClick={() => navigate(-1)}>
        ←
      </button>
      <button className="mr-8" onClick={() => navigate("/home")}>
        {translation("homeName")}
      </button>
      <button className="mr-8" onClick={() => navigate("/projects")}>
        {translation("projectsName")}
      </button>
      <button className="mr-8" onClick={() => navigate("/about")}>
        {translation("aboutName")}
      </button>
      <div className="ml-auto">
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default NavBar;
