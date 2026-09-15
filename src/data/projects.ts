import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    number: "01",
    slug: "iqoocca-art-gallery",
    title: "IQOOCCA Art Gallery",
    description: "React Native로 제작한 실서비스 모바일 애플리케이션",
    detailDescription: "React Native 기반 아동 작품 갤러리 서비스",
    role: "Frontend Developer",
    period: "2026",
    tech: ["React Native", "TypeScript", "React Query", "Zustand"],
    highlights: [
      "인증 상태 관리",
      "작품 피드 구현",
      "후원 기능",
      "API 데이터 연동",
      "환경별 API 설정",
      "작품 상태에 따른 UI 분기 처리",
    ],
    overview:
      "아이들의 작품을 감상하고 응원할 수 있도록 작품 피드와 후원 경험을 연결한 모바일 애플리케이션입니다. 화면 구현뿐 아니라 인증과 서버 상태가 자연스럽게 이어지는 구조를 함께 고민했습니다.",
    caseStudies: [
      {
        title: "API 데이터와 UI 책임 분리",
        problem:
          "작품 목록과 후원 데이터를 화면 컴포넌트에서 직접 가공하면 렌더링 코드의 책임이 커지고 상태별 화면을 파악하기 어려워질 수 있었습니다.",
        solution:
          "React Query가 서버 상태를 담당하고 가공 로직을 기능 단위 훅으로 분리하도록 구성해, 화면 컴포넌트는 로딩·오류·콘텐츠 상태를 표현하는 역할에 집중했습니다.",
        flow: ["API", "React Query", "Feature Hook", "Artwork List", "Artwork Card"],
      },
      {
        title: "인증 상태에 따른 화면 흐름 정리",
        problem:
          "로그인 여부와 토큰 상태에 따라 접근 가능한 화면과 후원 동작이 달라져, 분기 로직이 여러 화면에 흩어질 가능성이 있었습니다.",
        solution:
          "Zustand에서 인증 상태를 일관되게 관리하고 보호가 필요한 동작의 진입 지점을 통일해 화면별 중복 분기를 줄였습니다.",
        flow: ["Auth State", "Route Guard", "Action Check", "Screen State"],
      },
      {
        title: "작품 상태를 명확한 UI로 전달",
        problem:
          "작품의 공개 여부와 후원 가능 상태처럼 데이터 조건이 달라질 때 사용자가 가능한 행동을 바로 이해하기 어려울 수 있었습니다.",
        solution:
          "상태 값을 명시적인 UI 변형으로 매핑하고 버튼과 안내 문구를 함께 변경해, 현재 상태와 다음 행동을 한 화면에서 이해하도록 구성했습니다.",
        flow: ["Artwork Status", "UI Mapping", "Copy + Action", "User Feedback"],
      },
    ],
    image: {
      src: "/images/projects/iqoocca-art-gallery.png",
      alt: "IQOOCCA Art Gallery 모바일 앱을 표현한 에디토리얼 이미지",
    },
    accent: "moss",
  },
  {
    number: "02",
    slug: "reungreung",
    title: "릉릉",
    description: "경주 여행을 위한 도보 중심 여행 계획 서비스",
    detailDescription: "위치와 이동 시간을 연결하는 경주 도보 여행 플래너",
    role: "Personal Project",
    period: "2026",
    tech: ["React Native", "Expo", "Kakao Maps", "Open API", "React Query", "Zustand"],
    highlights: [
      "한국관광공사 API 연동",
      "위치 기반 관광지 탐색",
      "지도 기반 탐색",
      "카테고리 필터",
      "기상청 날씨 데이터 연동",
      "여행 장소 담기",
      "순서 편집 및 시간표 구성",
      "도보 시간 및 거리 표시",
    ],
    overview:
      "경주의 관광지를 위치와 카테고리로 탐색하고, 가고 싶은 장소를 담아 도보 이동 중심의 일정으로 정리하는 개인 프로젝트입니다. 여러 공공 데이터와 지도 정보를 하나의 계획 흐름으로 연결했습니다.",
    caseStudies: [
      {
        title: "서로 다른 공공 데이터의 화면 모델 통합",
        problem:
          "관광지와 날씨 데이터는 제공 형식과 갱신 주기가 달라 화면에서 직접 조합할 경우 로딩과 오류 처리가 복잡해질 수 있었습니다.",
        solution:
          "API별 요청과 변환 단계를 분리하고 화면에서 사용하는 공통 형태로 정규화해 탐색 화면이 데이터 출처보다 사용자 흐름에 집중하도록 구성했습니다.",
        flow: ["Open APIs", "Query Layer", "Data Mapper", "Explore Screen"],
      },
      {
        title: "지도 탐색과 목록 필터의 상태 동기화",
        problem:
          "지도 영역, 현재 위치, 카테고리 필터가 동시에 바뀌면 지도와 목록이 서로 다른 결과를 보여줄 수 있었습니다.",
        solution:
          "탐색 조건을 하나의 상태 모델로 관리하고 조건이 바뀔 때 동일한 쿼리 키와 필터 기준을 사용해 지도와 목록의 결과를 맞췄습니다.",
        flow: ["Map Bounds", "Category", "Search State", "Places Result"],
      },
      {
        title: "장소 목록을 실제 이동 일정으로 전환",
        problem:
          "장소를 담는 기능만으로는 사용자가 방문 순서와 이동 시간을 판단하기 어려웠습니다.",
        solution:
          "장소 순서를 직접 편집할 수 있게 하고 구간별 도보 시간과 거리를 함께 표시해, 선택한 장소가 바로 실행 가능한 시간표가 되도록 설계했습니다.",
        flow: ["Saved Places", "Reorder", "Walking Time", "Trip Schedule"],
      },
    ],
    image: {
      src: "/images/projects/reungreung.png",
      alt: "경주 도보 여행 플래너 릉릉을 표현한 에디토리얼 이미지",
    },
    accent: "sand",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
