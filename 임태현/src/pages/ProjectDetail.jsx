import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  console.log("프로젝트 이미지 리스트:", project.images);
  if (!project) {
    return <div>해당 프로젝트 정보가 없습니다.</div>;
  }

  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-300">
        <h1 className="text-2xl font-bold">
          {project.title}: {project.subtitle}
        </h1>
      </div>
      <div className="space-y-6">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-800 text-2xl"
        >
          🔗 GitHub 링크
        </a>
        <h1 className="underline p-4 text-4xl text-center bg-yellow-500">
          완성본
        </h1>
        <div className="flex flex-col items-center gap-4">
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`이미지 ${i + 1}`}
              className="w-full max-w-md rounded shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
