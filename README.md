## Deadline
- ⭐**5월 31일(금) 20시**⭐

## Pull Request

- PR은 가능한 상세하게 써주세요!
- AI 도움을 받았다면 내용 이해 후 자신의 언어로 재구성하여 설명까지 해주세요!

## Code Review

- 궁금한 점, 개선점 등 상대를 위해 자세하게 써주세요!
- 저에게 질문을 하고 싶다면 `@jihyun132`를 써주신 후 질문해주세요!
<br/>

## Git Clone
브랜치명 : `feature/{이름}` ( ex. feature/kim_ji_hyun ) <br/>
브랜치 만들어두었으니 프롬프트에서 정확하게 사용해주시길 바랍니다.

#### 1️⃣ git clone 할 때 자신의 브랜치만 클론해주세요. 
`--single-branch` 사용해서 자신의 브랜치만 클론해서 개발할 수 있습니다.
- 사용법
```bash
git clone --branch feature/{이름} --single-branch <URL>
```

- **예시**
```bash
git clone --branch feature/kim_ji_hyun --single-branch https://github.com/Likelion-YeungNam-Univ/11-13th-fe-assignment.git
```
#### 2️⃣ git checkout -b feature/{이름}
브랜치를 로컬에서 새로 만든 후 개발하셔야 브랜치가 안꼬입니다. **꼭!** 해주세요.
#### 3️⃣ 개발 시작
git clone과 git checkout을 모두 수행한 후 과제 진행해주시면 됩니다.

- `cd {폴더명(이름)}` 해주시고 해당 폴더에서 개발하시면 됩니다.
```bash
cd 김지현
```
- npm install 해주시면 `npm run dev` 바로 실행 가능합니다.
```bash
npm install
```

#### 4️⃣ pr 올릴 때 main이 아니라 dev 브랜치를 base로 해주세요.
건드리지 않는 이상 자동 적용되므로 신경쓰지 않으셔도 됩니다. 하지만 잘못 설정되었을 경우 base 브랜치를 dev로 설정해주시고 pr올려주세요.

