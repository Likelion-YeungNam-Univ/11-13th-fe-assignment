import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Project from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Layout from "./Layout";

function App() {
  return (
    // 필수 구현 페이지
    // 1. 홈페이지 = /
    // 2. 프로젝트 목록 페이지 = /projects
    // 3. 각 프로젝트 상세 페이지 - path파라미터 활용 = /projects/1, /projects/2...
    // 4. 자기소개 페이지 = /about
    // 5. 404 에러 페이지 = *
    // + 추가로 만들고 싶은 페이지 자유롭게 구현하셔도 됩니다~!!
    // + 중첩 라우팅 활용해서 구현해주세요.
    // 멋사 노션 페이지의 조건 사항 꼭 확인해주시고 다 만족시켜서 과제 해주세요.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* index routes를 통해 /Home 경로를 기본 경로로 설정 */}
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* 404 페이지 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
