## Deadline
- ⭐**5월 31일(토) 20시**⭐

## Pull Request
- PR은 가능한 상세하게 써주세요!
- AI 도움을 받았다면 내용 이해 후 자신의 언어로 재구성하여 설명까지 해주세요!

## Code Review
- 궁금한 점, 개선점 등 상대를 위해 자세하게 써주세요!
- 코드 리뷰하시다가 저에게 질문하고 싶은 부분이 있다면 `@jihyun132`를 써주신 후 질문해주세요!
<br/>

## Git Clone
#### 1️⃣ 레포지토리 연결
- 빈 폴더 clone해서 레포지토리 연결할 것입니다. 잘 따라해주세요.
```bash
git clone --filter=blob:none --no-checkout <레포주소> myproject
cd myproject
```
> `myproject`는 clone할 때 사용할 폴더명이므로 작성하지 않아도 됩니다. <br/>
폴더명 작성 없이 레포주소까지 작성하여 실행하면 터미널을 여신 폴더에 clone됩니다.

- 사용 예시
```bash
git clone --filter=blob:none --no-checkout https://github.com/Likelion-YeungNam-Univ/11-13th-fe-assignment.git 11-13th-fe-assignmnet
cd 11-13th-fe-assignmnet
```
해당 명령어 실행 시 `11-13th-fe-assignmnet` 폴더가 생기고 폴더 내부는 비어있습니다. 

#### 2️⃣ 자신의 폴더만 클론되도록 설정해줍니다.
`sparse-checkout` 사용해서 자신의 폴더만 클론해서 개발할 수 있습니다.
- 사용법
```bash
git sparse-checkout init --cone
git sparse-checkout set {폴더명}
```
- **예시**
```bash
git sparse-checkout init --cone
git sparse-checkout set 김지현
```

#### 3️⃣ git checkout -b feature/{이름}
```bash
git checkout dev
git checkout -b feature/{이름}
```
- dev 브랜치를 먼저 checkout 하신 후 feature 브랜치 생성하셔야 브랜치가 안꼬입니다. 꼭‼ **dev부터‼️** 해주세요.
- 개발용 브랜치명 :  `feature/{이름}` ( ex. feature/kim_ji_hyun )
<br/>

- 예시
```bash
git checkout dev
git checkout -b feature/kim_ji_hyun
```

#### 4️⃣ 개발 시작
git clone과 git checkout을 모두 수행한 후 과제 진행해주시면 됩니다.

- `cd {폴더명(이름)}` 해주시고 해당 폴더에서 개발하시면 됩니다.
```bash
cd 김지현
```
- npm install 해주시면 `npm run dev` 바로 실행 가능합니다.
```bash
npm install
```

#### 5️⃣ pr 올릴 때 main이 아니라 dev 브랜치를 base로 해주세요.
건드리지 않는 이상 자동 적용되므로 신경쓰지 않으셔도 됩니다. 하지만 잘못 설정되었을 경우 base 브랜치를 dev로 설정해주시고 pr올려주세요.

