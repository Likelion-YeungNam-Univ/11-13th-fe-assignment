// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white p-8">
      <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
        안녕하세요! 프론트엔드 개발자 조민서 입니다.
      </h1>
      <p className="text-xl max-w-xl text-center mb-10 opacity-90">
        영남대학교를 재학중이며, 현재 프론트엔드 관련 개념들을 <br/> 공부하고 있습니다
      </p>
    </div>
  );
};

export default Home;
