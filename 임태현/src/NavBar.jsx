import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="p-4 bg-black text-white">
      <button className="mr-8" onClick={() => navigate(-1)}>
        ←
      </button>
      <button className="mr-8" onClick={() => navigate("/home")}>
        Home
      </button>
      <button className="mr-8" onClick={() => navigate("/projects")}>
        Projects
      </button>
      <button className="mr-8" onClick={() => navigate("/about")}>
        About
      </button>
    </nav>
  );
};

export default NavBar;
