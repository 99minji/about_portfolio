import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

import ProjectPage, { generateMetadata, generateStaticParams } from "./page";

describe("project detail route", () => {
  it("generates every project route", () => {
    expect(generateStaticParams()).toEqual([
      { slug: "iqoocca-community" },
      { slug: "sebasa" },
      { slug: "iqoocca-backoffice" },
      { slug: "reungreung" },
    ]);
  });

  it("renders a known project with its case studies", async () => {
    render(await ProjectPage({ params: Promise.resolve({ slug: "sebasa" }) }));
    expect(screen.getByRole("heading", { name: "세바사 - 세상을 바꾸는 사장님" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Problem & Solution" })).toBeInTheDocument();
    expect(screen.getAllByText("Problem").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("Solution").length).toBeGreaterThanOrEqual(2);
  });

  it("renders the merged Sebasa outcomes and links to reungreung next", async () => {
    render(await ProjectPage({ params: Promise.resolve({ slug: "sebasa" }) }));

    expect(screen.getAllByText("In Progress")).toHaveLength(1);
    expect(screen.getByText("53")).toBeInTheDocument();
    expect(screen.getAllByText("Result")).toHaveLength(6);
    expect(screen.getByRole("link", { name: /다음 프로젝트/ })).toHaveAttribute(
      "href",
      "/projects/iqoocca-backoffice",
    );
  });

  it("renders the backoffice migration without in-progress markers", async () => {
    render(await ProjectPage({ params: Promise.resolve({ slug: "iqoocca-backoffice" }) }));

    expect(screen.getByRole("heading", { name: "백오피스 V2 이관" })).toBeInTheDocument();
    expect(screen.queryByText("In Progress")).not.toBeInTheDocument();
    expect(screen.getByText("16 → 19")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /다음 프로젝트/ })).toHaveAttribute(
      "href",
      "/projects/reungreung",
    );
  });

  it("renders the community project outcomes", async () => {
    render(await ProjectPage({ params: Promise.resolve({ slug: "iqoocca-community" }) }));

    expect(screen.getByRole("heading", { name: "커뮤니티" })).toBeInTheDocument();
    expect(screen.getByText("304")).toBeInTheDocument();
    expect(screen.getAllByText("Result")).toHaveLength(6);
    expect(screen.getByRole("link", { name: /다음 프로젝트/ })).toHaveAttribute(
      "href",
      "/projects/sebasa",
    );
  });

  it("no longer serves the split IQOOCCA route", async () => {
    await expect(
      ProjectPage({ params: Promise.resolve({ slug: "iqoocca-art-gallery" }) }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("creates project-specific metadata", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: "reungreung" }) });
    expect(metadata.title).toContain("릉릉");
    expect(metadata.description).toContain("경주");
  });

  it("renders reungreung results and app screens", async () => {
    render(await ProjectPage({ params: Promise.resolve({ slug: "reungreung" }) }));

    expect(screen.getAllByText("Result")).toHaveLength(7);
    expect(screen.getByRole("heading", { name: "App Screens" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "날씨 기반 장소 탐색" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "여행 동선 확인" })).toBeInTheDocument();
    expect(screen.getAllByRole("img", { name: /릉릉/ })).toHaveLength(6);
  });

  it("returns not found for an unknown project", async () => {
    await expect(ProjectPage({ params: Promise.resolve({ slug: "unknown" }) })).rejects.toThrow("NEXT_NOT_FOUND");
  });
});
