import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section className="experience-section shell" id="experience">
      <Reveal>
        <SectionHeading title="Experience" />
      </Reveal>
      {experiences.map((experience) => (
        <Reveal className="experience-row" key={`${experience.company}-${experience.period}`}>
          <p className="experience-period">{experience.period}</p>
          <div>
            <h3>{experience.role}</h3>
            <p className="experience-company">{experience.company}</p>
            <p className="experience-description">{experience.description}</p>
          </div>
          <div className="experience-details">
            <ul>
              {experience.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {experience.projects?.length ? (
              <nav className="experience-projects" aria-label={`${experience.company} 프로젝트`}>
                {experience.projects.map((project) => (
                  <Link href={project.href} key={project.href}>{project.title}<span aria-hidden="true">→</span></Link>
                ))}
              </nav>
            ) : null}
          </div>
        </Reveal>
      ))}
    </section>
  );
}
import Link from "next/link";
