import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "./projects";

const ProjectsDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="p-4 text-red-500 text-2xl">
          해당 프로젝트 정보를 찾을 수 없습니다.
        </div>
        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 bg-gray-200 border hover:bg-yellow-200 font-medium rounded-xl"
        >
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold p-3">{project.title}</h1>
      <div className="flex space-x-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-xl font-semibold hover:underline"
        >
          github
        </a>
        <button
          onClick={() => navigate("/projects")}
          className="bg-gray-200 border rounded-xl px-2 py-1 hover:bg-yellow-200"
        >
          목록으로
        </button>
      </div>
      <div className="text-xl p-4">과제 설명: {project.description}</div>
      <img src={project.thumbnail} className="mb-4" />
    </div>
  );
};

export default ProjectsDetail;
