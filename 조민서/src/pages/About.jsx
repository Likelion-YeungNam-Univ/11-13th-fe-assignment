import React, { useContext } from 'react';
import LanguageContext from '../LanguageContext';

const About = () => {
  const { language } = useContext(LanguageContext);


  const texts = {
    heading: {
      en: 'About Me!',
      ko: '소개',
    },
     line1: {
     en: "Hello! I'm Minsu Jo.",
      ko: '안녕하세요! 조민서입니다.',
    },
    line2: {
      en: 'Currently a 3rd year student at Yeungnam University.',
      ko: '현재 영남대학교 3학년 재학 중입니다.',
    },
    line3: {
      en: 'My MBTI is ISTP.',
      ko: 'MBTI는 ISTP입니다!',
    },
    line4: {
      en: 'I’m studying frontend development and exploring various technologies.',
      ko: '프론트엔드 개발을 공부하고 있으며, 다양한 기술들을 배우고 적용해 나가고 있습니다.',
    },
  };

  return (
    <div className="p-4 min-h-screen bg-black">
      <h1 className="text-4xl font-bold mb-6 text-center text-white italic">
        {texts.heading[language]}
      </h1>

      <div className="p-10 bg-black flex justify-center">
        <div className="text-white text-xl text-center space-y-4">
          <p>{texts.line1[language]}</p>
          <p>{texts.line2[language]}</p>
          <p>{texts.line3[language]}</p>
          <p>{texts.line4[language]}</p>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <img
          src="/assets/img1.png"
          alt={language === 'en' ? 'Profile' : '소개 이미지'}
          className="w-1/3 h-auto"
        />
      </div>
    </div>
  );
};

export default About
