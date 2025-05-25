import { useParams, useNavigate } from "react-router-dom";

const projectList = [
    // ... (프로젝트 리스트 동일)
];

const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const project = projectList.find((p) => p.id === Number(projectId));

    if (!project) {
        return (
            <div>
                <h2>존재하지 않는 프로젝트입니다.</h2>
                <button onClick={() => navigate("/projects")}>프로젝트 목록으로 돌아가기</button>
            </div>
        );
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <img
                src={project.imageUrl}
                alt={project.title}
                style={{ width: "80%", maxWidth: "600px", marginTop: "20px", borderRadius: "8px" }}
            />
            <p style={{ marginTop: "15px", fontSize: "18px" }}>{project.description}</p>

            <h3 style={{ marginTop: "30px" }}>제가 맡았던 작업 내용</h3>
            <ul>
                {project.tasks.map((task, index) => (
                    <li key={index} style={{ marginBottom: "8px", fontSize: "16px" }}>
                        {task}
                    </li>
                ))}
            </ul>

            <button
                onClick={() => navigate(-1)}
                style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
            >
                뒤로 가기
            </button>
        </div>
    );
};

export default ProjectDetail;
