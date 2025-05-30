import React, { useContext } from 'react'
import { LanguageContext } from '../LanguageContext';

const texts = {
  ko: {
    greeting: "안녕하세요!",
    portfolio: "정운's Portfolio 입니다 😎"
  },
  en: {
    greeting: "Hello!",
    portfolio: "This is Jeongun’s Portfolio 😎"
  }
}

const Home = () => {
  const { language } = useContext(LanguageContext);
  const lang = texts[language] ? language : "ko";

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center text-3xl">
      <div className="flex-row text-center align-middle bg-white-400 rounded">
        <p className="text-6xl">{texts[lang].greeting}</p>
        <p className="pt-30"><strong>{texts[lang].portfolio}</strong></p>
      </div>
    </div>
  )
}

export default Home