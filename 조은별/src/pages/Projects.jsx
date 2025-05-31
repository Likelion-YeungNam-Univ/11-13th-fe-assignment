import { Link } from "react-router-dom";
import { useContext } from "react";
import LanguageContext from "../LanguageContext";

const Projects = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    kor: {
      title: "프로젝트",
      detail: "자세히 보기 →",
      projects: [
        { id: 1, title: "할 일 목록" },
        { id: 2, title: "영화 목록" },
      ],
    },
    eng: {
      title: "Projects",
      detail: "See more →",
      projects: [
        { id: 1, title: "To-do List" },
        { id: 2, title: "Movie List" },
      ],
    },
  };

  const lan = text[language];

  return (
    <div className="min-h-screen px-5 py-10 bg-pink-50">
      <h1 className="text-3xl font-bold text-red-400 mb-10 text-center">
        {lan.title}
      </h1>
      <ul className="grid grid-cols-2 justify-center gap-6">
        {lan.projects.map((project) => (
          <li key={project.id} className="flex justify-center">
            <Link
              to={`/projects/${project.id}`}
              className="bg-white rounded-xl p-6 hover:shadow-xl border hover:border-red-300 w-full max-w-sm"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {project.title}
              </h2>
              <p className="text-sm text-gray-500 text-center">{lan.detail}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
