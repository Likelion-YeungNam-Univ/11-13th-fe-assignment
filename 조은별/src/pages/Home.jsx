import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col justify-center items-center px-6 py-10 text-left">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-400">안녕하세요!</h1>
        <h2 className="text-lg text-gray-700 mb-4">
          조은별의 포트폴리오입니다!
        </h2>
        <p className="text-lg text-gray-700">
          제가 만든 프로젝트를 확인해보세요.
        </p>
      </div>
    </div>
  );
};

export default Home;
