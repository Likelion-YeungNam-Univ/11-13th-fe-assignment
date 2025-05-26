import React, { useContext } from "react";
import LanguageContext from "../contexts/Languagecontext";

const Home = () => {
  const { translation } = useContext(LanguageContext);

  return (
    <div>
      <h1 className="p-4 text-6xl font-bold text-center bg-gray-300">
        💻{translation("homeTitle")}
      </h1>
      <img
        src="/images/image-home1.jpeg"
        alt="홈 배너"
        className="mx-auto w-full min-h-screen rounded shadow"
      />
    </div>
  );
};

export default Home;
