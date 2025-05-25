// src/pages/About.jsx
import React from 'react';

const About = () => (
  <div className="p-4 min-h-screen bg-black">
    <h1 className="text-4xl font-bold mb-6 text-center text-white italic">About Me!</h1>
     <div className="p-4 bg-black flex justify-center items-center p-10">
    <div className="text-white text-xl text-center">
      <p className="mb-4">안녕하세요! <span className="font-bold">조민서</span>입니다.</p>
      <p className="mb-4">현재 <span className="font-bold">영남대학교 3학년</span> 재학 중입니다.</p>
      <p className="mb-4">MBTI는 <span className="font-bold">ISTP</span>입니다!</p>
      <p className="mb-4">프론트엔드 개발을 공부하고 있으며, 다양한 기술들을 배우고 <br/> 적용해 나가고 있습니다.</p>
    </div>
  </div>
    <div className="flex justify-center mb-10">
      <img src="/assets/img1.png" alt="소개 이미지" className="w-1/3 h-auto"/>
    </div>
  </div>
);

export default About;
