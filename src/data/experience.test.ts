import { describe, expect, it } from "vitest";

import { experiences } from "./experience";

describe("experiences", () => {
  it("keeps experience concise and free of project-name lists", () => {
    expect(experiences.length).toBeGreaterThan(0);
    for (const experience of experiences) {
      expect(experience).not.toHaveProperty("projects");
      expect(experience.responsibilities.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("does not contain forbidden CRM copy", () => {
    const content = JSON.stringify(experiences);
    expect(content).not.toContain("WeSeed CRM");
    expect(content).not.toContain("롯데글로벌로지스 CRM");
    expect(content).not.toContain("B2B 서비스와 CRM 제품");
  });
});
