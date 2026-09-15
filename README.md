# 구민지 — Frontend Developer Portfolio

React와 React Native로 구현한 프로젝트의 기능, 역할, 문제 해결 과정을 소개하는 개인 포트폴리오입니다.

## 기술 구성

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Vitest + Testing Library

## 실행

```bash
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## 검증

```bash
npm test -- --run
npm run typecheck
npm run lint
npm run build
```

## 콘텐츠 관리

- 프로젝트: `src/data/projects.ts`
- 경력: `src/data/experience.ts`
- 프로젝트 상세 페이지: `src/app/projects/[slug]/page.tsx`

프로젝트 목록과 상세 페이지는 같은 데이터 소스를 사용합니다. 새 프로젝트를 추가할 때는 `projects.ts`에 항목을 추가하고 대표 이미지를 `public/images/projects/`에 저장하세요.
