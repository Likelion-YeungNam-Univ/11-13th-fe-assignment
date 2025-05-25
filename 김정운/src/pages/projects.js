import project1 from '../img/project_gradio.png'
import project2 from '../img/project_gradio2.png'
import project2code from '../img/project_gradio2_code.png'
import project4 from '../img/6호선 탑승자 분석.png'
import project3code from '../img/project_gradio3_code.png'

const projects = [
  { projectId: 1, projectName: "gradio", description : "이 프로젝트는 Gradio를 사용하여 웹을 만들었습니다. 사용자는 텍스트를 입력하면 단어의 갯수를 알려줍니다", imgSrc : project1},
  { projectId: 2, projectName: "gradio + ML = image 판별", description : "이 프로젝트는 Gradio와 이미지 약 5000장을 직접 모델에 학습시켜 이미지를 판별하는 웹을 만들었습니다. 사용자는 업로드한 이미지에 대해 머신러닝 모델이 예측한 결과를 실시간으로 확인할 수 있습니다.", imgSrc : project2 , codeimgSrc : project2code},
  { projectId: 3, projectName: "서울 6호선 탑승객 분석", description : "이 프로젝트는 서울 6호선의 탑승객 데이터를 분석하여 승객 수, 혼잡도 등을 시각화했습니다", imgSrc : project4, codeimgSrc : project3code},
  { projectName : "프로젝트 없음..."},
];

export default projects;