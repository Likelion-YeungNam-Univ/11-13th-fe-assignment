import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../projects";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((m) => m.projectId === parseInt(projectId));
  const navigate = useNavigate();
  const toBack = () => navigate(-1);

  if (!project) {
    return <div>해당 프로젝트 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="px-6 py-4">
      <button
        onClick={toBack}
        className="px-3 py-1 text-sm font-semibold border-2 border-blue-950 text-blue-950 rounded-2xl hover:text-white hover:bg-blue-950 cursor-pointer"
      >
        ←
      </button>
      <div className="text-center">
        <h1 className="text-3xl text-blue-950 font-bold p-5">
          {project.title}
        </h1>
        <div className="flex justify-center">
          <div className="border-2 bg-blue-950 p-7 space-y-2 w-fit text-left text-gray-200">
            <p>프로그램 : {project.program}</p>
            <p>프로젝트 기간 : {project.period}</p>
            <p>내용 : {project.contents}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4 mt-7 w-fit">
            {project.image.map((img, key) => (
              <img
                key={key}
                src={img}
                alt={`${project.title}-${key + 1}`}
                className="w-lg h-lg object-cover rounded-md shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
