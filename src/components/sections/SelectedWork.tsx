import { ProjectListItem } from "@/components/project/ProjectListItem";
import { projects } from "@/data/projects";

import { Reveal } from "../common/Reveal";
import { SectionHeading } from "../common/SectionHeading";

export function SelectedWork() {
  return (
    <section className="work-section shell" id="work">
      <Reveal>
        <SectionHeading title="Selected Work" description="제가 직접 고민하고 만든 작업들입니다." />
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
