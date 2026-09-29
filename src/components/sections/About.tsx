import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const skillGroups = [
  { label: "Frontend", values: ["React", "TypeScript", "JavaScript", "React Native", "Expo"] },
  { label: "State / Data", values: ["React Query", "Zustand"] },
  { label: "UI", values: ["HTML", "CSS", "SCSS", "Tailwind CSS", "Responsive UI"] },
  {
    label: "AI-assisted Development",
    values: ["Claude Code", "명세 기반 구현", "테스트 작성", "코드 검증", "배포 검증"],
  },
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
          <p>좋은 사용자 경험은 화면과 데이터의 흐름이 자연스럽게 연결될 때 만들어진다고 생각합니다.</p>
          <p>
            단순히 UI를 구현하는 데서 그치지 않고, 화면이 어떤 데이터와 연결되고 상태에 따라 어떻게 달라져야 하는지 고민하며 기능을 구현합니다.
          </p>
          <p>
            React와 React Native를 중심으로 웹과 모바일 서비스를 개발하며, 실제 서비스에서 마주하는 요구사항과 문제를 해결하는 과정에서 더 나은 구조와 사용자 흐름을 만들어가고 있습니다.
          </p>
          <p>
            Claude Code를 구현 보조 도구로 활용하되, 명세와 완료 기준을 먼저 정리하고 테스트·타입 검사·실기기 확인으로 산출물을 직접 검증합니다.
          </p>
          <p>작은 기능 하나라도 왜 이런 구조와 방식으로 구현했는지 설명할 수 있는 개발자가 되는 것을 중요하게 생각합니다.</p>
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
