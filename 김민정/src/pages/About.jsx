import React, { useContext } from "react";
import LanguageContext from "../LanguageContext";

const About = () => {
  const { language } = useContext(LanguageContext);
  const { languageIs } = language;

  return (
    <div>
      {languageIs === "한국어" ? (
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
      ) : (
        <div>
          <h1 className="flex justify-center mt-5 text-3xl font-bold">
            Hello, My name is Kim Minjung, a 25th year computer science student!
          </h1>
          <div className="flex justify-center mt-2 mb-5">
            I am participating in LIKELION YU 13th and learning about Front-End.
          </div>
          <hr />
          <div className="flex flex-col space-y-10 mt-5">
            <span className="font-bold text-4xl flex justify-center text-blue-950">
              🎈 Hobby
            </span>
            <div className="flex items-center justify-center space-x-40">
              <span className="text-xl">1. Watch a film</span>
              <span className="text-xl">2. Go for a walk</span>
              <span className="text-xl">3. Take a photo</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
