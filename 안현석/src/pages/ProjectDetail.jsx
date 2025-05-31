// src/pages/ProjectDetail.tsx
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export default function ProjectDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { language } = useLanguage();
  const [title, setTitle] = useState(location.state?.title || "");

  const text = {
    ko: {
      overviewTitle: "프로젝트 개요",
      overviewContent: `VERO는 정보 보안을 핵심 가치로 삼아, 생성형 AI와의 안전한 소통을 지원하는 웹 애플리케이션입니다. Remix 프레임워크 기반으로 제작되었으며, 사용자 친화적 UI/UX를 통해 누구나 쉽게 접근할 수 있도록 개발했습니다. 팀 프로젝트로 진행되었으며, 프론트엔드 개발을 맡아 전체 UI 구현과 사용자 흐름 설계, 그리고 보안 기능 연동을 담당했습니다.`,
      techTitle: "기술 스택 & 역할",
      techList: [
        "React, Remix를 활용한 SPA 구조 개발",
        "Tailwind CSS로 반응형 UI 설계 및 구현",
        "정보 보안 강화 및 사용자 인증 흐름 설계",
        "팀 협업을 위한 Git 및 Jira 활용",
        "생성형 AI와의 안전한 인터페이스 개발",
      ],
      featureTitle: "프로젝트 특징",
      featureContent: `VERO는 단순한 웹 애플리케이션을 넘어, 정보 보안에 철저한 가치를 두고, 생성형 AI와 사용자가 안전하게 소통할 수 있는 혁신적 플랫폼입니다. 프론트엔드 개발자로서 UI/UX 전체 설계와 구현, 그리고 보안 관련 기능의 완성도를 책임졌습니다. 사용자 경험을 최우선으로 하여 누구나 쉽게 사용할 수 있도록 디자인과 기능을 최적화하였으며, 최신 기술을 적극 활용해 팀 프로젝트의 시너지를 극대화했습니다.`,
    },
    en: {
      overviewTitle: "Project Overview",
      overviewContent: `VERO is a web application that prioritizes information security, supporting safe communication with generative AI. Built using the Remix framework, it was designed with a user-friendly UI/UX for accessibility. As a team project, I was responsible for frontend development, including implementing the entire UI, designing user flows, and integrating security features.`,
      techTitle: "Tech Stack & Responsibilities",
      techList: [
        "Developed SPA architecture using React and Remix",
        "Designed and implemented responsive UI with Tailwind CSS",
        "Enhanced information security and designed user authentication flow",
        "Used Git and Jira for effective team collaboration",
        "Developed a secure interface for interacting with generative AI",
      ],
      featureTitle: "Key Features",
      featureContent: `VERO goes beyond a simple web application, offering a secure and innovative platform for safe communication between users and generative AI. As a frontend developer, I took full responsibility for designing and implementing the UI/UX and ensuring the completeness of security features. The project prioritized user experience, ensuring ease of use through optimized design and functionality, while leveraging the latest technologies to maximize team synergy.`,
    },
  };

  const t = text[language];

  return (
    <div className="flex flex-col w-full max-w-5xl bg-white px-12 py-10 overflow-y-auto items-center mx-auto rounded-lg shadow-lg">
      {title ? (
        <h1 className="text-5xl font-extrabold text-gray-900 mb-10 tracking-wide">
          {title}
        </h1>
      ) : (
        <div className="mt-4 text-center text-red-600 font-semibold text-lg">
          Title not passed. Try fetching it by ID.
        </div>
      )}

      {title === "VERO" && (
        <>
          <section className="w-full bg-gray-50 p-8 rounded-md shadow-inner mb-8">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 border-b-2 border-indigo-300 pb-2">
              {t.overviewTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base sm:text-lg">
              {t.overviewContent}
            </p>
          </section>

          <section className="w-full bg-white p-8 rounded-md border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t.techTitle}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              {t.techList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="w-full bg-gray-50 p-8 rounded-md shadow-inner mt-8">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4 border-b border-indigo-300 pb-1">
              {t.featureTitle}
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base sm:text-lg">
              {t.featureContent}
            </p>
          </section>
        </>
      )}
    </div>
  );
}
