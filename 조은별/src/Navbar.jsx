import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center space-x-8 py-4 shadow-md bg-white">
      <Link to="/" className="text-lg font-medium hover:text-red-400">
        Home
      </Link>
      <Link to="/projects" className="text-lg font-medium hover:text-red-400">
        프로젝트 목록
      </Link>
      <Link to="/about" className="text-lg font-medium hover:text-red-400">
        자기소개
      </Link>
    </nav>
  );
};

export default Navbar;
