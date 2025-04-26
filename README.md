# TweetQL

GraphQL을 사용한 트위터 클론 프로젝트입니다. Apollo Server와 Prisma를 사용하여 구현되었습니다.

## 기술 스택

- Node.js
- Apollo Server
- GraphQL
- Prisma (PostgreSQL)
- Neon (Serverless PostgreSQL)

## 시작하기

### 필수 조건

- Node.js (v16 이상)
- npm 또는 yarn
- PostgreSQL 데이터베이스 (Neon 사용)

### 설치

1. 저장소 클론
```bash
git clone [repository-url]
cd tweetql
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
`.env` 파일을 생성하고 다음 내용을 추가합니다:
```
DATABASE_URL="your-database-url"
```

4. 데이터베이스 마이그레이션
```bash
npx prisma migrate dev
```

5. 시드 데이터 추가 (선택사항)
```bash
npm run prisma:seed
```

### 개발 서버 실행

```bash
npm run dev
```

서버가 http://localhost:4000 에서 실행됩니다.

## GraphQL API

### Queries

- `me`: 현재 로그인한 사용자 정보 조회
- `tweets`: 모든 트윗 조회
- `tweet(id: ID!)`: 특정 트윗 조회

### Mutations

- `postTweet(text: String!)`: 새 트윗 작성
- `deleteTweet(id: ID!)`: 트윗 삭제

## 데이터 모델

### User
- id: ID
- username: String
- email: String
- tweets: [Tweet]
- createdAt: DateTime
- updatedAt: DateTime

### Tweet
- id: ID
- text: String
- author: User
- authorId: String
- createdAt: DateTime
- updatedAt: DateTime

## 라이선스

ISC 