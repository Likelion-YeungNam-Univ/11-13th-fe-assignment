// src/pages/Home.tsx
import React from "react";
import helloImg from "../assets/hello.png";
import { useLanguage } from "../contexts/LanguageContext";

const Home = () => {
  const { language, toggleLanguage } = useLanguage();

  const text = {
    ko: {
      greeting: "안녕하세요!",
      intro: "사용자를 생각하는 프론트엔드 개발자 안현석 입니다.",
      detail1:
        "🌱 변화를 받아들이며 나날이 새롭게, 꾸준히 성장하는 개발자가 되고 있습니다.",
      detail2:
        "🤝 부족한 부분을 보완하여 더 나은 서비스를 제공하고, \n협업을 통해 성장하길 좋아하는 개발자입니다.",
      toggle: "ENGLISH 보기",
    },
    en: {
      greeting: "Hello!",
      intro: "I'm Hyunseok Ahn, a frontend developer who cares about users.",
      detail1:
        "🌱 I'm growing every day by embracing change and consistently improving.",
      detail2:
        "🤝 I love collaborating and constantly strive to provide better service.",
      toggle: "한국어 보기",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-10 space-y-4">
      <img
        src={helloImg}
        alt="hello"
        className="w-52 h-52 mb-6 shadow-lg rounded-full"
      />
      <span className="font-extrabold text-4xl text-gray-800">
        {text[language].greeting}
      </span>
      <span className="font-semibold text-xl text-gray-700">
        {text[language].intro}
      </span>
      <span className="text-base text-gray-600 leading-relaxed max-w-xl whitespace-pre-line">
        {text[language].detail1}
      </span>
      <span className="text-base text-gray-600 leading-relaxed max-w-xl whitespace-pre-line">
        {text[language].detail2}
      </span>

      {/* SNS 링크는 그대로! */}
      <div className="flex space-x-8 mt-8">
        {/* GitHub & Instagram 링크 생략 */}
      </div>
    </div>
  );
};

export default Home;
