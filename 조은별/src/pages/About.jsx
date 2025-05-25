import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col justify-start min-h-screen px-8 py-10 text-left">
      <h1 className="text-4xl font-bold mb-4 text-red-400">안녕하세요!</h1>
      <h2 className="text-lg text-gray-700 mb-4">
        영남대학교 컴퓨터공학과 재학 중인 조은별입니다!
      </h2>
      <p className="text-lg text-gray-700">멋사 화이팅 🦁🔥</p>
    </div>
  );
};

export default About;
