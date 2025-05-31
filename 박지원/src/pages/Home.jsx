import { useLanguage } from "../contexts/context";

const Home = () => {
  const { language } = useLanguage();

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200 px-4">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-bold text-blue-700">
          {language === "EN"
            ? "Welcome to Jiwon Park's Portfolio!"
            : "박지원 포트폴리오에 오신 것을 환영합니다!"}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          {language === "EN"
            ? "This website showcases my personal growth journey."
            : "이 웹사이트는 저의 성장 과정을 담은 공간입니다."}
        </p>
        <p className="text-base text-gray-600">
          {language === "EN" ? (
            <>
              Explore the <span className="text-blue-600">About</span> and{" "}
              <span className="text-blue-600">Projects</span> pages from the top
              menu!
            </>
          ) : (
            <>
              상단 메뉴에서 <span className="text-blue-600">소개</span>,{" "}
              <span className="text-blue-600">프로젝트</span> 페이지를
              둘러보세요!
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Home;
