import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate(`/home`);
  };
  return (
    <div>
      <h1 className="p-4 text-6xl font-bold text-center bg-gray-300">
        💻TaeHyeon의 포트폴리오
      </h1>
      <img
        src="/images/image-home1.jpeg"
        alt="홈 배너"
        className="mx-auto w-full min-h-screen rounded shadow"
      />
    </div>
  );
};

export default Home;
