import { Link } from "react-router-dom";

const projectList = [
  { id: 1, title: "To-do List" },
  { id: 2, title: "Movie List" },
];

const Projects = () => (
  <div className="min-h-screen px-5 py-10 bg-pink-50">
    <h1 className="text-3xl font-extrabold text-red-400 mb-10 text-center">
      프로젝트 목록{" "}
    </h1>
    <ul className="grid grid-cols-2 justify-center">
      {projectList.map((project) => (
        <li key={project.id} className="flex justify-center">
          <Link
            to={`/projects/${project.id}`}
            className="bg-white rounded-xl p-6 hover:shadow-xl border hover:border-red-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 text-center">자세히 보기 →</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
