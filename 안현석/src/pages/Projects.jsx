import { Link } from "react-router-dom";
import vero from "../assets/vero.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "VERO",
    },
  ];
  return (
    <div className="flex flex-col w-full bg-white px-10 overflow-y-auto ">
      <div className="text-4xl font-extrabold text-blue-600 border-b-4 border-blue-500 pb-2 mb-6">
        Projects
      </div>
      <div className="flex">
        {projects.map((p) => (
          <Link
            to={`/projects/${p.id}`}
            state={{ title: p.title }}
            className="border-none rounded-lg w-96 h-64"
          >
            <div className="h-full flex flex-col">
              <img src={vero} className="h-4/5 w-full rounded-t-lg" />
              <div className="bg-[#262626] flex-grow rounded-b-lg flex items-center text-white font-bold text-lg pl-4 ">
                {p.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
