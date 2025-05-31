import React, { useContext } from "react";
import profile from "../assets/profile2.png";
import LanguageContext from "../contexts/LanguageContext";

const instaIcon =
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg";
const soundcloudIcon =
  "https://www.vectorlogo.zone/logos/soundcloud/soundcloud-tile.svg";
const githubIcon =
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg";

const InfoTable = ({ label, value }) => (
  <div className="flex border-b border-gray-300">
    <div className="flex w-30 items-center justify-center bg-black text-white font-semibold px-4 py-2 border-r border-gray-300 text-sm">
      {label}
    </div>
    <div className="flex-1 px-3 py-2 text-sm">{value}</div>
  </div>
);

const About = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    "🇰🇷 KO": {
      label: {
        name: "이름",
        birth: "출생",
        birthPlace: "출생지",
        body: "신체",
        family: "가족",
        education: "학력",
        org: "소속",
        hobby: "취미",
        mbti: "MBTI",
        link: "링크",
      },
      value: {
        name: "홍진성",
        birth: "2002년 1월 10일",
        birthPlace: "경상북도 포항시",
        body: "173cm | 70kg | O형",
        family: "아버지 어머니 여동생",
        education: (
          <div className="flex flex-col space-y-1">
            <div>대도중학교 졸업</div>
            <div>대동고등학교 졸업</div>
            <div>영남대학교 로봇공학과 재학</div>
          </div>
        ),
        org: "YU 멋쟁이사자처럼 13기 FE",
        hobby: "농구, 헬스, 음악, 디저트",
        mbti: "INFJ",
      },
    },
    "🇺🇸 EN": {
      label: {
        name: "Name",
        birth: "Date of Birth",
        birthPlace: "Birthplace",
        body: "Body",
        family: "Family",
        education: "Education",
        org: "Affiliation",
        hobby: "Hobbies",
        mbti: "MBTI",
        link: "Links",
      },
      value: {
        name: "Jinseong Hong",
        birth: "January 10, 2002",
        birthPlace: "Pohang, Gyeongsangbuk-do, South Korea",
        body: "173cm | 70kg | Blood type O",
        family: "Father, Mother, Younger Sister",
        education: (
          <div className="flex flex-col space-y-1">
            <div>Daedo Middle School</div>
            <div>Daedong High School</div>
            <div>Yeungnam Univ. Dept. of Robotics Engineering</div>
          </div>
        ),
        org: "LIKELION YU 13th FE",
        hobby: "Basketball, Fitness, Music, Desserts",
        mbti: "INFJ",
      },
    },
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <img
        src={profile}
        className="flex items-center justify-center w-75 h-104"
        alt="profile"
      />
      <div className="border border-gray-300 rounded overflow-hidden">
        <InfoTable
          label={texts[language].label.name}
          value={texts[language].value.name}
        />
        <InfoTable
          label={texts[language].label.birth}
          value={texts[language].value.birth}
        />
        <InfoTable
          label={texts[language].label.birthPlace}
          value={texts[language].value.birthPlace}
        />
        <InfoTable
          label={texts[language].label.body}
          value={texts[language].value.body}
        />
        <InfoTable
          label={texts[language].label.family}
          value={texts[language].value.family}
        />
        <InfoTable
          label={texts[language].label.education}
          value={texts[language].value.education}
        />
        <InfoTable
          label={texts[language].label.org}
          value={texts[language].value.org}
        />
        <InfoTable
          label={texts[language].label.hobby}
          value={texts[language].value.hobby}
        />
        <InfoTable
          label={texts[language].label.mbti}
          value={texts[language].value.mbti}
        />
        <InfoTable
          label={texts[language].label.link}
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
