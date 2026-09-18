import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    company: "아이쿠카",
    period: "2025 — Present",
    role: "Frontend Developer",
    description:
      "React Native 기반 신규 모바일 앱 구축과 운영 앱의 역할·기능 확장을 담당하고 있습니다.",
    responsibilities: [
      "iOS·Android 빌드 환경과 네트워크·인증 기반 구축",
      "고령 사용자를 고려한 디자인 시스템과 접근성 기준 코드화",
      "운영 앱의 조부모 역할 및 작품 후원 흐름 확장",
      "외부 결제 웹뷰·AI 생성 상태·비가역 동작의 UX 설계",
    ],
    projects: [
      { title: "IQOOCCA Art Gallery", href: "/projects/iqoocca-art-gallery" },
      { title: "세바사", href: "/projects/sebasa-grandparent" },
    ],
  },
];
