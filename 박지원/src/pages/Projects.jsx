import { Link } from "react-router-dom";

const projectList = [
  { id: 1, title: "AI 기반 그림 인식 게임" },
  { id: 2, title: "퀴즈 플랫폼" },
];

const Projects = () => (
  <div className="p-4">
    <h1 className="text-xl font-bold mb-4">프로젝트 목록</h1>
    <ul className="space-y-2">
      {projectList.map((project) => (
        <li key={project.id}>
          <Link
            to={`/projects/${project.id}`}
            className="text-blue-600 hover:underline"
          >
            {project.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
export default Projects;
