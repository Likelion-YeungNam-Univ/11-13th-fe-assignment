import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";

const NotFound = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  const texts = {
    "🇰🇷 KO": {
      notFound: "페이지를 찾을 수 없습니다.",
      click: "화면을 클릭하세요.",
    },
    "🇺🇸 EN": {
      notFound: "Page Not Found",
      click: "Click anywhere to return.",
    },
  };

  return (
    <div
      onClick={() => navigate("/")}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-red-200 text-center px-4"
    >
      <h1 className="text-9xl font-extrabold text-purple-400 drop-shadow-lg mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
        {texts[language].notFound}
      </h2>
      <p className="text-gray-700 mb-6">{texts[language].click}</p>
    </div>
  );
};

export default NotFound;
