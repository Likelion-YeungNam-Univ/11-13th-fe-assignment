import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClickAbout = () => {
    navigate(`/about`);
  };
  return (
    <div>
      <h1 className="p-4 text-center text-6xl font-bold bg-gray-300">
        📖자기소개
      </h1>
      <div className="bg-white text-black space-y-6 p-6 w-full min-h-screen">
        <h1 className="text-6xl font-extrabold mb-4">임태현</h1>
        <hr />
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">구분</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">
            아기사자
          </span>
        </div>
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">태그</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">FE</span>
        </div>
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">MBTI</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">
            ESFP
          </span>
        </div>
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">instagram</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">
            hyun_e_0
          </span>
        </div>
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">이메일</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">
            ith021212@naver.com
          </span>
        </div>
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">GitHub</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">
            limtaehyeon
          </span>
        </div>
        <hr />
        <div className="space-y-5">
          <div className="flex flex-col space-y-10 items-center">
            <span className="underline  font-bold text-5xl text-gray-600">
              자기소개
            </span>
            <span className="text-3xl">
              안녕하세요! 컴퓨터 공학과 3학년 임태현입니다! 1년 동안 끈기와
              열정을 가지고 열심히 프론트 엔드 공부해보겠습니다!
            </span>
          </div>
          <hr />
          <div className="flex flex-col space-y-10">
            <span className="underline font-bold text-center text-5xl text-gray-600">
              취미
            </span>
            <div className="flex items-center justify-center space-x-40">
              <span className="text-3xl">1. 운동</span>
              <span className="text-3xl">2. 영화보기</span>
              <span className="text-3xl">3. 맛집 탐방</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
