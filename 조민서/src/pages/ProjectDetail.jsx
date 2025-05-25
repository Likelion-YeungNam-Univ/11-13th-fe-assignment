import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../Projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="*" replace />;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6 ">
      <h1 className="text-4xl font-bold mb-6 text-center">{project.title}</h1>
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="text-xl mb-4">{project.description}</p>

        <p className="text-lg mb-4"><span className="font-bold">어떤부분을 배운 후 구현한 것인가? </span>{project.learn}</p>
        <p className="text-lg mb-4"><span className="font-bold">과제 설명: </span>{project.introduce}</p>
        
         <div className="mt-4">
          <img
            src={project.Image}
            alt="프로젝트 이미지"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="mt-6 flex justify-center space-x-4">
           <a
          href={project.dUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-300 transition"
        >
          관련 문서 보기
        </a>
           <a
             href="https://github.com/Likelion-YeungNam-Univ"
             target="_blank"
             rel="noopener noreferrer"
             className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
      >
        프로젝트 GitHub 링크
      </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
