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
  times: ['afsc1'], // 사용할 시간 ['afsc1', 'afsc2', 'night1', 'night2']
  max: 4, // 최대 참가 인원 수
  desc: '저희가요 교내 IT 공모전에 나가는데 오늘 코딩을 안하면 손에 가시가 돋아서 그만...', // 사유
  delegate: '507f1f77bcf86cd799439011', // 신청 대표자
  users: [ // 신청한 사람들 UID 목록
    '4C1F4290'
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
  uid: '4C1F4290', // RFID UID
}
```

- 회원가입 절차 없이 바로 디미고 통합 아이디를 통해 로그인할 수 있도록 합니다.

## 🔥 API 문서

### 로그인
- POST `/auth/login`

```json
{"username":"hanaro0704","password":"#include0704"}
```

```json
{
  "user":{
    "email":"hanaro0704@naver.com",
    "name":"여준호",
    "serial":"1520",
    "username":"hanaro0704",
    "type":"S",
    "uid":"4C1B2290",
    "joined":"2019-12-11T11:50:15.001Z",
    "id":"5df0d7f66a03937eb21b024e"
  },"token":"eyJ0eXAiOiJKV1QiLCJh..."
}
```

### 방 목록 가져오기
- GET `/room`
- 헤더 `Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbG...`

```js
{
  "rooms":[
    {
      "times":["방과후 1타임","방과후 2타임"],
      "users":["4C1B2290"], // 개수 세서 현재 들어온 사람 몇 명인지 구하기
      "desc":"대회 준비 할 사람 모여라~",
      "max":3,
      "name":"대회 준비",
      "room":"북카페",
      "date":1575990000000,
      "id":"5df0d99588cc637ae1df4a66"
    }
  ]
}
```

### 자신이 참여한 방 목록 가져오기
- GET `/room/mine`
- 헤더 `Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbG...`
- 나머지 위와 동일

### 모바일 query로 방 참여자 실명 및 학번까지 보기
- GET `/room?mobile=true` 또는 GET `/room/mine?mobile=true`
- 헤더 `Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbG...`
- 나머지 위와 동일

```json
{
  "rooms": [
    {
      "times": ["방과후 1타임", "방과후 2타임"],
      "users": [{ "name": "여준호", "serial": "1520", "id": "5df0d7f66a03937eb21b024e" },
                { "name": "민승현", "serial": "1409", "id": "5df1095b6a03937eb21b024f" }],
      "desc": "대회 준비 할 사람 모여라~",
      "max": 3,
      "name": "대회 준비",
      "room": "북카페",
      "date": 1575990000000,
      "id": "5df0d99588cc637ae1df4a66"
    },
  ]
}
```

### 방 상세 정보 가져오기
- GET `/room/{roomID}`
- 예시: `/room/5df0d99588cc637ae1df4a66`
- 헤더 `Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbG...`

```json
{
  "room":{
    "times":["방과후 1타임","방과후 2타임"],
    "users":["4C1B2290"],
    "desc":"대회 준비 할 사람 모여라~",
    "max":3,
    "name":"대회 준비",
    "room":"북카페",
    "date":1575990000000,
    "delegate":"여준호",
    "id":"5df0d99588cc637ae1df4a66"
  }
}
```

### 방 신청하기
- POST `/room/{roomID}`
- 예시: `/room/5df0d99588cc637ae1df4a66`
- 헤더 `Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbG...`

```json
{"pin": "1234"}
```

- 방의 ID와 PIN 번호를 통해 인증
- 참가 성공시 `200`, 에러 발생 시 그 외의 코드

### 교사 관련
🔥🔥🔥

### 문 열기
- POST `/device/toggle`

```json
{"room": "0101","user": "4C1B2290"}
```

- 위와 같은 페이로드를 보내면 열 수 있을 때 status `200` 주고 못 열면 그 외의 코드를 줌.
- `200` 뜨면 파베 값 토글함.

- ~~일단 교사 인증은 고려하지 않음~~ 고려함

### 문 열기 임베디드 버전
- GET `/device/toggle?room=0101&user=4C1B2290`
- 이런 식으로 똑같이 작동
