import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import LayOut from "./LayOut";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    // 필수 구현 페이지
    // 1. 홈페이지
    // 2. 프로젝트 목록 페이지
    // 3. 각 프로젝트 상세 페이지 - path파라미터 활용
    // 4. 자기소개 페이지
    // 5. 404 에러 페이지
    // + 추가로 만들고 싶은 페이지 자유롭게 구현하셔도 됩니다~!!
    // + 중첩 라우팅 활용해서 구현해주세요.
    // 멋사 노션 페이지의 조건 사항 꼭 확인해주시고 다 만족시켜서 과제 해주세요.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
