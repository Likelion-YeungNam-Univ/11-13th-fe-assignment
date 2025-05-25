import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const toProjects = () => navigate("/projects");
  const toAbout = () => navigate("/about");

  const btnStyle =
    "bg-blue-950 text-gray-200 rounded-2xl px-5 py-2 font-bold hover:bg-yellow-900 cursor-pointer";

  return (
    <div className="text-center">
      <h1 className="text-4xl text-blue-950 font-style: italic font-extrabold pt-16 pb-5">
        Hyejin's PORTFOLIO
      </h1>
      <p className="pb-2">신혜진의 포트폴리오 페이지에 오신 것을 환영합니다!</p>
      <p>
        상단 네비게이션 바 또는 하단의 버튼을 통해 프로젝트와 자기소개 페이지로
        이동할 수 있습니다 :D
      </p>
      <div className="space-x-3 pt-10">
        <button onClick={toProjects} className={btnStyle}>
          프로젝트 목록 페이지 가기
        </button>
        <button onClick={toAbout} className={btnStyle}>
          자기소개 페이지 가기
        </button>
      </div>
    </div>
  );
};

export default Home;
