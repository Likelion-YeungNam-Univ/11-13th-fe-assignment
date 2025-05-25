import React from "react";
import { project } from "../project";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  {
    /* useParams를 사용해 프로젝트 상세 페이지를 구현했습니다. */
  }
  const projects = project.find((p) => p.id === parseInt(id));

  if (!projects) {
    return <div>해당 프로젝트 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-8">
      <div className="w-5 h-5 "></div>
      <h1 className="pb-4 text-3xl font-bold">{projects.title}</h1>
      <div className="flex flex-row">
        <p className="pr-4 text-xl">{projects.language}</p>
        <p className="text-xl">Updated {projects.last_update}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
