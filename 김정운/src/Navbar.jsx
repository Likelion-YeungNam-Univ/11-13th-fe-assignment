import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="p-4 bg-gray-100 flex justify-between items-center shadow-md h-15">
      <div>
        <Link to="/" className="p-3 m-1 bg-gray-200 hover:bg-gray-300 text-black font-medium rounded-full">
          🏚  
        </Link>
        <Link to="/about" className="p-3 m-1 hover:bg-gray-300 text-black font-medium rounded-xl">
          자기소개
        </Link>
        <Link to="/projects" className="p-3 m-1 hover:bg-gray-300 text-black font-medium rounded-xl">프로젝트 목록</Link>  
      </div>
      <div>
        <button onClick={() => navigate(-1)} className="ml-4 px-2 py-1 bg-red-300 rounded-full hover:bg-red-400">
          뒤로가기
        </button>
        <button onClick={() => navigate(+1)} className="ml-4 px-2 py-1 bg-green-300 rounded-full hover:bg-green-400 ">
          앞으로가기
        </button>  
      </div>
    </nav>
  );
};

export default Navbar;