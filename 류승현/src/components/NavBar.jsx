import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageContext from "../LanguageContext";

const homeIconOut =
  "https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=000000";

const homeIconIn =
  "https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=000000";

const backIconOut =
  "https://img.icons8.com/?size=100&id=Ekcv7HUsxLz9&format=png&color=000000";

const backIconIn =
  "https://img.icons8.com/?size=100&id=yiR4rPf7BGje&format=png&color=000000";

const btnClass = "flex justify-end-safe p-2 hover:font-bold";

const NavBar = () => {
  const navigate = useNavigate();
  const [homeIconHover, setHomeIconHover] = useState(false);
  const [backIconHover, setBackIconHover] = useState(false);
  const { language, KO, EN } = useContext(LanguageContext);

  const home = () => navigate("/");
  const about = () => navigate("About");
  const projects = () => navigate("Projects");
  const backButton = () => navigate(-1);

  return (
    <div>
      {language.languageIs === "English" ? (
        <div className="flex flex-row p-3 bg-neutral-200">
          <img
            src={backIconHover ? backIconIn : backIconOut}
            onMouseEnter={() => setBackIconHover(true)}
            onMouseLeave={() => setBackIconHover(false)}
            onClick={backButton}
            className="w-10 h-10 p-2"
            alt="back icon"
          ></img>
          <img
            src={homeIconHover ? homeIconIn : homeIconOut}
            onMouseEnter={() => setHomeIconHover(true)}
            onMouseLeave={() => setHomeIconHover(false)}
            onClick={home}
            className="w-10 h-10 p-2"
            alt="home icon"
          ></img>
          <div onClick={about} className="p-2 hover:font-bold">
            About
          </div>
          <div onClick={projects} className="p-2 hover:font-bold">
            Project
          </div>
          <div className="ml-auto">
            {language.isChanged ? (
              <div>
                <button className={btnClass} onClick={KO}>
                  {language.languageIs}
                </button>
              </div>
            ) : (
              <div>
                <button className={btnClass} onClick={EN}>
                  {language.languageIs}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-row p-3 bg-neutral-200">
          <img
            src={backIconHover ? backIconIn : backIconOut}
            onMouseEnter={() => setBackIconHover(true)}
            onMouseLeave={() => setBackIconHover(false)}
            onClick={backButton}
            className="w-10 h-10 p-2"
            alt="back icon"
          ></img>
          <img
            src={homeIconHover ? homeIconIn : homeIconOut}
            onMouseEnter={() => setHomeIconHover(true)}
            onMouseLeave={() => setHomeIconHover(false)}
            onClick={home}
            className="w-10 h-10 p-2"
            alt="home icon"
          ></img>
          <div onClick={about} className="p-2 hover:font-bold">
            자기소개
          </div>
          <div onClick={projects} className="p-2 hover:font-bold">
            프로젝트
          </div>
          <div className="ml-auto">
            {language.isChanged ? (
              <div>
                <button className={btnClass} onClick={KO}>
                  {language.languageIs}
                </button>
              </div>
            ) : (
              <div>
                <button className={btnClass} onClick={EN}>
                  {language.languageIs}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
