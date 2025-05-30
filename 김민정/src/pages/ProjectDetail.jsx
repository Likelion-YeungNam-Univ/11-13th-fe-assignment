import React, { useContext } from "react";
import { projects } from "./projects";
import { useParams } from "react-router-dom";
import LanguageContext from "../LanguageContext";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((m) => m.id === parseInt(projectId));

  const { language } = useContext(LanguageContext);
  const { languageIs } = language;

  if (!project) {
    return (
      <div className="p-4 text-red-500">해당 프로젝트를 찾을 수 없습니다.</div>
    );
  }

  return (
    <div className="p-4">
      {languageIs === "한국어" ? (
        <div>
          <h1 className="text-3xl font-bold mb-4 flex justify-center">
            {project.title["한국어"]}
          </h1>
          <div className="p-1 text-xl flex justify-center bg-blue-100 rounded-2xl">
            완성본
          </div>
          <div className="flex flex-col items-center gap-4 mt-3">
            {project.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`이미지 ${i + 1}`}
                className="w-full max-w-md rounded"
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4 flex justify-center">
            {project.title["English"]}
          </h1>
          <div className="p-1 text-xl flex justify-center bg-blue-100 rounded-2xl">
            The finished work
          </div>
          <div className="flex flex-col items-center gap-4 mt-3">
            {project.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`이미지 ${i + 1}`}
                className="w-full max-w-md rounded"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
