import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

import ProjectPage, { generateMetadata, generateStaticParams } from "./page";

describe("project detail route", () => {
  it("generates only the two supplied project routes", () => {
    expect(generateStaticParams()).toEqual([
      { slug: "iqoocca-art-gallery" },
      { slug: "reungreung" },
    ]);
  });

  it("renders a known project with its case studies", async () => {
    render(await ProjectPage({ params: Promise.resolve({ slug: "iqoocca-art-gallery" }) }));
    expect(screen.getByRole("heading", { name: "IQOOCCA Art Gallery" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Problem & Solution" })).toBeInTheDocument();
    expect(screen.getAllByText("Problem").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("Solution").length).toBeGreaterThanOrEqual(2);
  });

  it("creates project-specific metadata", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: "reungreung" }) });
    expect(metadata.title).toContain("릉릉");
    expect(metadata.description).toContain("경주");
  });

  it("returns not found for an unknown project", async () => {
    await expect(ProjectPage({ params: Promise.resolve({ slug: "unknown" }) })).rejects.toThrow("NEXT_NOT_FOUND");
  });
});
