import React from "react";
import { projects } from "../projects";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleClickProject = async (id) => {
    navigate(`/projects/${id}`);
  };
  return (
    <div>
      <h1 className=" p-4 text-center text-6xl font-bold mb-12 bg-gray-300">
        📋프로젝트 목록
      </h1>
      <ul className="grid grid-cols-2 p-12 space-y-35 text-3xl font-bold">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => handleClickProject(project.id)}
              className="text-black hover:underline"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
