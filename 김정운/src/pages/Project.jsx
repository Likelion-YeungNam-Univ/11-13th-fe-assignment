import { Link } from 'react-router-dom';
import projects from './projects';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const texts = {
  ko: {
    title: "프로젝트 목록",
  },
  en: {
    title: "Project List",
  }
};

const Project = () => {
  const { language } = useContext(LanguageContext);

  const lang = texts[language] ? language : "ko";
  const projectList = lang === "en" ? projects.en : projects.ko;

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>{texts[lang].title}</h1>
      <ul className='flex flex-row flex-wrap gap-4 justify-center'>
        {projectList.map((project, idx) => (
          <li
            key={`${project.projectId}-${idx}`}
            className='bg-white border w-[400px] h-[200px] items-center align-middle text-3xl p-4 rounded text-center flex flex-col justify-center'
          >
            <Link to={`/projects/${project.projectId}`} className='hover:underline'>
              {project.projectName}
            </Link>
          </li>
        ))}      
      </ul>
    </div>
  );
};

export default Project;