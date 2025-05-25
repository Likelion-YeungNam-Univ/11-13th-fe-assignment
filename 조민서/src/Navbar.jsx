import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="ml-auto px-2 py-1 border rounded"
    >
      뒤로가기
    </button>
  );
}

export default function Navbar() {
  return (
    <nav className="p-4 border-b flex gap-4 bg-black font-bold text-xl text-white">
      <Link to="/"         className="hover:underline">홈</Link>
      <Link to="/projects" className="hover:underline">프로젝트</Link>
      <Link to="/about"    className="hover:underline">소개</Link>
      <BackButton />
    </nav>
  );
}
