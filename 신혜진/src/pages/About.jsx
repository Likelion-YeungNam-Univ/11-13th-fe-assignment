import React, { useContext } from "react";
import profileImg from "../assets/profileImg.png";
import LanguageContext from "../LanguageContext";

const profileData = {
  ko: [
    { key: "이름", value: "신혜진" },
    { key: "생년월일", value: "2004-06-03" },
    { key: "성별", value: "여" },
    { key: "혈액형", value: "AB" },
    { key: "MBTI", value: "ISTP" },
    { key: "학교", value: "영남대학교" },
    { key: "학부(학과)", value: "컴퓨터학부 소프트웨어융합전공" },
    { key: "학년", value: "3학년" },
  ],
  en: [
    { key: "Name", value: "Hyejin Shin" },
    { key: "Birth", value: "2004-06-03" },
    { key: "Gender", value: "Female" },
    { key: "Blood Type", value: "AB" },
    { key: "MBTI", value: "ISTP" },
    { key: "School", value: "Yeungnam University" },
    { key: "Department", value: "Computer Software Convergence" },
    { key: "Year", value: "3rd year" },
  ],
};

const About = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <h1 className="p-10 text-3xl text-center text-blue-950 font-extrabold">
        {language === "ko" ? "자기소개" : "About me . . ."}
      </h1>
      {/* 프로필*/}
      <div className="mx-60 flex justify-center items-start gap-12">
        <div>
          <h2 className="text-xl text-blue-950 font-bold">
            {language === "ko" ? "프로필" : "Profile"}
          </h2>
          <ul className="bg-blue-950 text-gray-200 p-7 space-y-1 w-fit">
            {profileData[language].map((item, idx) => (
              <li key={idx} className="flex">
                <span className="w-28 font-semibold">{item.key}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <img src={profileImg} className="pt-12 w-96 h-72 object-cover" />
      </div>
      {/* 자기소개 */}
      <div className="mx-60 my-14">
        <h2 className="text-xl text-blue-950 font-bold">
          {language === "ko" ? "자기소개" : "Self-Introduction"}
        </h2>
        <p className="border-3 border-blue-950 p-4">
          {language === "ko"
            ? "안녕하세요! 멋쟁이사자처럼 13기 프론트엔드 아기사자 신혜진입니다. 앞으로 열심히 하겠습니다!"
            : "Hello! I'm Shin Hyejin, the 13th front-end baby lion of likelion. I'll work hard in the future!"}
        </p>
      </div>
    </div>
  );
};

export default About;
