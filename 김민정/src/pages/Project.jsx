import React from "react";
import { projects } from "./projects";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();

  const handleClickProject = async (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4 flex justify-center">
        멋사 프로젝트
      </h1>
      <hr />
      <ul className="space-y-2 mt-3">
        {projects.map((project) => (
          <li key={project.id} className="flex justify-center mb-5">
            <button onClick={() => handleClickProject(project.id)}>🔎</button>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
