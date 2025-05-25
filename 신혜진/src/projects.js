import project1Img1 from "./assets/project1-1.png";
import project1Img2 from "./assets/project1-2.png";
import project1Img3 from "./assets/project1-3.png";
import project1Img4 from "./assets/project1-4.png";
import project2Img1 from "./assets/project2-1.png";
import project2Img2 from "./assets/project2-2.png";
import project2Img3 from "./assets/project2-3.png";
import project2Img4 from "./assets/project2-4.png";
import project3Img1 from "./assets/project3-1.png";
import project3Img2 from "./assets/project3-2.png";
import project3Img3 from "./assets/project3-3.png";
import project3Img4 from "./assets/project3-4.png";

export const projects = [
  {
    projectId: 1,
    title: "Term Project",
    program: "자바프로그래밍및실습",
    period: "2024-05-02 ~ 2024-06-03",
    contents: "자바의 상속, 확장을 이용한 게임 만들기",
    image: [project1Img1, project1Img2, project1Img3, project1Img4],
  },
  {
    projectId: 2,
    title: "Capstone Design",
    program: "글로벌SW역량강화프로그램",
    period: "2024-07-20 ~ 2024-08-24",
    contents:
      "질문에 어려움을 느끼는 학생들 및 학생들이 질문하기를 바라시는 선생님들을 타겟으로 한 교육 서비스 기획",
    image: [project2Img1, project2Img2, project2Img3, project2Img4],
  },
  {
    projectId: 3,
    title: "Data Create Camp",
    program: "MIDAS GROUP",
    period: "2024-09-12 ~ 2024-11-22",
    contents:
      "연도별 패션 스타일 이미지 및 추천 데이터를 바탕으로 패션 스타일 선호 여부를 예측하는 인공지능 모델 개발",
    image: [project3Img1, project3Img2, project3Img3, project3Img4],
  },
];
