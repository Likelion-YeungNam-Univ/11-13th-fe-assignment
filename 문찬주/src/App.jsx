import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import NotFound from './pages/NotFound';

import { LanguageProvider } from './context/LanguageContext';
import LanguageSelector from './context/LanguageSelector';
import WelcomeMessage from './context/WelcomeMessage';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <LanguageSelector />      {/* 언어 변경 버튼 */}
        <WelcomeMessage />        {/* 메시지 */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<ProjectDetail />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
