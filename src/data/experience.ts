import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    company: "아이쿠카",
    period: "2025 — Present",
    role: "Frontend Developer",
    description:
      "React Native 운영 앱에 새로운 사용자 역할과 서비스 흐름을 확장하는 일을 담당하고 있습니다.",
    responsibilities: [
      "학부모 커뮤니티 신규 구축과 동네 인증·신고·제재 흐름 설계",
      "운영 앱의 조부모 역할 및 작품 감상·후원 흐름 확장",
      "여러 API 상태가 얽힌 후원 관문 판정 로직 분리와 단위 테스트 설계",
      "앱스토어 UGC 심사 요건 대응과 신고·가리기 흐름 구현",
      "외부 결제 웹뷰·AI 생성 상태·비가역 동작의 UX 설계",
      "레거시 관리자 웹의 React 19·TanStack 스택 이관",
      "Claude Code를 활용한 명세 기반 구현과 테스트·타입·실기기 검증",
    ],
    projects: [
      { title: "커뮤니티", href: "/projects/iqoocca-community" },
      { title: "세바사 - 세상을 바꾸는 사장님", href: "/projects/sebasa" },
      { title: "백오피스 V2 이관", href: "/projects/iqoocca-backoffice" },
    ],
  },
  {
    company: "(주)위사",
    period: "2021.03 — 2024.06",
    role: "Web Publisher · CX/UX",
    description:
      "솔루션 기반 창업 고객사의 스킨을 제작·유지보수하고, 퍼블리싱 자산과 협업 프로세스를 함께 정리했습니다.",
    responsibilities: [
      "회사 공식 웹사이트 신규 제작과 반응형 퍼블리싱",
      "HTML·SCSS·jQuery 기반 맞춤형 스킨 제작과 반응형 UI 유지보수",
      "클래스 네이밍 표준화와 공통 클래스 정리로 유사 스킨 작업 속도 단축",
      "코드 교육 자료와 스타일 가이드 문서화로 고객사 문의·디자인 수정 대응 단축",
      "CSS 라이브러리 개선과 불필요한 스크립트 제거로 페이지 로딩 속도 개선",
      "신규 솔루션 템플릿(PC·모바일·반응형) 공통 요소 모듈화와 작업 흐름 체계화",
    ],
    projects: [
      { title: "위사 공식 웹사이트", href: "https://www.wisa.co.kr/" },
      { title: "아임부스터 솔루션 템플릿", href: "https://iambooster.mywisa.com/_manage/#/" },
    ],
  },
];
