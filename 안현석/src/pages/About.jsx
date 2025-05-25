export default function About() {
  const educationList = [
    {
      id: 1,
      title: "[ 영남대학교 ]",
      date: "2019 ~ 현재",
      major: "수학과, 컴퓨터공학과, 마이크로 전공, 교직 전공",
    },
    {
      id: 2,
      title: "[ DGM 대구경북혁신대학 ]",
      date: "2023.03 ~ 2024.12",
      major: "전자정보융합전공 AI/SW 트랙",
    },
    {
      id: 3,
      title: "[ 멋쟁이사자처럼 대학 ]",
      date: "2025.03 ~ 현재",
      major: "",
    },
  ];
  const certificateList = [
    {
      date: "2019/09/23",
      title: "1종보통 운전면허",
      where: "경찰청/(운전면허시험관리단)",
    },
    {
      date: "2023/04/21",
      title: "컴퓨터활용능력1급",
      where: "대한상공회의소",
    },
    {
      date: "2023/12/15",
      title: "SQL개발자(SQLD)",
      where: "한국데이터베이스진흥센터",
    },
    {
      date: "2024/09/10",
      title: "정보처리기사",
      where: "한국산업인력공단",
    },
    {
      date: "2024/10/25",
      title: "데이터아키텍처 준전문가(DAsP)",
      where: "한국데이터베이스진흥센터",
    },
    {
      date: "2024/11/29",
      title: "데이터분석 준전문가(ADsP)",
      where: "한국데이터베이스진흥센터",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white px-10 overflow-y-auto ">
      <div className="flex justify-between space-x-20">
        {/* Education Section */}
        <div className="w-1/2 flex flex-col space-y-6">
          <div className="text-4xl font-extrabold text-blue-600 border-b-4 border-blue-500 pb-2">
            Education
          </div>
          {educationList.map((ed) => (
            <div
              key={ed.id}
              className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <span className="text-lg font-semibold text-black mr-2">
                {ed.title}
              </span>
              <span className="text-sm text-gray-500 mr-4">{ed.date}</span>
              <span className="text-sm text-gray-700">{ed.major}</span>
            </div>
          ))}
        </div>

        {/* Work History Section */}
        <div className="w-1/2 flex flex-col space-y-6">
          <div className="text-4xl font-extrabold text-blue-600 border-b-4 border-blue-500 pb-2">
            Work History
          </div>
          <div className="text-gray-400 text-sm italic">
            경력 사항이 아직 없습니다 :)
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="mt-16">
        <div className="text-4xl font-extrabold text-blue-600 border-b-4 border-blue-500 pb-2 mb-6">
          Certificates
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificateList.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {cert.title}
              </div>
              <div className="text-sm text-gray-500 mb-1">
                발급일: {cert.date}
              </div>
              <div className="text-sm text-gray-600">
                발급기관: {cert.where}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Skills Section */}
      <div className="mt-16">
        <div className="text-4xl font-extrabold text-blue-600 border-b-4 border-blue-500 pb-2 mb-6">
          Skills
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-800">
          <div>
            <div className="font-semibold text-lg mb-2">
              💻 Languages & Frameworks
            </div>
            <ul className="list-disc ml-5 space-y-1">
              <li>JavaScript / TypeScript</li>
              <li>React / React Native</li>
              <li>Node.js </li>
              <li>Python / C / C++</li>
              <li>HTML / CSS / Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-lg mb-2">
              🛠 Tools & Platforms
            </div>
            <ul className="list-disc ml-5 space-y-1">
              <li>Git / GitHub</li>
              <li>Figma / Notion</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-lg mb-2">⚙️ Etc.</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>REST API</li>
              <li>Zustand</li>
              <li>Pulumi</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
