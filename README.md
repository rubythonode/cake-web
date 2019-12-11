# 🍰 Cake Web [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
> 스마트한 공간 사용의 시작, CAKE

[Lerna](https://github.com/lerna/lerna) 모노레포를 사용해서 [서버](./packages/server)와 [웹 클라이언트](./packages/frontend)를 관리합니다.

## Related
- [🧁 하드웨어](https://github.com/Changemin/Cake-hardware)
- [🎂 모바일 앱](https://github.com/MinSeungHyun/Cake)

## API 문서

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
- GET `/room`
- 헤더 `Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbG...`
- 나머지 위와 동일

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
- 하는중임

### 문 열기
- POST `/device/toggle`

```json
{"room": "0101","user": "4C1B2290"}
```

- 위와 같은 페이로드를 보내면 열 수 있을 때 status `200` 주고 못 열면 그 외의 코드를 줌.
- `200` 뜨면 파베 값 토글함.

- 일단 교사 인증은 고려하지 않음
