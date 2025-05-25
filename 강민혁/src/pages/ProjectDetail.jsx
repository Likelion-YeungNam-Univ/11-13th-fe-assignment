import React from "react";
import { useParams } from "react-router-dom";

const projectData = {
  1: {
    title: "영화 목록 과제",
    description:
      "어마어마하게 많은 양의 영화 데이터를 보여주는 프로젝트입니다.",
  },
  2: {
    title: "호텔 사이트 과제",
    description: "다양한 호텥들의 정보를 찾아 볼 수 있는 사이트입니다.",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <h2>존재하지 않는 프로젝트입니다.</h2>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
