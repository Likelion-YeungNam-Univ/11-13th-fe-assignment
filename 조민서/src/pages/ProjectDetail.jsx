import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LanguageContext from '../LanguageContext';
import { projects } from "../Projects";

const ProjectDetail = () =>  {
  
  const { language } = useContext(LanguageContext);
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="*" replace />;
  }

  const labels = {
    learn: { en: 'Learned:', ko: '학습 내용:' },
    intro: { en: 'Description:', ko: '과제 설명:' },
    docs: { en: 'View Docs', ko: '관련 문서 보기' },
    github: { en: 'GitHub Link', ko: '프로젝트 GitHub 링크' },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        {project.title[language]}
      </h1>

      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        <p className="text-xl">{project.description[language]}</p>

        <p className="text-lg">
          <span className="font-bold">{labels.learn[language]} </span>
          {project.learn[language]}
        </p>

        <p className="text-lg">
          <span className="font-bold">{labels.intro[language]} </span>
          {project.introduce[language]}
        </p>

        <div className="mt-4">
          <img
            src={project.Image}
            alt={project.title[language]}
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
            {labels.docs[language]}
          </a>
          <a
            href="https://github.com/Likelion-YeungNam-Univ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
          >
            {labels.github[language]}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail