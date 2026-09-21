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
    expect(screen.getByText(/사용자가 마주하는 화면부터/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Selected Work" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
    expect(container.querySelector("#work")).toBeInTheDocument();
    expect(container.querySelector("#experience")).toBeInTheDocument();
    expect(container.querySelector("#about")).toBeInTheDocument();
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });

  it("groups the four projects by company and competition work", () => {
    render(<Home />);
    const links = screen.getAllByRole("link", { name: /View Project/ });
    expect(links).toHaveLength(4);
    expect(links[0]).toHaveAttribute("href", "/projects/iqoocca-community");
    expect(links[1]).toHaveAttribute("href", "/projects/sebasa");
    expect(links[2]).toHaveAttribute("href", "/projects/iqoocca-backoffice");
    expect(links[3]).toHaveAttribute("href", "/projects/reungreung");
    expect(screen.getByRole("heading", { name: "아이쿠카 · Frontend Developer" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Competition Project" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "세바사 - 세상을 바꾸는 사장님" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "릉릉" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "IQOOCCA Art Gallery" })).not.toBeInTheDocument();
  });

  it("links the 아이쿠카 experience to its merged company project", () => {
    render(<Home />);

    expect(screen.getByText("아이쿠카")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "세바사 - 세상을 바꾸는 사장님" })).toHaveAttribute("href", "/projects/sebasa");
    expect(screen.getByRole("link", { name: "커뮤니티" })).toHaveAttribute(
      "href",
      "/projects/iqoocca-community",
    );
    expect(screen.getByRole("link", { name: "백오피스 V2 이관" })).toHaveAttribute(
      "href",
      "/projects/iqoocca-backoffice",
    );
  });

  it("opens the 위사 project links in a new tab", () => {
    render(<Home />);

    expect(screen.getByText("(주)위사")).toBeInTheDocument();
    const wisaSite = screen.getByRole("link", { name: "위사 공식 웹사이트" });
    expect(wisaSite).toHaveAttribute("href", "https://www.wisa.co.kr/");
    expect(wisaSite).toHaveAttribute("target", "_blank");
    expect(wisaSite).toHaveAttribute("rel", "noreferrer");
    expect(screen.getByRole("link", { name: "아임부스터 솔루션 템플릿" })).toHaveAttribute(
      "href",
      "https://iambooster.mywisa.com/_manage/#/",
    );
  });

  it("does not render fabricated or forbidden content", () => {
    const { container } = render(<Home />);
    expect(container.textContent).not.toMatch(
      /WeSeed|Coming Soon|Placeholder|롯데글로벌로지스 CRM|B2B 서비스와 CRM 제품/,
    );
  });
});
