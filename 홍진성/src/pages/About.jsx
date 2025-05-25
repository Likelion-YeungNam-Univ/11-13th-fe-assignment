import React from "react";
import profile from "../assets/profile2.png";

const instaIcon =
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg";

const soundcloudIcon =
  "https://www.vectorlogo.zone/logos/soundcloud/soundcloud-tile.svg";

const githubIcon =
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg";

const InfoTable = ({ label, value }) => (
  <div className="flex border-b border-gray-300">
    <div className="flex w-22 items-center justify-center bg-black text-white font-semibold px-4 py-2 border-r border-gray-300 text-sm">
      {label}
    </div>
    <div className="flex-1 px-3 py-2 text-sm">{value}</div>
  </div>
);

const About = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img
        src={profile}
        className="flex items-center justify-center w-75 h-104"
      />
      <div className="border border-gray-300 rounded overflow-hidden">
        <InfoTable label="이름" value="홍진성" />
        <InfoTable label="출생" value="2002년 1월 10일" />
        <InfoTable label="출생지" value="경상북도 포항시" />
        <InfoTable label="신체" value="173cm | 70kg | O형" />
        <InfoTable label="가족" value="아버지 어머니 여동생" />
        <InfoTable
          label="학력"
          value={
            <div className="flex flex-col space-y-1">
              <div>대도중학교 졸업</div>
              <div>대동고등학교 졸업</div>
              <div>영남대학교 로봇공학과 재학</div>
            </div>
          }
        />
        <InfoTable label="소속" value="YU 멋쟁이사자처럼 13기 FE" />
        <InfoTable label="취미" value="농구, 헬스, 음악, 디저트" />
        <InfoTable label="MBTI" value="INFJ" />
        <InfoTable
          label="링크"
          value={
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/gyeongsangseaman/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaIcon} className="h-5 w-5" />
              </a>
              <a
                href="https://soundcloud.com/newbadloo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={soundcloudIcon} className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/gyeongsangseaman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} className="h-5 w-5" />
              </a>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default About;
