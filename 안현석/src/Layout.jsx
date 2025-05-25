import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About Me", path: "/about" },
    { id: 3, text: "Projects", path: "/projects" },
  ];

  return (
    <div className="flex h-screen ">
      <nav className="bg-black w-80 flex justify-center">
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
      </nav>
      <div className="flex-grow overflow-y-auto p-10 flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}
