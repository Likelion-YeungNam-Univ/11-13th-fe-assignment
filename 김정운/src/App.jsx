import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectList from "./pages/ProjectList";
import Project from "./pages/Project";
import Intro from "./pages/Intro";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";
import LanguageProvider from "./LanguageProvider";


const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/projects/:projectId" element={<ProjectList/>}/>
            <Route path="/about" element={<Intro/>}/>
            <Route path="/projects" element={<Project/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
