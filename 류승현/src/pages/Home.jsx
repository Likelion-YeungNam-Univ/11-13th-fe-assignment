import React, { useContext } from "react";
import LanguageContext from "../LanguageContext";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {language.languageIs === "English" ? (
        <div className="flex flex-col h-auto min-h-screen p-25 bg-linear-to-r from-blue-600 to-pink-500">
          <h1 className="text-neutral-100 text-7xl font-bold">Mini</h1>
          <h1 className="text-neutral-100 text-7xl font-bold">Portfolio</h1>
          <div className="flex flex-row justify-end mt-40 text-neutral-100 text-xl font-bold">
            <h2 className="pr-3">Computer Science</h2>
            <h2 className="pr-3">3rd</h2>
            <h2>Ryu SeungHyun</h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-auto min-h-screen p-25 bg-linear-to-r from-blue-600 to-pink-500">
          <h1 className="text-neutral-100 text-7xl font-bold">미니</h1>
          <h1 className="text-neutral-100 text-7xl font-bold">포트폴리오</h1>
          <div className="flex flex-row justify-end mt-40 text-neutral-100 text-xl font-bold">
            <h2 className="pr-3">컴퓨터공학과</h2>
            <h2 className="pr-3">3학년</h2>
            <h2>류승현</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
