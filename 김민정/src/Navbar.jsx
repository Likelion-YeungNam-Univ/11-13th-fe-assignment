import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-100">
      <Link to="/" className="mr-4">
        홈
      </Link>
      <Link to="/about" className="mr-4">
        About me
      </Link>
      <Link to="/projects" className="mr-4">
        프로젝트
      </Link>
    </nav>
  );
};

export default Navbar;
