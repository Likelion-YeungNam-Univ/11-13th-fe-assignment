import React from "react";
import helloImg from "../assets/hello.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 space-y-4">
      <img
        src={helloImg}
        alt="hello"
        className="w-52 h-52 mb-6 shadow-lg rounded-full"
      />
      <span className="font-extrabold text-4xl text-gray-800">안녕하세요!</span>
      <span className="font-semibold text-xl text-gray-700">
        사용자를 생각하는 프론트엔드 개발자{" "}
        <span className="text-blue-500">안현석</span> 입니다.
      </span>
      <span className="text-base text-gray-600 leading-relaxed max-w-xl">
        🌱 변화를 받아들이며 나날이 새롭게, 꾸준히 성장하는 개발자가 되고
        있습니다.
      </span>
      <span className="text-base text-gray-600 leading-relaxed max-w-xl">
        🤝 부족한 부분을 보완하여 더 나은 서비스를 제공하고, <br />
        협업을 통해 성장하길 좋아하는 개발자입니다.
      </span>

      {/* SNS 링크 영역 */}
      <div className="flex space-x-8 mt-8">
        <a
          href="https://github.com/nyeonseok"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500 transition-colors flex items-center space-x-2"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.343-3.369-1.343-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.528 2.341 1.087 2.91.831.091-.647.35-1.086.636-1.337-2.22-.252-4.555-1.11-4.555-4.941 0-1.09.39-1.98 1.029-2.678-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.565 9.565 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.588 1.028 2.678 0 3.842-2.338 4.685-4.566 4.933.359.31.678.923.678 1.862 0 1.344-.012 2.428-.012 2.758 0 .269.18.58.688.481A10.005 10.005 0 0022 12c0-5.52-4.48-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
          <span className="hidden md:inline">GitHub</span>
        </a>

        <a
          href="https://www.instagram.com/n._.yeonse.ok?igsh=MXgxeGl0cjA5dXhhdw=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-pink-500 transition-colors flex items-center space-x-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span className="hidden md:inline">Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
