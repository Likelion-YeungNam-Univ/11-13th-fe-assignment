import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LanguageContext from "../LanguageContext";

const About = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    kor: {
      title: "안녕하세요!",
      description1: "영남대학교 컴퓨터공학과 재학 중인 조은별입니다!",
      description2: "멋사 화이팅 🦁🔥",
    },

    eng: {
      title: "Hello!",
      description1:
        "I'm Eunbyeol Cho, studying Computer Science at Yeungnam University!",
      description2: "Go LikeLion 🦁🔥",
    },
  };

  const lan = text[language];

  return (
    <div className="flex flex-col justify-start min-h-screen px-8 py-10 text-left">
      <h1 className="text-4xl font-bold mb-4 text-red-400">{lan.title}</h1>
      <h2 className="text-lg text-gray-700 mb-4">{lan.description1}</h2>
      <p className="text-lg text-gray-700">{lan.description2}</p>
    </div>
  );
};

export default About;
