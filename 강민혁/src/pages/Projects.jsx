import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/Projects/${id}`);
  };

  return (
    <div>
      <h1>프로젝트 목록</h1>

      <div>
        <h2>영화 목록 과제</h2>
        <p>엄청난 양의 영화 데이터를 보여주는 프로젝트입니다.</p>
        <button onClick={() => goToDetail(1)}>자세히 보기</button>
      </div>

      <div>
        <h2>호텔 사이트 과제</h2>
        <p>다양한 호텔들의 정보를 볼 수 있는 사이트입니다.</p>
        <button onClick={() => goToDetail(2)}>자세히 보기</button>
      </div>
    </div>
  );
};

export default Projects;
