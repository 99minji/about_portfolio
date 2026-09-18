# 아이쿠카 프로젝트 계층 재구성 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 아이쿠카 경력을 회사 상위 맥락으로 표시하고, IQOOCCA Art Gallery 신규 앱과 세바사 운영 앱을 각각 독립된 프로젝트 상세 페이지로 제공한다.

**Architecture:** `Project` 데이터에 회사/독립 분류를 추가하고, 단일 프로젝트 배열을 홈의 그룹 목록과 세 상세 경로가 함께 사용한다. `Experience`는 프로젝트 링크만 보유하고, 다음 프로젝트 탐색은 데이터 배열 순서에서 계산해 slug 조건문을 제거한다.

**Tech Stack:** Next.js 16, React 19, TypeScript, Vitest, Testing Library, CSS

**Spec:** `docs/superpowers/specs/2026-09-18-iqoocca-project-hierarchy-design.md`

## Global Constraints

- 회사명은 `아이쿠카`로 표시한다.
- 프로젝트 순서는 `iqoocca-art-gallery`, `sebasa-grandparent`, `reungreung`으로 고정한다.
- IQOOCCA에는 E1–E8, 세바사에는 E9–E13만 담는다.
- E4와 E8만 `in-progress` 상태로 유지한다.
- 세바사 지표는 `53`, `17`, `18`, `14`이며 IQOOCCA에는 표시하지 않는다.
- 두 아이쿠카 프로젝트는 현재 `/images/projects/iqoocca-art-gallery.png`를 공유한다.
- 기존 릉릉 상세 내용과 스크린샷 데이터는 유지한다.

---

### Task 1: 프로젝트와 경력 데이터 계약

**Files:**
- Modify: `src/types/portfolio.ts`
- Modify: `src/data/projects.ts`
- Modify: `src/data/experience.ts`
- Test: `src/data/projects.test.ts`

**Interfaces:**
- Produces: `Project.category: "company" | "independent"`, `Project.company?: string`, `Experience.projects?: { title: string; href: string }[]`, `getNextProject(project: Project): Project`

- [ ] **Step 1: Write the failing data tests**

```ts
expect(projects.map(({ number, slug }) => ({ number, slug }))).toEqual([
  { number: "01", slug: "iqoocca-art-gallery" },
  { number: "02", slug: "sebasa-grandparent" },
  { number: "03", slug: "reungreung" },
]);
expect(getProjectBySlug("iqoocca-art-gallery")?.caseStudies).toHaveLength(8);
expect(getProjectBySlug("sebasa-grandparent")?.caseStudies).toHaveLength(5);
expect(getProjectBySlug("iqoocca-art-gallery")?.metrics).toBeUndefined();
expect(getProjectBySlug("sebasa-grandparent")?.metrics).toHaveLength(4);
```

- [ ] **Step 2: Run the data test and verify RED**

Run: `npm test -- src/data/projects.test.ts`
Expected: FAIL because the third project and category/company contracts do not exist.

- [ ] **Step 3: Add the types and split the project records**

```ts
export interface ProjectLink { title: string; href: string }
export interface Project {
  company?: string;
  category: "company" | "independent";
  // existing fields remain unchanged
}
export interface Experience {
  // existing fields remain unchanged
  projects?: ProjectLink[];
}

export function getNextProject(project: Project) {
  const index = projects.findIndex(({ slug }) => slug === project.slug);
  return projects[(index + 1) % projects.length];
}
```

Populate IQOOCCA with the eight verified E1–E8 cases from the supplied career document, populate Sebasa with the existing five E9–E13 cases and metrics, and keep reungreung unchanged except for `number` and `category`.

- [ ] **Step 4: Run the data test and verify GREEN**

Run: `npm test -- src/data/projects.test.ts`
Expected: PASS.

### Task 2: 홈 회사 그룹과 경력 프로젝트 링크

**Files:**
- Modify: `src/app/page.test.tsx`
- Modify: `src/components/sections/SelectedWork.tsx`
- Modify: `src/components/sections/Experience.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `Project.category`, `Project.company`, `Experience.projects`
- Produces: 홈의 `아이쿠카 · Frontend Developer`, `Independent Project` 그룹과 경력 프로젝트 링크

- [ ] **Step 1: Write the failing home tests**

```tsx
expect(screen.getByRole("heading", { name: "아이쿠카 · Frontend Developer" })).toBeInTheDocument();
expect(screen.getByRole("heading", { name: "Independent Project" })).toBeInTheDocument();
expect(screen.getAllByRole("link", { name: /View Project/ })).toHaveLength(3);
expect(screen.getByText("아이쿠카")).toBeInTheDocument();
expect(screen.getByRole("link", { name: "IQOOCCA Art Gallery" })).toHaveAttribute("href", "/projects/iqoocca-art-gallery");
expect(screen.getByRole("link", { name: "세바사" })).toHaveAttribute("href", "/projects/sebasa-grandparent");
```

- [ ] **Step 2: Run the home test and verify RED**

Run: `npm test -- src/app/page.test.tsx`
Expected: FAIL because grouped headings and experience links are absent.

- [ ] **Step 3: Render non-empty project groups and experience links**

```tsx
const companyProjects = projects.filter(({ category }) => category === "company");
const independentProjects = projects.filter(({ category }) => category === "independent");

{companyProjects.length > 0 ? <ProjectGroup title="아이쿠카 · Frontend Developer" projects={companyProjects} /> : null}
{independentProjects.length > 0 ? <ProjectGroup title="Independent Project" projects={independentProjects} /> : null}
```

Render `experience.projects` below the responsibility list as semantic links and add restrained group/link spacing styles, including the existing mobile breakpoint.

- [ ] **Step 4: Run the home test and verify GREEN**

Run: `npm test -- src/app/page.test.tsx`
Expected: PASS.

### Task 3: 세 상세 경로와 데이터 기반 다음 프로젝트

**Files:**
- Modify: `src/app/projects/[slug]/page.test.tsx`
- Modify: `src/components/project/ProjectDetail.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `getNextProject(project)` and the three project records
- Produces: three static routes, project-specific metadata, circular next-project navigation

- [ ] **Step 1: Write the failing route tests**

```tsx
expect(generateStaticParams()).toEqual([
  { slug: "iqoocca-art-gallery" },
  { slug: "sebasa-grandparent" },
  { slug: "reungreung" },
]);
render(await ProjectPage({ params: Promise.resolve({ slug: "iqoocca-art-gallery" }) }));
expect(screen.getAllByText("In Progress")).toHaveLength(2);
expect(screen.queryByText("53")).not.toBeInTheDocument();
render(await ProjectPage({ params: Promise.resolve({ slug: "sebasa-grandparent" }) }));
expect(screen.getByText("53")).toBeInTheDocument();
expect(screen.getByRole("link", { name: /다음 프로젝트/ })).toHaveAttribute("href", "/projects/reungreung");
```

- [ ] **Step 2: Run the route test and verify RED**

Run: `npm test -- 'src/app/projects/[slug]/page.test.tsx'`
Expected: FAIL because Sebasa has no route and navigation still uses a two-project condition.

- [ ] **Step 3: Use array-order navigation and remove obsolete phase styling**

```tsx
const nextProject = getNextProject(project);
<Link href={`/projects/${nextProject.slug}`}>다음 프로젝트 · {nextProject.title} →</Link>
```

Keep the existing `ProblemSolution` rendering so E4/E8 status badges continue to render, and remove the unused `.case-phase` rule.

- [ ] **Step 4: Run the route test and verify GREEN**

Run: `npm test -- 'src/app/projects/[slug]/page.test.tsx'`
Expected: PASS.

### Task 4: 전체 회귀 및 빌드 검증

**Files:**
- Verify: all modified files

**Interfaces:**
- Consumes: all preceding tasks
- Produces: a tested production-ready project hierarchy

- [ ] **Step 1: Run the full unit suite**

Run: `npm test`
Expected: all tests PASS with no unexpected warnings.

- [ ] **Step 2: Run static checks**

Run: `npm run lint`
Expected: exit code 0.

- [ ] **Step 3: Run the production build**

Run: `npm run build`
Expected: build succeeds and emits all three project routes.

- [ ] **Step 4: Inspect the final diff**

Run: `git diff --check && git status --short`
Expected: no whitespace errors; pre-existing unrelated changes remain preserved.
