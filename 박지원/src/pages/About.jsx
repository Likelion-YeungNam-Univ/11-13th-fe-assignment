import { Link } from "react-router-dom";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-6 w-full bg-white">
      <div className="flex flex-col justify-center items-center w-12 space-y-4 text-gray-700">
        <div className="flex-1 w-px bg-gray-300" />
        <Link to="/" className="text-2xl hover:text-blue-500">
          <FaGithub />
        </Link>
        <Link to="/" className="text-2xl hover:text-green-600">
          <SiVelog />
        </Link>
        <Link to="/" className="text-2xl hover:text-pink-500">
          <FaInstagram />
        </Link>
        <div className="flex-1 w-px bg-gray-300" />
      </div>

      <div className="flex-1 text-center px-6 py-10">
        <h2 className="text-lg text-gray-600">안녕하세요! 저는</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          박지원입니다.
        </h1>
        <p className="text-gray-600 mb-6">
          프론트엔드 개발을 꿈꾸는 학생입니다.
          <br />
          인터렉티브한 웹을 개발하는 데 큰 관심이 있습니다!
        </p>
      </div>
    </section>
  );
};

export default About;
