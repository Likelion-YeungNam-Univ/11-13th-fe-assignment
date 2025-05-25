import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex p-4 bg-gradient-to-r from-blue-200 to-red-200 space-x-4">
      <Link to="/" className="font-semibold text-lg hover:underline">
        홈
      </Link>
      <Link to="/about" className="font-semibold text-lg hover:underline">
        소개
      </Link>
      <Link to="/projects" className="font-semibold text-lg hover:underline">
        프로젝트 목록
      </Link>
    </nav>
  );
};

export default NavBar;
