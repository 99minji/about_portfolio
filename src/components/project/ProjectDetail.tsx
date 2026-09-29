import Image from "next/image";
import Link from "next/link";

import { getNextProject } from "@/data/projects";
import type { Project } from "@/types/portfolio";

import { ProblemSolution } from "./ProblemSolution";
import { ProjectScreenshotGallery } from "./ProjectScreenshotGallery";

export function ProjectDetail({ project }: { project: Project }) {
  const nextProject = getNextProject(project);

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
          {project.releaseStatus ? <div><dt>Release Status</dt><dd>{project.releaseStatus}</dd></div> : null}
          {project.aiWorkflow ? <div><dt>AI Workflow</dt><dd>{project.aiWorkflow}</dd></div> : null}
          <div><dt>Tech</dt><dd>{project.tech.join(" · ")}</dd></div>
          {project.externalLinks?.length ? (
            <div>
              <dt>Public Links</dt>
              <dd className="project-external-links">
                {project.externalLinks.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label}<span aria-hidden="true">↗</span>
                  </a>
                ))}
              </dd>
            </div>
          ) : null}
        </dl>
      </section>

      {project.company ? (
        <p className="project-disclosure shell">
          © IQOOCCA Inc. · 화면은 공개 서비스 또는 익명화된 재현 화면입니다.
        </p>
      ) : null}

      {project.metrics?.length ? (
        <section className="detail-outcomes shell" aria-labelledby="outcomes-heading">
          <h2 id="outcomes-heading">Key Outcomes</h2>
          <dl>
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {project.screenshots?.length ? <ProjectScreenshotGallery screenshots={project.screenshots} /> : null}

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
        <Link href={`/projects/${nextProject.slug}`}>
          다음 프로젝트 · {nextProject.title} →
        </Link>
      </nav>
    </main>
  );
}
