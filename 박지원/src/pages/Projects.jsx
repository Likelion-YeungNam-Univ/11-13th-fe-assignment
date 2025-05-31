import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/context";

const projectList = [
  {
    id: 1,
    title_ko: "AI 기반 그림 인식 게임",
    title_en: "AI-based Drawing Recognition Game",
  },
  {
    id: 2,
    title_ko: "퀴즈 플랫폼",
    title_en: "Quiz Platform",
  },
];

const Projects = () => {
  const { language } = useLanguage();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        {language === "EN" ? "Project List" : "프로젝트 목록"}
      </h1>
      <ul className="space-y-2">
        {projectList.map((project) => (
          <li key={project.id}>
            <Link
              to={`/projects/${project.id}`}
              className="text-blue-600 hover:underline"
            >
              {language === "EN" ? project.title_en : project.title_ko}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Projects;
