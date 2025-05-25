import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../Projects';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6">
      <h1 className="text-5xl font-bold mb-6 text-center italic">프로젝트 목록</h1>
      <div className="w-full max-w-3xl">
        <ul className="space-y-5">
          {projects.map((project) => (
            <li key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Link
                to={`/projects/${project.id}`}
                className="text-3xl font-semibold text-blue-500 hover:underline"
              >
                {project.title}
              </Link>
              <p className="mt-2 text-xl">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
