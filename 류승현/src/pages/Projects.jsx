import React from "react";
import { project } from "../project";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">프로젝트 목록</h1>
      <ul className="space-y-2">
        {project.map((projects) => (
          <li key={projects.id}>
            <Link
              to={`/projects/${projects.id}`}
              className="text-xl hover:font-bold"
            >
              {projects.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
