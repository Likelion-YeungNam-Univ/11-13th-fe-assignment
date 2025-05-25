import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-evenly sticky top-0 w-full bg-blue-600">
    <div className="flex items-center">
      <span className="text-xl font-bold text-white">박지원 포트폴리오</span>
    </div>

    <div className="flex space-x-4">
      <Link
        to="/"
        className="px-3 py-2 font-medium text-white hover:bg-blue-700"
      >
        홈
      </Link>
      <Link
        to="/about"
        className="px-3 py-2 font-medium text-white hover:bg-blue-700"
      >
        자기소개
      </Link>
      <Link
        to="/projects"
        className="px-3 py-2 font-medium text-white hover:bg-blue-700"
      >
        프로젝트
      </Link>
    </div>
  </nav>
);

export default Navbar;
