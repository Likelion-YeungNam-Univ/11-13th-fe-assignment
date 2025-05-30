import React, { useContext } from "react";
import { projects } from "../projects";
import { Link } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";

const Projects = () => {
  const { language } = useContext(LanguageContext);

  const printBox = () => {
    return projects.map((project) => (
      <Link
        key={project.id}
        to={`/projects/${project.id}`}
        className="flex flex-col h-full p-3 border rounded-2xl hover:border-blue-600 hover:scale-105 hover:border-2 hover:shadow-2xl"
      >
        <img
          className="rounded-2xl w-full h-full object-cover"
          src={project.thumbnail}
          alt="project thumbnail"
        />
        <div className="flex flex-1 items-center justify-center pt-3 text-lg">
          {project.title[language]}
        </div>
      </Link>
    ));
  };

  const pageTitle = {
    "🇰🇷 KO": "프로젝트 목록",
    "🇺🇸 EN": "Project List",
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden p-4">
      <h1 className="text-center text-3xl font-bold mb-4">
        {pageTitle[language]}
      </h1>
      <div className="flex-1 overflow-y-auto p-3">
        <div className="grid grid-cols-4 gap-4 my-2">{printBox()}</div>
      </div>
    </div>
  );
};

export default Projects;
