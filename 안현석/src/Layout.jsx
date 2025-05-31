import { Outlet, Link, useLocation } from "react-router-dom";
import { useLanguage } from "./contexts/LanguageContext";

export default function Layout() {
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About Me", path: "/about" },
    { id: 3, text: "Projects", path: "/projects" },
  ];

  // 언어에 따라 버튼 텍스트 설정
  const btnText = language === "en" ? "한국어" : "ENGLISH";

  return (
    <div className="flex h-screen">
      <nav className="bg-black w-80 flex flex-col justify-between px-8">
        <div className="flex flex-col w-4/5 space-y-20 py-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`text-3xl font-bold hover:no-underline ${
                  isActive ? "text-blue-500" : "text-white"
                }`}
              >
                {item.text}
              </Link>
            );
          })}
        </div>
        <button
          onClick={toggleLanguage}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {btnText}
        </button>
      </nav>
      <div className="flex-grow overflow-y-auto p-10 flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}
