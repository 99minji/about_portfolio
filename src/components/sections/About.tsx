import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const skillGroups = [
  { label: "Frontend", values: ["React", "TypeScript", "JavaScript", "React Native", "Expo"] },
  { label: "State / Data", values: ["React Query", "Zustand"] },
  { label: "UI", values: ["HTML", "CSS", "SCSS", "Tailwind CSS", "Responsive UI"] },
  { label: "Tools", values: ["Git", "GitHub", "Figma"] },
] as const;

export function About() {
  return (
    <section className="about-section shell" id="about">
      <Reveal>
        <SectionHeading title="About" />
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-copy">
          <p>사용자가 직접 마주하는 화면을 만드는 것에 관심이 많습니다.</p>
          <p>
            단순히 화면을 구현하는 데서 그치지 않고, UI가 어떤 데이터와 연결되고 어떤 상태를 가져야 하는지 함께 고민하며 개발합니다.
          </p>
          <p>
            React와 React Native를 중심으로 웹과 모바일 서비스를 개발하고 있으며, 실제 서비스에서 발생하는 문제를 하나씩 해결하며 프론트엔드 개발 경험을 넓혀가고 있습니다.
          </p>
          <p>작은 기능이라도 왜 이렇게 구현했는지 설명할 수 있는 개발자가 되는 것을 중요하게 생각합니다.</p>
        </Reveal>
        <Reveal className="skills" aria-label="기술 스택">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.values.join(" · ")}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
