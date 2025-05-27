import React, { useContext } from "react";
import LanguageContext from "../LanguageContext";

const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {language.languageIs === "English" ? (
        <div className="min-h-screen p-25 bg-linear-to-r from-blue-600 to-pink-500">
          <div className="bg-neutral-100 rounded-2xl p-4">
            <h1 className="text-4xl font-bold mb-4">Hello!</h1>
            <h2 className="text-2xl">
              I'm Seunghyun Ryu, the 13th baby lion in likelion.
            </h2>
            <h2 className="text-2xl mb-4">
              I'm studying HTML, JavaScript and React in the Front-End part!
            </h2>
          </div>
          <div className="bg-neutral-100 rounded-2xl p-4 mt-5">
            <h2 className="text-2xl font-bold">
              Interest
              <ul className="font-light">
                <li>- Exercise(/🏀Basketball, /🏃‍♂️‍➡️Running etc)</li>
                <li>- 🎧Listeing music</li>
                <li>- 🎬Watching movie</li>
              </ul>
            </h2>
          </div>
        </div>
      ) : (
        <div className="min-h-screen p-25 bg-linear-to-r from-blue-600 to-pink-500">
          <div className="bg-neutral-100 rounded-2xl p-4">
            <h1 className="text-4xl font-bold mb-4">안녕하세요!</h1>
            <h2 className="text-2xl">
              저는 멋쟁이사자처럼 13기 아기사자 류승현입니다.
            </h2>
            <h2 className="text-2xl mb-4">
              현재 Front-End 파트에서 HTML, JavaScript와 React를 공부하고
              있습니다!
            </h2>
          </div>
          <div className="bg-neutral-100 rounded-2xl p-4 mt-5">
            <h2 className="text-2xl font-bold">
              취미
              <ul className="font-light">
                <li>- 운동(/🏀농구, /🏃‍♂️‍➡️러닝 등)</li>
                <li>- 🎧노래 듣기</li>
                <li>- 🎬영화 보기</li>
              </ul>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
