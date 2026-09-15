# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the CRA/CRACO portfolio with a responsive Next.js portfolio containing the two explicitly supplied selected works and no fabricated placeholder project.

**Architecture:** Next.js App Router server components render a data-driven home page and statically generated project detail pages. Tailwind CSS handles layout and styling, while a minimal client-side reveal component provides optional progressive motion.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Vitest, Testing Library

**Spec:** `docs/superpowers/specs/2026-09-15-portfolio-redesign-design.md`

## Global Constraints

- Remove CRACO and Create React App.
- Use Next.js App Router, TypeScript, and Tailwind CSS.
- Render only IQOOCCA Art Gallery and 릉릉 as selected projects and project detail routes.
- Do not render a third project, “Coming Soon” row, or placeholder project.
- Softzion Experience contains no project names.
- Never render `WeSeed CRM`, `롯데글로벌로지스 CRM`, or `B2B 서비스와 CRM 제품`.
- Use server components by default and keep client components minimal.
- Support 1440px desktop, 768–1024px tablet, and 375px mobile layouts.
- Meet the accessibility, metadata, reduced-motion, and content-readability requirements in the spec.

---

### Task 1: Replace CRA/CRACO with the Next.js toolchain

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `tsconfig.json`
- Create: `next-env.d.ts`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Delete: `craco.config.js`

**Interfaces:**
- Produces: `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`, and `npm test` scripts.

- [ ] Replace CRA, CRACO, Sass, and obsolete runtime dependencies with Next.js, Tailwind, TypeScript, ESLint, Vitest, jsdom, and Testing Library dependencies.
- [ ] Install dependencies and regenerate the lockfile.
- [ ] Add Next.js, PostCSS, TypeScript, and Vitest configuration.
- [ ] Run `npm test -- --run` and confirm the test runner starts successfully with no test files.

### Task 2: Define portfolio types and content data

**Files:**
- Create: `src/types/portfolio.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/experience.ts`
- Create: `src/data/projects.test.ts`
- Create: `src/data/experience.test.ts`

**Interfaces:**
- Produces: `Project`, `ProjectCaseStudy`, and `Experience` interfaces; `projects`, `getProjectBySlug`, and `experiences` exports.

- [ ] Write tests asserting exactly two sequentially numbered projects (`01`, `02`) with slugs `iqoocca-art-gallery` and `reungreung`.
- [ ] Write tests asserting Softzion has no project list and that forbidden CRM strings do not occur in serialized content.
- [ ] Run `npm test -- --run src/data` and verify the tests fail because data modules do not exist.
- [ ] Implement typed project and experience data, including overview, role, tech, highlights, and problem/solution cases.
- [ ] Run `npm test -- --run src/data` and verify all data tests pass.

### Task 3: Build the application shell and home sections

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/common/SectionHeading.tsx`
- Create: `src/components/common/Reveal.tsx`
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/SelectedWork.tsx`
- Create: `src/components/sections/Experience.tsx`
- Create: `src/components/sections/About.tsx`
- Create: `src/components/sections/Contact.tsx`
- Create: `src/components/project/ProjectListItem.tsx`
- Create: `src/app/page.test.tsx`

**Interfaces:**
- Consumes: `projects` and `experiences` data.
- Produces: semantic home-page sections with IDs `work`, `experience`, `about`, and `contact`.

- [ ] Write a page test for navigation labels, hero copy, section headings, both project titles, exactly two project links, and absence of forbidden CRM strings or placeholder-project copy.
- [ ] Run the page test and verify it fails because the App Router page does not exist.
- [ ] Implement the root layout metadata, sticky header, home sections, project rows, skills, contact, and footer.
- [ ] Implement restrained CSS motion and a reduced-motion override without adding a large animation dependency.
- [ ] Run the page test and verify it passes.

### Task 4: Build shared project detail routes

**Files:**
- Create: `src/app/projects/[slug]/page.tsx`
- Create: `src/app/projects/[slug]/page.test.tsx`
- Create: `src/components/project/ProjectDetail.tsx`
- Create: `src/components/project/ProblemSolution.tsx`

**Interfaces:**
- Consumes: `projects` and `getProjectBySlug(slug: string)`.
- Produces: statically generated `/projects/[slug]` pages and `notFound()` behavior for unknown slugs.

- [ ] Write tests covering static params, known project rendering, metadata, and an unknown slug.
- [ ] Run the route tests and verify they fail because the route module does not exist.
- [ ] Implement the shared detail template, metadata generation, static params, and `notFound()` branch.
- [ ] Run the route tests and verify they pass.

### Task 5: Add temporary project artwork and responsive polish

**Files:**
- Create: `public/images/projects/iqoocca-art-gallery.webp`
- Create: `public/images/projects/reungreung.webp`
- Modify: `src/data/projects.ts`
- Modify: `src/app/globals.css`

**Interfaces:**
- Produces: stable-aspect-ratio artwork referenced by every project record.

- [ ] Generate restrained editorial presentation artwork for each project without fabricating product claims.
- [ ] Copy the selected generated files into `public/images/projects/` and add descriptive alt text to project data.
- [ ] Tune 1440px, tablet, and 375px layout rules for typography, spacing, navigation, stacking, title wrapping, and overflow.
- [ ] Run the data and page tests and verify they remain green.

### Task 6: Remove the legacy application and verify the migration

**Files:**
- Delete: legacy CRA entry, layout, component, Sass, and HTML files under `src/` and `public/index.html`
- Modify: `README.md`

**Interfaces:**
- Produces: a single Next.js application with no legacy CRACO runtime path.

- [ ] Remove legacy files only after their Next.js replacements pass tests.
- [ ] Update the README with Next.js development, test, lint, type-check, and build commands.
- [ ] Run `rg -n 'WeSeed CRM|롯데글로벌로지스 CRM|B2B 서비스와 CRM 제품|@craco|craco' src package.json README.md` and require no matches.
- [ ] Run `npm test -- --run`, `npm run typecheck`, `npm run lint`, and `npm run build` and require successful exits.
- [ ] Start the production app and inspect 1440px, tablet, and 375px views in the browser.
- [ ] Verify sticky navigation, smooth scrolling, project links, unknown routes, keyboard focus, reduced motion, image loading, and no horizontal overflow.
- [ ] Compare implementation screenshots with the approved visual direction and record a fidelity ledger covering copy, layout, typography, palette, assets, spacing, responsive behavior, and motion.
