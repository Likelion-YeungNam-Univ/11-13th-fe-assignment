import React, { useContext } from "react";
import { projects } from "../projects.js";
import { Link } from "react-router-dom";
import LanguageContext from "../LanguageContext.js";

const Projects = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl text-blue-950 font-bold mb-14">
        {language === "ko" ? "프로젝트 목록" : "ProjectList"}
      </h1>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.projectId}>
            <Link
              to={`/projects/${project.projectId}`}
              className="text-xl text-blue-950 hover:underline "
            >
              {project.projectId}. {project.title[language]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
