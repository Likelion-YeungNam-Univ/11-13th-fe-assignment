import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home          from './pages/Home';
import Projects      from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About         from './pages/About';
import NotFound      from './pages/NotFound';
import Layout        from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"                    element={<Home />} />
          <Route path="projects"            element={<Projects />} />
          <Route path="projects/:projectId" element={<ProjectDetail />} />
          <Route path="about"               element={<About />} />
          <Route path="*"                   element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
