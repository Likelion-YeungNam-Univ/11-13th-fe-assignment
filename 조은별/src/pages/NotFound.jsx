import React from "react";
import { useContext } from "react";
import LanguageContext from "../LanguageContext";

const NotFound = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    kor: {
      title: "페이지를 찾을 수 없습니다.",
      description: "요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.",
      button: "홈으로 돌아가기",
    },
    eng: {
      title: "Page Not Found",
      description: "The page you are looking for is no longer available.",
      button: "Return to Home",
    },
  };

  const lan = text[language];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-center px-5">
      <h1 className="text-8xl font-extrabold text-red-400 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-red-400 mb-2">
        {lan.title}
      </h2>
      <p className="text-black mb-6">{lan.description}</p>
      <a
        href="/"
        className="px-6 py-3 bg-red-400 text-white font-medium rounded-xl"
      >
        {lan.button}
      </a>
    </div>
  );
};

export default NotFound;
