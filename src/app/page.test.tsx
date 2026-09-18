import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home", () => {
  it("renders the requested navigation and portfolio sections", () => {
    const { container } = render(<Home />);

    expect(screen.getByRole("link", { name: "구민지" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Work" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByText(/UI를 구현하는 것에서 시작해/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Selected Work" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
    expect(container.querySelector("#work")).toBeInTheDocument();
    expect(container.querySelector("#experience")).toBeInTheDocument();
    expect(container.querySelector("#about")).toBeInTheDocument();
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });

  it("groups the three projects by company and independent work", () => {
    render(<Home />);
    const links = screen.getAllByRole("link", { name: /View Project/ });
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute("href", "/projects/iqoocca-art-gallery");
    expect(links[1]).toHaveAttribute("href", "/projects/sebasa-grandparent");
    expect(links[2]).toHaveAttribute("href", "/projects/reungreung");
    expect(screen.getByRole("heading", { name: "아이쿠카 · Frontend Developer" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Independent Project" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "IQOOCCA Art Gallery" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "세바사" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "릉릉" })).toBeInTheDocument();
  });

  it("links the 아이쿠카 experience to both company projects", () => {
    render(<Home />);

    expect(screen.getByText("아이쿠카")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "IQOOCCA Art Gallery" })).toHaveAttribute(
      "href",
      "/projects/iqoocca-art-gallery",
    );
    expect(screen.getByRole("link", { name: "세바사" })).toHaveAttribute(
      "href",
      "/projects/sebasa-grandparent",
    );
  });

  it("does not render fabricated or forbidden content", () => {
    const { container } = render(<Home />);
    expect(container.textContent).not.toMatch(
      /WeSeed|Coming Soon|Placeholder|롯데글로벌로지스 CRM|B2B 서비스와 CRM 제품/,
    );
  });
});
