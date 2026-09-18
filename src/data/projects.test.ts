import { describe, expect, it } from "vitest";

import { getNextProject, getProjectBySlug, projects } from "./projects";

describe("projects", () => {
  it("contains the three projects in portfolio sequence", () => {
    expect(projects).toHaveLength(3);
    expect(projects.map(({ number, slug }) => ({ number, slug }))).toEqual([
      { number: "01", slug: "iqoocca-art-gallery" },
      { number: "02", slug: "sebasa-grandparent" },
      { number: "03", slug: "reungreung" },
    ]);
  });

  it("contains complete detail-page content", () => {
    for (const project of projects) {
      expect(project.overview.length).toBeGreaterThan(40);
      expect(project.highlights.length).toBeGreaterThanOrEqual(4);
      expect(project.caseStudies.length).toBeGreaterThanOrEqual(2);
      expect(project.image.alt.length).toBeGreaterThan(10);
    }
  });

  it("finds a project by slug and returns undefined for unknown projects", () => {
    expect(getProjectBySlug("reungreung")?.title).toBe("릉릉");
    expect(getProjectBySlug("not-a-project")).toBeUndefined();
  });

  it("contains every verified reungreung contribution and app screen", () => {
    const reungreung = getProjectBySlug("reungreung");

    expect(reungreung?.caseStudies).toHaveLength(7);
    expect(reungreung?.caseStudies.map(({ title }) => title)).toEqual([
      "앱 진입 가드와 온보딩 상태 설계",
      "날씨 기반 실내·실외 추천 정렬",
      "위치기반 API의 57% 누락 규명",
      "공공 API 정상 응답 오판정 수정",
      "상세 화면의 잘못된 빈 상태 제거",
      "온보딩 3개 화면의 디자인 시스템 적용",
      "특정 언어에서 발생한 네이티브 크래시 해결",
    ]);
    expect(reungreung?.caseStudies.every(({ result }) => Boolean(result))).toBe(true);
    expect(reungreung?.screenshots?.map(({ src, title }) => ({ src, title }))).toEqual([
      { src: "/images/screens/onestore_guide_01.png", title: "날씨 기반 장소 탐색" },
      { src: "/images/screens/onestore_guide_02.png", title: "장소 상세와 오디오 가이드" },
      { src: "/images/screens/onestore_guide_03.png", title: "지도 탐색" },
      { src: "/images/screens/onestore_guide_04.png", title: "시간표 편집" },
      { src: "/images/screens/onestore_guide_05.png", title: "여행 동선 확인" },
    ]);
  });

  it("splits the documented IQOOCCA and Sebasa contributions", () => {
    const iqoocca = getProjectBySlug("iqoocca-art-gallery");
    const sebasa = getProjectBySlug("sebasa-grandparent");

    expect(iqoocca?.company).toBe("아이쿠카");
    expect(iqoocca?.category).toBe("company");
    expect(iqoocca?.caseStudies).toHaveLength(8);
    expect(iqoocca?.caseStudies.filter(({ status }) => status === "in-progress")).toHaveLength(2);
    expect(iqoocca?.metrics).toBeUndefined();

    expect(sebasa?.company).toBe("아이쿠카");
    expect(sebasa?.category).toBe("company");
    expect(sebasa?.caseStudies).toHaveLength(5);
    expect(sebasa?.metrics).toEqual([
      { value: "53", label: "세바사 관련 커밋" },
      { value: "17", label: "구현 페이지" },
      { value: "18", label: "구현 컴포넌트" },
      { value: "14", label: "후원 관문 단위 테스트" },
    ]);

    expect(getProjectBySlug("reungreung")?.category).toBe("independent");
  });

  it("finds the next project from the data order and wraps around", () => {
    expect(getNextProject(projects[0]).slug).toBe("sebasa-grandparent");
    expect(getNextProject(projects[1]).slug).toBe("reungreung");
    expect(getNextProject(projects[2]).slug).toBe("iqoocca-art-gallery");
  });

  it("does not contain fabricated or forbidden project content", () => {
    const content = JSON.stringify(projects);
    expect(content).not.toContain("WeSeed");
    expect(content).not.toContain("Coming Soon");
    expect(content).not.toContain("Placeholder");
  });
});
