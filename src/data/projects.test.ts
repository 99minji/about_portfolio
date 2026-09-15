import { describe, expect, it } from "vitest";

import { getProjectBySlug, projects } from "./projects";

describe("projects", () => {
  it("contains only the two supplied projects in sequence", () => {
    expect(projects).toHaveLength(2);
    expect(projects.map(({ number, slug }) => ({ number, slug }))).toEqual([
      { number: "01", slug: "iqoocca-art-gallery" },
      { number: "02", slug: "reungreung" },
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

  it("does not contain fabricated or forbidden project content", () => {
    const content = JSON.stringify(projects);
    expect(content).not.toContain("WeSeed");
    expect(content).not.toContain("Coming Soon");
    expect(content).not.toContain("Placeholder");
  });
});
