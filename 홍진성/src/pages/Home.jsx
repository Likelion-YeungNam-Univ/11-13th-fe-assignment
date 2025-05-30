import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";

const Home = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  // 텍스트 다국어 정의
  const texts = {
    "🇰🇷 KO": {
      guide: "⬆️상단의 메뉴를 클릭해주세요⬆️",
      greeting: "안녕하세요👋",
    },
    "🇺🇸 EN": {
      guide: "⬆️Please click the menu⬆️",
      greeting: "Hello👋",
    },
  };

  return (
    <div>
      <div className="text-lg font-extrabold">{texts[language].guide}</div>
      <div className="flex flex-col space-y-3 justify-center items-center">
        <div className="flex justify-center text-3xl">
          {texts[language].greeting}
        </div>
        <img
          src="https://mblogthumb-phinf.pstatic.net/MjAyMTAxMTZfMjcx/MDAxNjEwNzc1OTg0OTAy.zRE-4PnI79kRMdJQ7TcI6b6L1HYqXrqIXXSiaRl0cxsg.gAqFhL-F5Trn3QESHk3msTnakyvCUbs3dwH19rJrEIcg.GIF.cc_76/i015146442997.gif?type=w800"
          onClick={() => navigate("/about")}
          alt="dancing gif"
        />
      </div>
    </div>
  );
};

export default Home;
