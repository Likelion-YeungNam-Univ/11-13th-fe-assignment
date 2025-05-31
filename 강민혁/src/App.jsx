import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/about";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import { LanguageProvider } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <LanguageSelector />
        <WelcomeMessage />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Projects/:projectId" element={<ProjectDetail />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
