import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/context";

const projectData = {
  1: {
    title_ko: "AI 기반 그림 인식 게임",
    title_en: "AI-based Drawing Recognition Game",
    description_ko:
      "AI가 사용자의 그림을 분석해 정답을 맞히는 멀티플레이 웹게임입니다.",
    description_en:
      "A multiplayer web game where AI analyzes and guesses user drawings.",
    techStack: "React, Node.js, Python, TensorFlow",
  },
  2: {
    title_ko: "실시간 퀴즈 플랫폼",
    title_en: "Real-time Quiz Platform",
    description_ko:
      "WebSocket 기반으로 실시간 퀴즈 대결이 가능한 웹 플랫폼입니다.",
    description_en:
      "A web platform for real-time quiz competitions using WebSocket.",
    techStack: "React, Spring Boot, Redis, WebSocket",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId];

  const { language } = useLanguage();

  if (!project) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold">
          {language === "EN"
            ? "This project does not exist."
            : "존재하지 않는 프로젝트입니다."}
        </h2>
        <button
          onClick={() => navigate("/projects")}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
        >
          {language === "EN" ? "Back to list" : "목록으로 돌아가기"}
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">
        {language === "EN" ? project.title_en : project.title_ko}
      </h2>
      <p className="mb-2 text-gray-700">
        {language === "EN" ? project.description_en : project.description_ko}
      </p>
      <p className="mb-4 text-sm text-gray-500">
        {language === "EN" ? "Tech Stack" : "사용 기술"}: {project.techStack}
      </p>
    </div>
  );
};

export default ProjectDetail;
