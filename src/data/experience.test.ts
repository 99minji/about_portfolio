import { describe, expect, it } from "vitest";

import { experiences } from "./experience";

describe("experiences", () => {
  it("lists both roles newest first and connects 아이쿠카 to its project", () => {
    expect(experiences.map(({ company, period }) => ({ company, period }))).toEqual([
      { company: "아이쿠카", period: "2025 — Present" },
      { company: "(주)위사", period: "2021.03 — 2024.06" },
    ]);
    expect(experiences[0].projects).toEqual([
      { title: "커뮤니티", href: "/projects/iqoocca-community" },
      { title: "세바사 - 세상을 바꾸는 사장님", href: "/projects/sebasa" },
      { title: "백오피스 V2 이관", href: "/projects/iqoocca-backoffice" },
    ]);
    expect(experiences[1].projects).toEqual([
      { title: "위사 공식 웹사이트", href: "https://www.wisa.co.kr/" },
      { title: "아임부스터 솔루션 템플릿", href: "https://iambooster.mywisa.com/_manage/#/" },
    ]);

    for (const experience of experiences) {
      expect(experience.responsibilities.length).toBeGreaterThanOrEqual(4);
      expect(experience.description.length).toBeGreaterThan(20);
    }
  });

  it("does not contain forbidden CRM copy", () => {
    const content = JSON.stringify(experiences);
    expect(content).not.toContain("WeSeed CRM");
    expect(content).not.toContain("롯데글로벌로지스 CRM");
    expect(content).not.toContain("B2B 서비스와 CRM 제품");
  });
});
