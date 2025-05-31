import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext"; // 경로 확인하세요

const NotFound = () => {
    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);

    return (
        <div>
            <h1>
                {language === "en" ? "404 - Page Not Found" : "404 - 페이지를 찾을 수 없습니다."}
            </h1>
            <button onClick={() => navigate("/")}>
                {language === "en" ? "Go to Home" : "홈으로 가기"}
            </button>
        </div>
    );
};

export default NotFound;
