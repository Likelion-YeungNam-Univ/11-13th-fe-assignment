import React, { useContext } from "react";
import { project } from "../project";
import { Link } from "react-router-dom";
import LanguageContext from "../LanguageContext";

const Project = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="min-h-screen p-25 bg-linear-to-r from-blue-600 to-pink-500">
      {language.languageIs === "English" ? (
        <div className="p-8 border rounded-xl bg-neutral-100">
          <h1 className="text-3xl font-bold mb-4">Project List</h1>
          <ul className="space-y-2 border-2 rounded-xl p-4 bg-neutral-200">
            {project.map((projects) => (
              <li key={projects.id}>
                <Link
                  to={`/projects/${projects.id}`}
                  className="text-xl hover:font-bold"
                >
                  👉{projects.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="p-8 border rounded-xl bg-neutral-100">
          <h1 className="text-3xl font-bold mb-4">프로젝트 목록</h1>
          <ul className="space-y-2 border-2 rounded-xl p-4 bg-neutral-200">
            {project.map((projects) => (
              <li key={projects.id}>
                <Link
                  to={`/projects/${projects.id}`}
                  className="text-xl hover:font-bold"
                >
                  👉{projects.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Project;
