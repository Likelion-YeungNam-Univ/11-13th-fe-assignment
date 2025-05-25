import { useParams, useNavigate } from "react-router-dom";
import movieList from "../assets/movielist.png";
import todoList from "../assets/todo.png";

const projectdata = {
  1: {
    title: "To-Do List",
    description: "할 일을 리스트에 추가하고 삭제할 수 있습니다.",
    image: todoList,
  },
  2: {
    title: "영화 목록",
    description:
      "영화 목록 중 시청한 영화, 보고 싶은 영화를 리스트에 담을 수 있습니다.",
    image: movieList,
  },
};
const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectdata[projectId];

  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-50 px-4 py-12">
      <div className="bg-white rounded-2xl p-12 text-center">
        <h1 className="text-3xl font-bold text-red-400 mb-4">
          {project.title}
        </h1>
        <p className="text-gray-700 mb-6">{project.description}</p>
        <img src={project.image} className="w-1/2 mb-4 rounded mx-auto" />
        <button
          onClick={() => navigate("/projects")}
          className="p-2 bg-red-400 text-white rounded"
        >
          프로젝트 목록으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
