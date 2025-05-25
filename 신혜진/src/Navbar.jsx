import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = "p-7 hover:text-white";
  return (
    <nav className="p-4 bg-blue-950 text-gray-300 font-semibold">
      <Link to="/" className={linkStyle}>
        Home
      </Link>
      <Link to="/projects" className={linkStyle}>
        Projects
      </Link>
      <Link to="/about" className={linkStyle}>
        Introduction
      </Link>
    </nav>
  );
};

export default Navbar;
