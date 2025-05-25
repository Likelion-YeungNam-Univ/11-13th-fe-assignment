import React from 'react'
import { useParams } from 'react-router-dom'
import projects from './projects'

const ProjectList = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.projectId === parseInt(projectId));

  if (!project) {
    return (
      <div className="p-4 text-red-500">해당 프로젝트 정보를 찾을 수 없습니다.</div>
    );
  }

  return (
    <div className="bg-white bg-opacity-60 p-8 max-w-xl mx-auto mt-10 rounded-2xl ">
      <h2 className="text-2xl font-bold mb-4">{project.projectName}</h2>
      <p>{project.description}</p>
      <img src={project.imgSrc} alt={project.projectName} className="mt-4 rounded-lg shadow-lg" />
      {project.codeimgSrc && (
        <img src={project.codeimgSrc} alt="코드 이미지" className="mt-4 rounded-lg shadow-lg" />
      )}
    </div>
  )
}

export default ProjectList;