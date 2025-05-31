import { useParams, useNavigate } from "react-router-dom";
import movieList from "../assets/movielist.png";
import todoList from "../assets/todo.png";
import { useContext } from "react";
import LanguageContext from "../LanguageContext";

const projectdata = {
  1: {
    title: {
      kor: "할 일 목록",
      eng: "To-Do List",
    },
    description: {
      kor: "할 일을 리스트에 추가하고 삭제할 수 있습니다.",
      eng: "You can add and delete tasks from the list.",
    },
    image: todoList,
  },
  2: {
    title: {
      kor: "영화 목록",
      eng: "Movie List",
    },
    description: {
      kor: "영화 목록 중 시청한 영화, 보고 싶은 영화를 리스트에 담을 수 있습니다.",
      eng: "You can add movies you've watched or plan to watch to your movie list.",
    },
    image: movieList,
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectdata[projectId];
  const { language } = useContext(LanguageContext);

  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-50 px-4 py-12">
      <div className="bg-white rounded-2xl p-12 text-center">
        <h1 className="text-3xl font-bold text-red-400 mb-4">
          {project.title[language]}
        </h1>
        <p className="text-gray-700 mb-6">{project.description[language]}</p>
        <img src={project.image} className="w-1/2 mb-4 rounded mx-auto" />
        <button
          onClick={() => navigate("/projects")}
          className="p-2 bg-red-400 text-white rounded cursor-pointer"
        >
          {language === "kor"
            ? "프로젝트 목록으로 돌아가기"
            : "Back to Project List"}
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
