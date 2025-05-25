import React from 'react'

const Intro = () => {
  return (
    <div className="flex justify-center items-start overflow-y-auto bg-white-50 w-full">
      <div className="bg-yellow-50 rounded-xl border shadow-lg p-8 w-full max-w-2xl mt-10">
        <ul className="pb-6 mb-4 text-xl border-b ">
          <li className="pb-5"><strong>이름:</strong> 김정운</li>
          <li className="pb-5 flex items-center"> <strong>학과: </strong> 통계학과 & 컴퓨터공학부 소프트웨어융합전공 
          </li>
          <li className="pb-5"><strong>이메일:</strong> 0911kjw@yu.ac.kr</li>
          <li className="pb-5"><strong>MBTI:</strong> ENFJ</li>
          <li className="pb-5 flex items-center">
            <strong className="mr-2">깃허브:</strong>
            <a
              href="https://github.com/vni911"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="mr-2 text-gray-800"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .321.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              vni911
            </a>
          </li>
        </ul>

        <h2 className="text-lg font-bold mb-2">취미</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>배낭 여행 (국토 종주) 🚶‍♂️</li>
          <li>Fomula 1 시청 📺</li>
          <li>운동(러닝, 구기 종목, 헬스)🏃‍♂️</li>
          <li>독서 📖</li>
        </ul>

        <h2 className="text-lg font-bold mb-2">🔎관심사🔎</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Data Science / DA📊</li>
          <li>ML/DL🧠</li>
          <li>LLM - WhiteBox🔎</li>
        </ul>

        <h2 className="text-lg font-bold mb-2">🎧음악🎧</h2>
        <p className="mb-1 text-sm">(장르를 가리진 않아서 이것저것…)</p>
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