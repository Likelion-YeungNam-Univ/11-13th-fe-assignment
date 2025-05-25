import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <div>
      <div>
        안녕하세요 저는 프론트엔드 개발자가 되고 싶기도 하고 돈을 벌고 싶기도 한
        강민혁입니다.
      </div>
      <button onClick={handleClick}>프로젝트 보러가기</button>
    </div>
  );
};

export default Home;
