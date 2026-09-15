import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/portfolio";

export function ProjectListItem({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <div className="project-copy">
        <span className="project-number">{project.number}</span>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-role">{project.role}</p>
        <ul className="tech-list" aria-label={`${project.title} 기술 스택`}>
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <Link className="project-link" href={`/projects/${project.slug}`}>
          View Project <span aria-hidden="true">→</span>
        </Link>
      </div>
      <Link className={`project-visual project-visual--${project.accent}`} href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
        <Image src={project.image.src} alt="" width={1120} height={760} sizes="(max-width: 800px) 100vw, 58vw" />
      </Link>
    </article>
  );
}
