import type { ProjectCaseStudy } from "@/types/portfolio";

export function ProblemSolution({ caseStudy, index }: { caseStudy: ProjectCaseStudy; index: number }) {
  return (
    <article className="case-study">
      <header>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <h3>{caseStudy.title}</h3>
      </header>
      <div className="case-copy">
        <div>
          <h4>Problem</h4>
          <p>{caseStudy.problem}</p>
        </div>
        <div>
          <h4>Solution</h4>
          <p>{caseStudy.solution}</p>
        </div>
      </div>
      <div className="flow-diagram" aria-label={`${caseStudy.title} 구조`}>
        {caseStudy.flow.map((step, stepIndex) => (
          <div key={step}>
            <span>{step}</span>
            {stepIndex < caseStudy.flow.length - 1 ? <b aria-hidden="true">↓</b> : null}
          </div>
        ))}
      </div>
    </article>
  );
}
