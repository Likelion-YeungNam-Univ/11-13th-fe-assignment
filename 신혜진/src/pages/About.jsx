import React from "react";
import profileImg from "../assets/profileImg.png";

const profileData = [
  { key: "이름", value: "신혜진" },
  { key: "생년월일", value: "2004-06-03" },
  { key: "성별", value: "여" },
  { key: "혈액형", value: "AB" },
  { key: "MBTI", value: "ISTP" },
  { key: "학교", value: "영남대학교" },
  { key: "학부(학과)", value: "컴퓨터학부 소프트웨어융합전공" },
  { key: "학년", value: "3학년" },
];

const About = () => {
  return (
    <div>
      <h1 className="p-10 text-3xl text-center text-blue-950 font-extrabold">
        About me . . .
      </h1>
      {/* 프로필*/}
      <div className="mx-60 flex justify-center items-start gap-12">
        <div>
          <h2 className="text-xl text-blue-950 font-bold">Profile</h2>
          <ul className="bg-blue-950 text-gray-200 p-7 space-y-1 w-fit">
            {profileData.map((item, key) => (
              <li key={key} className="flex">
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
        <h2 className="text-xl text-blue-950 font-bold">Self-Introduction</h2>
        <p className="border-3 border-blue-950 p-4">
          안녕하세요! 멋쟁이사자처럼 13기 프론트엔드 아기사자 신혜진입니다.
          앞으로 열심히 하겠습니다!
        </p>
      </div>
    </div>
  );
};

export default About;
