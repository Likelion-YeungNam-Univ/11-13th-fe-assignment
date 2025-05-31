
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';  // 경로는 본인 프로젝트 구조에 맞게 조정

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "0 20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1 style={{ fontSize: "2.8rem", marginBottom: "15px", color: "#333" }}>
        {language === 'en' ? "Chanju's Portfolio" : "찬주의 포트폴리오"}
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555", lineHeight: "1.6", marginBottom: "30px" }}>
        {language === 'en'
          ? "Hello! I am Chanju, learning web development and working on various projects.<br />I aim to write clean code and create user-friendly UI."
          : "안녕하세요! 저는 웹 개발을 배우며 다양한 프로젝트를 진행하고 있는 찬주입니다.깔끔한 코드와 사용자 친화적인 UI를 만드는 것을 목표로 하고 있습니다."
        }
      </p>

      <section>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "12px", color: "#444" }}>
          {language === 'en' ? "Main Highlights" : "주요 소개"}
        </h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "#666", fontSize: "1.1rem", lineHeight: "1.5" }}>
          <li>{language === 'en' ? "Frontend development using HTML, CSS, JavaScript" : "HTML, CSS, JavaScript를 활용한 프론트엔드 개발"}</li>
          <li>{language === 'en' ? "Experience in creating dynamic React web applications" : "React 기반의 동적인 웹 애플리케이션 제작 경험"}</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
