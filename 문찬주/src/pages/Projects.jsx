import { useNavigate } from "react-router-dom";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";


const projectList = [
    {
        id: 1,
        title: "과제 1 - 멋쟁이 사자 홈페이지 구현",
        description: "기본 CSS 구현을 통해 깔끔하고 세련된 홈페이지를 만들었습니다.",
        imageUrl: project1,
    },
    {
        id: 2,
        title: "과제 2 - 계산기 함수 구현",
        description: "자바스크립트를 활용해 기본적인 계산기 기능을 구현했습니다.",
        imageUrl: project2,
    },
    {
        id: 3,
        title: "과제 3 - 컴포넌트 분석 및 홈페이지 제작",
        description: "리액트 컴포넌트 분석과 실제 홈페이지 제작을 진행했습니다.",
        imageUrl: project3,
    },
];

const Projects = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>프로젝트 목록</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {projectList.map((project) => (
                    <li
                        key={project.id}
                        style={{
                            marginBottom: "20px",
                            border: "1px solid #ddd",
                            padding: "15px",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                        }}
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            style={{ width: "120px", height: "70px", objectFit: "cover", borderRadius: "6px" }}
                        />
                        <div style={{ flex: 1 }}>
                            <strong style={{ fontSize: "18px" }}>{project.title}</strong>
                            <p style={{ margin: "5px 0" }}>{project.description}</p>
                        </div>
                        <button onClick={() => navigate(`/projects/${project.id}`)}>상세 보기</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
