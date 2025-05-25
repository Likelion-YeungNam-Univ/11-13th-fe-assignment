import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="flex justify-center mt-5 text-3xl font-bold">
        안녕하세요 25학번 컴퓨터공학과 김민정입니다!
      </h1>
      <div className="flex justify-center mt-2 mb-5">
        멋쟁이사자처럼 13기 아기사자로 참여하여 Front-End에 대해 배우고
        있습니다.
      </div>
      <hr />
      <div className="flex flex-col space-y-10 mt-5">
        <span className="font-bold text-4xl flex justify-center text-blue-950">
          🎈 취미
        </span>
        <div className="flex items-center justify-center space-x-40">
          <span className="text-xl">1. 영화보기</span>
          <span className="text-xl">2. 산책하기</span>
          <span className="text-xl">3. 사진찍기</span>
        </div>
      </div>
    </div>
  );
};

export default About;
