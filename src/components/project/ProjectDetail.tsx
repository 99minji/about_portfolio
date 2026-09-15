import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/portfolio";

import { ProblemSolution } from "./ProblemSolution";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="project-detail">
      <section className="detail-hero shell">
        <Link className="back-link" href="/#work">← Selected Work</Link>
        <div className="detail-title">
          <span>{project.number} / {project.period}</span>
          <h1>{project.title}</h1>
          <p>{project.detailDescription}</p>
        </div>
      </section>

      <div className={`detail-image detail-image--${project.accent}`}>
        <Image src={project.image.src} alt={project.image.alt} width={1600} height={980} priority sizes="100vw" />
      </div>

      <section className="detail-overview shell" aria-labelledby="overview-heading">
        <h2 id="overview-heading">Overview</h2>
        <p>{project.overview}</p>
        <dl>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Period</dt><dd>{project.period}</dd></div>
          <div><dt>Tech</dt><dd>{project.tech.join(" · ")}</dd></div>
        </dl>
      </section>

      <section className="detail-role shell" aria-labelledby="role-heading">
        <h2 id="role-heading">My Role</h2>
        <ul>
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </section>

      <section className="detail-cases shell" aria-labelledby="cases-heading">
        <h2 id="cases-heading">Problem &amp; Solution</h2>
        {project.caseStudies.map((caseStudy, index) => (
          <ProblemSolution caseStudy={caseStudy} index={index} key={caseStudy.title} />
        ))}
      </section>

      <nav className="detail-footer shell" aria-label="프로젝트 탐색">
        <Link href="/#work">모든 프로젝트 보기</Link>
        <Link href={`/projects/${project.slug === "iqoocca-art-gallery" ? "reungreung" : "iqoocca-art-gallery"}`}>
          다음 프로젝트 →
        </Link>
      </nav>
    </main>
  );
}
