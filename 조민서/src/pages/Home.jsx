import React, { useContext } from 'react';
import LanguageContext from '../LanguageContext';

const Home = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    title: {
      en: `Hello! I'm frontend developer Minsu Jo.`,
      ko: '안녕하세요! 프론트엔드 개발자 조민서 입니다.',
    },
    subtitle: {
      en: 'I’m attending Yeungnam University and currently studying frontend concepts.',
      ko: '영남대학교를 재학중이며, 현재 프론트엔드 관련 개념들을 공부하고 있습니다',
    },
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white p-8">
      <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg text-center">
        {texts.title[language]}
      </h1>
      <p className="text-xl max-w-xl text-center mb-10 opacity-90">
        {texts.subtitle[language]}
      </p>
    </div>
  );
};

export default Home
