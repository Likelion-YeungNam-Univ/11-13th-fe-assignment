import React, { useContext } from 'react'
import { LanguageContext } from '../LanguageContext';
import githubImg from '../img/githubicon.png'
import instagramImg from '../img/instagram icon.png'


const Intro = () => {
  const { language } = useContext(LanguageContext);
  const korean = language === "ko";

  return (
    <div className="flex justify-center items-start overflow-y-auto bg-white-50 w-full">
      <div className="bg-yellow-50 rounded-xl border shadow-lg p-8 w-full max-w-2xl mt-10">
        <ul className="pb-6 mb-4 text-xl border-b ">
          <li className="pb-5"><strong>{korean ? "이름" : "Name"}:</strong> {korean ? "김정운" : "JeongUn Kim"}</li>
          <li className="pb-5 flex items-center">
            <strong>{korean ? "학과" : "Major"}: </strong>
            {korean
              ? " 통계학과 & 컴퓨터공학부 소프트웨어융합전공"
              : " Department of Statistics & School of Computer Science (Software Convergence Major)"}
          </li>
          <li className="pb-5"><strong>{korean ? "이메일" : "Email"}:</strong> 0911kjw@yu.ac.kr</li>
          <li className="pb-5"><strong>MBTI:</strong> ENFJ</li>
          <li className="pb-5 flex items-center">
            <strong className="mr-2">{korean ? "SNS" : "SNS"}:</strong>
            <a
              href="https://github.com/vni911"
              target="_blank"
            className="mr-4">
              <img src={githubImg} alt="GitHub" style={{ width: 28, height: 28 }} />
            </a>
            <a
              href="https://instagram.com/jw.9slity"
              target="_blank"
            >
              <img src={instagramImg} alt="Instagram" style={{ width: 28, height: 28 }} />
            </a>
          </li>
        </ul>

        <h2 className="text-lg font-bold mb-2">{korean ? "취미" : "Hobbies"}</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>{korean ? "배낭 여행 (국토 종주) 🚶‍♂️" : "Backpacking (cross-country) 🚶‍♂️"}</li>
          <li>{korean ? "Fomula 1 시청 📺" : "Watching Formula 1 📺"}</li>
          <li>{korean ? "운동(러닝, 구기 종목, 헬스)🏃‍♂️" : "Exercise (running, ball games, fitness)🏃‍♂️"}</li>
          <li>{korean ? "독서 📖" : "Reading 📖"}</li>
        </ul>

        <h2 className="text-lg font-bold mb-2">{korean ? "🔎관심사🔎" : "🔎Interests🔎"}</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Data Science / DA📊</li>
          <li>ML/DL🧠</li>
          <li>LLM - WhiteBox🔎</li>
        </ul>

        <h2 className="text-lg font-bold mb-2">{korean ? "🎧음악🎧" : "🎧Music🎧"}</h2>
        <p className="mb-1 text-sm">{korean ? "(장르를 가리진 않아서 이것저것…)" : "(I enjoy various genres…)"}</p>
        <ul className="list-disc list-inside">
          <li>Rose - Messy</li>
          <li>Sum41 - In Too Deep</li>
          <li>Sade - Smooth Operator</li>
          <li>Halsey - Ego</li>
        </ul>
      </div>
    </div>
  )
}

export default Intro