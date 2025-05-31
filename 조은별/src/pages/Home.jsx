import { useContext } from "react";
import LanguageContext from "../LanguageContext";

const Home = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    kor: {
      title: "안녕하세요!",
      description1: "조은별의 포트폴리오입니다!",
      description2: "제가 만든 프로젝트를 확인해보세요.",
    },
    eng: {
      title: "Hello!",
      description1: "This is Eunbyeol's portfolio!",
      description2: "Please take a look at my projects.",
    },
  };

  const lan = text[language];

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col justify-center items-center px-6 py-10 text-left">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-400">{lan.title}</h1>
        <h2 className="text-lg text-gray-700 mb-4">{lan.description1}</h2>
        <p className="text-lg text-gray-700">{lan.description2}</p>
      </div>
    </div>
  );
};

export default Home;
