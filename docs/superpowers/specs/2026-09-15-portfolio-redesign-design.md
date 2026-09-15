# Portfolio Redesign Design

## Objective

Replace the current Create React App portfolio with a content-first Next.js portfolio that presents Guminji as a frontend developer with strong UI implementation experience and real product-development experience.

## Scope

- Migrate from Create React App and CRACO to Next.js App Router, React, TypeScript, and Tailwind CSS.
- Build a responsive one-page portfolio with project detail routes.
- Keep only the two projects explicitly supplied by the user: IQOOCCA Art Gallery and 릉릉.
- Remove all WeSeed CRM content.
- Remove 롯데글로벌로지스 CRM from Experience.
- Replace the Softzion description containing “B2B 서비스와 CRM 제품” with a non-CRM description focused on React UI and service development.
- Do not show any project names under the Softzion Experience entry.
- Use temporary editorial project artwork until real screenshots are supplied.

## Information Architecture

The home page contains a sticky navigation, Hero, Selected Work, Experience, About and Skills, and Contact. Navigation links scroll to the matching section. Each project links to `/projects/[slug]`, where a shared template renders project-specific overview, role, metadata, highlights, and two or three problem-and-solution cases.

The Selected Work section contains two large editorial rows rather than a card grid. Desktop rows use a two-column text/image composition; mobile stacks content into one column. Project numbering is continuous from 01 to 02. Each project receives generous vertical space so the section feels intentional rather than sparse, and no placeholder or fabricated third project is rendered.

## Visual Direction

- Warm-white `#F7F7F5` background, near-black primary text, muted gray secondary text, and one restrained accent color.
- Editorial/product-portfolio styling with large typography, generous whitespace, thin dividers, and minimal corner rounding.
- Maximum content width of approximately 1280px.
- Hero height of approximately 85–90vh, with 64–72px desktop type and 36–42px mobile type.
- Temporary project artwork uses simple, clearly labeled presentation mockups and must not imply fabricated product functionality.
- Animation is limited to hero fade-up, restrained scroll reveal, subtle project-image scale, arrow movement, and smooth scrolling.
- `prefers-reduced-motion` disables non-essential motion.

## Architecture and Components

The app uses server components by default. Client components are introduced only where browser-side observation or interaction is required, such as scroll reveal.

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    projects/[slug]/page.tsx
  components/
    common/
    layout/
    project/
    sections/
  data/
    experience.ts
    projects.ts
  types/
    portfolio.ts
public/
  images/projects/
```

`projects.ts` is the single source of truth for both home-page project rows and detail pages. `experience.ts` owns timeline content. Shared TypeScript interfaces prevent the list and detail views from drifting.

## Content Rules

- Hero copy, About copy, Skills categories, Contact copy, and navigation labels follow the supplied Korean brief.
- Render only IQOOCCA Art Gallery and 릉릉 in Selected Work and project detail routes.
- Do not render a “Coming Soon” or placeholder project.
- Do not render `WeSeed CRM` anywhere.
- Do not render `롯데글로벌로지스 CRM` anywhere.
- Do not render the phrase `B2B 서비스와 CRM 제품` anywhere.
- The Softzion Experience entry has no project list.
- Softzion description will read: “B2B 서비스를 중심으로 React 기반 UI 개발과 신규 서비스 구축을 담당하고 있습니다.”
- Do not show skill percentages, star ratings, or excessive technology icons.

## Responsive Behavior

- Desktop QA target: 1440px.
- Tablet QA range: 768–1024px.
- Mobile QA target: 375px.
- At mobile width, reduce hero type, stack project rows, prevent media overflow, support long-title wrapping, simplify navigation, and retain at least 16px horizontal padding.

## Accessibility and SEO

- Use semantic landmarks, headings, links, and buttons.
- Provide descriptive image alt text and visible keyboard focus states.
- Maintain sufficient color contrast and keyboard-accessible navigation.
- Configure Next.js metadata, Open Graph basics, and descriptive page titles.
- Use `next/image` for project media.

## Error Handling

- Generate known project routes statically.
- Return Next.js `notFound()` for unknown project slugs.
- Keep project media dimensions stable to avoid layout shift.

## Verification

- Add automated tests for project data, forbidden CRM content, home-page section structure, and project-route rendering.
- Run type checking, linting, tests, and a production build.
- Inspect the rendered site at 1440px, tablet width, and 375px.
- Verify navigation scrolling, project links, unknown-project handling, keyboard focus, reduced motion, and media overflow.
- Search the built source and rendered copy for the three forbidden CRM strings.

## Out of Scope

- Deployment and domain configuration.
- Resume, email, or GitHub destinations not provided by the user; links may remain clearly marked placeholders.
- Real project screenshots or confidential product assets.
- Three.js, WebGL, custom cursors, particle effects, or elaborate transitions.
