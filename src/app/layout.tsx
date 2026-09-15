import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "구민지 — Frontend Developer",
  description: "React와 React Native로 사용자 경험과 서비스의 흐름을 만드는 프론트엔드 개발자 구민지입니다.",
  openGraph: {
    title: "구민지 — Frontend Developer",
    description: "UI 구현에서 시작해 서비스를 만드는 프론트엔드 개발자 포트폴리오",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
