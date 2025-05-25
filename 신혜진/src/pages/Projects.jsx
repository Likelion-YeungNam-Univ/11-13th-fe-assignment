import React from "react";
import { projects } from "../projects.js";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl text-blue-950 font-bold mb-14">Project List</h1>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.projectId}>
            <Link
              to={`/projects/${project.projectId}`}
              className="text-xl text-blue-950 hover:underline "
            >
              {project.projectId}. {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
