import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";  // 경로 맞게 조정하세요
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projectList = [
    {
        id: 1,
        title: {
            en: "Assignment 1 - Implement Like Lion Homepage",
            ko: "과제 1 - 멋쟁이 사자 홈페이지 구현",
        },
        description: {
            en: "Created a clean and stylish homepage using basic CSS.",
            ko: "기본 CSS 구현을 통해 깔끔하고 세련된 홈페이지를 만들었습니다.",
        },
        imageUrl: project1,
    },
    {
        id: 2,
        title: {
            en: "Assignment 2 - Calculator Function Implementation",
            ko: "과제 2 - 계산기 함수 구현",
        },
        description: {
            en: "Implemented basic calculator functions using JavaScript.",
            ko: "자바스크립트를 활용해 기본적인 계산기 기능을 구현했습니다.",
        },
        imageUrl: project2,
    },
    {
        id: 3,
        title: {
            en: "Assignment 3 - Component Analysis and Homepage Creation",
            ko: "과제 3 - 컴포넌트 분석 및 홈페이지 제작",
        },
        description: {
            en: "Analyzed React components and created an actual homepage.",
            ko: "리액트 컴포넌트 분석과 실제 홈페이지 제작을 진행했습니다.",
        },
        imageUrl: project3,
    },
];

const Projects = () => {
    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);

    return (
        <div>
            <h1>{language === 'en' ? "Project List" : "프로젝트 목록"}</h1>
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
                            alt={language === 'en' ? project.title.en : project.title.ko}
                            style={{ width: "120px", height: "70px", objectFit: "cover", borderRadius: "6px" }}
                        />
                        <div style={{ flex: 1 }}>
                            <strong style={{ fontSize: "18px" }}>
                                {language === 'en' ? project.title.en : project.title.ko}
                            </strong>
                            <p style={{ margin: "5px 0" }}>
                                {language === 'en' ? project.description.en : project.description.ko}
                            </p>
                        </div>
                        <button onClick={() => navigate(`/projects/${project.id}`)}>
                            {language === 'en' ? "View Details" : "상세 보기"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
