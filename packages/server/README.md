# Gotoroom Server [![Typed with TypeScript](https://badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=555555&color=blue)](https://github.com/microsoft/TypeScript) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Code Style](https://badgen.net/badge/style/Airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
고투룸

## 🚀 Run
```bash
# 본 레포지토리를 클론합니다.
git clone https://github.com/junhoyeo/gotoroom-server

# yarn을 이용해 의존성을 설치합니다.
yarn install

# 개발 서버를 실행합니다. 파일이 변경될 때마다 nodemon이 서버를 자동으로 재시작합니다.
yarn run dev
```

## 🎨 Styling conventions

### 타입스크립트
[tslint-config-prettier](https://github.com/prettier/tslint-config-prettier)와 [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)를 순차적으로 적용합니다. 두 스타일이 겹치게 되면 `tslint-config-airbnb`가 우선적으로 적용됩니다.

### 커밋 메세지
[Karma git commit messages convention](http://karma-runner.github.io/4.0/dev/git-commit-msg.html)을 사용합니다.

## 🗃 Models
데이터베이스에 생성되는 모델들의 구조입니다.

## 🔥 Routes
전체 API에 존재하는 라우트들입니다.
