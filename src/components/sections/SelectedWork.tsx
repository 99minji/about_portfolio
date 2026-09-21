import { ProjectListItem } from "@/components/project/ProjectListItem";
import { projects } from "@/data/projects";
import type { Project } from "@/types/portfolio";

import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

function ProjectGroup({ title, projects }: { title: string; projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="project-group" aria-labelledby={`project-group-${projects[0].category}`}>
      <Reveal>
        <div className="project-group-heading">
          <p>Work Context</p>
          <h3 id={`project-group-${projects[0].category}`}>{title}</h3>
          {projects[0].category === "company" ? (
            <span>회사에서 수행한 프로젝트</span>
          ) : (
            <span>기획부터 구현까지 A-Z를 직접 경험한 프로젝트</span>
          )}
        </div>
      </Reveal>
      <div className="project-list">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <ProjectListItem project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function SelectedWork() {
  const companyProjects = projects.filter(({ category }) => category === "company");
  const independentProjects = projects.filter(({ category }) => category === "independent");

  return (
    <section className="work-section shell" id="work">
      <Reveal>
        <SectionHeading title="Selected Work" description="사용자의 흐름과 서비스의 구조를 고민하며 만든 프로젝트입니다." />
      </Reveal>
      <div className="project-groups">
        <ProjectGroup title="아이쿠카 · Frontend Developer" projects={companyProjects} />
        <ProjectGroup title="Competition Project" projects={independentProjects} />
      </div>
    </section>
  );
}
