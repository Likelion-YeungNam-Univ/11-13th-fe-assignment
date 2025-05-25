import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const toHome = () => navigate("/");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center px-4">
      <h1 className="text-8xl font-bold text-blue-950 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">
        페이지를 찾을 수 없습니다
      </h2>
      <p className="">
        요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
      </p>
      <button
        onClick={toHome}
        className="mt-5 px-6 py-3 bg-blue-950 hover:bg-white hover:text-blue-950 text-white rounded-xl shadow-md transition cursor-pointer font-bold"
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default NotFound;
