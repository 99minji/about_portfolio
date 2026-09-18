import { describe, expect, it } from "vitest";

import { experiences } from "./experience";

describe("experiences", () => {
  it("connects the 아이쿠카 experience to its two projects", () => {
    expect(experiences).toHaveLength(1);
    expect(experiences[0].company).toBe("아이쿠카");
    expect(experiences[0].responsibilities.length).toBeGreaterThanOrEqual(4);
    expect(experiences[0].projects).toEqual([
      { title: "IQOOCCA Art Gallery", href: "/projects/iqoocca-art-gallery" },
      { title: "세바사", href: "/projects/sebasa-grandparent" },
    ]);
  });

  it("does not contain forbidden CRM copy", () => {
    const content = JSON.stringify(experiences);
    expect(content).not.toContain("WeSeed CRM");
    expect(content).not.toContain("롯데글로벌로지스 CRM");
    expect(content).not.toContain("B2B 서비스와 CRM 제품");
  });
});
