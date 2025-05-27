import React, { useContext } from "react";
import { project } from "../project";
import { useParams } from "react-router-dom";
import LanguageContext from "../LanguageContext";

const ProjectDetail = () => {
  const { id } = useParams();
  {
    /* useParams를 사용해 프로젝트 상세 페이지를 구현했습니다. */
  }

  const { language } = useContext(LanguageContext);
  const projects = project.find((p) => p.id === parseInt(id));

  if (!projects) {
    return <div>해당 프로젝트 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      {language.languageIs === "English" ? (
        <div className="min-h-screen p-25 bg-linear-to-r from-blue-600 to-pink-500">
          <div className="p-4 bg-neutral-100 border-2 rounded-xl">
            <h1 className="pb-4 text-3xl font-bold">{projects.title}</h1>
            <div className="flex flex-row">
              <p className="pr-4 text-xl">{projects.language}</p>
              <p className="text-xl">Updated {projects.last_update_En}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen p-25 bg-linear-to-r from-blue-600 to-pink-500">
          <div className="p-4 bg-neutral-100 border-2 rounded-xl">
            <h1 className="pb-4 text-3xl font-bold">{projects.title}</h1>
            <div className="flex flex-row">
              <p className="pr-4 text-xl">{projects.language}</p>
              <p className="text-xl">{projects.last_update_Ko}에 업데이트 됨</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
