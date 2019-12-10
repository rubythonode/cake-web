# Cake Server [![Typed with TypeScript](https://badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=555555&color=blue)](https://github.com/microsoft/TypeScript) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Code Style](https://badgen.net/badge/style/Airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

## 🚀 Run
```bash
# 본 레포지토리를 클론합니다.
git clone https://github.com/junhoyeo/cake-web
cd packages/server

# jwtconfig.json을 생성합니다.
cat >> jwtconfig.json
{
  "secret": "s0m3-s3cr3t-K3y"
}

# yarn을 이용해 의존성을 설치합니다.
yarn install

# 개발 서버를 실행합니다. 파일이 변경될 때마다 nodemon이 서버를 자동으로 재시작합니다.
yarn run dev
```

> TODO: lerna 활용하기

## 🎨 Styling conventions

### 타입스크립트
[tslint-config-prettier](https://github.com/prettier/tslint-config-prettier)와 [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)를 순차적으로 적용합니다. 두 스타일이 겹치게 되면 `tslint-config-airbnb`가 우선적으로 적용됩니다.

### 커밋 메세지
[Karma git commit messages convention](http://karma-runner.github.io/4.0/dev/git-commit-msg.html)을 사용합니다.

## 🗃 Models
데이터베이스에 생성되는 모델들의 구조입니다.

### Room
```js
{
  name: '대회 준비', // 방 이름
  room: '세미나실', // 요청하는 방
  pin: '1234', // 방 입장 시 필요한 패스워드
  date: Date(), // 사용할 날짜
  time: 'afsc1', // 사용할 시간 ['afsc1', 'afsc2', 'night1', 'night2']
  max: 4, // 최대 참가 인원 수
  desc: '저희가요 교내 IT 공모전에 나가는데 오늘 코딩을 안하면 손에 가시가 돋아서 그만...', // 사유
  delegate: '507f1f77bcf86cd799439011', // 신청 대표자
  users: [ // 신청한 사람들 ID 목록
    '507f1f77bcf86cd799439011'
  ],
  created: new Date(), // 추가된 시간
}
```

- 만약 대표자가 방에서 나가면, `users`에서 삭제되고 그 다음으로 들어온 사람이 새로운 대표자가 됩니다.
  - 이때 남은 `users`의 길이가 0이라면, 해당 방은 삭제됩니다.
  - 대표자가 방에서 나가기 전에 예상되는 결과를 프론트엔드에서 사용자에게 알리고 확인을 받아야 합니다.

### User
```js
{
  name: '여준호', // 이름
  type: 'student', // 종류 ['student', 'teacher']
  serial: '1520', // 학번
  username: 'hanaro0704',
  email: 'hanaro0704@naver.com', // 이메일
  password: `${password}|${salt}`, // 해싱된 패스워드
  joined: new Date(), // 최초 연동일
  uid: '2095', // RFID UID
}
```

- 회원가입 절차 없이 바로 디미고 통합 아이디를 통해 로그인할 수 있도록 합니다.

## 🔥 Routes
전체 API에 존재하는 라우트들입니다.

### Auth API
인증을 처리합니다.

#### Login
디미고 아이디(또는 이미 등록된 이메일)와 패스워드로 로그인하고, JWT 토큰과 함께 UID를 반환합니다.

### Device API

#### Toggle
디바이스 또는 앱으로부터 UID와 Room ID를 받아, 리얼타임 DB의 해당 Room ID의 state를 토글합니다.

### Room API

#### 방 생성
#### 방 가입
#### 방 조회
#### 방 승인
