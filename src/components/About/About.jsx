import s from "./AboutPage.module.scss";
import Career from "./Career";

export default function About() {
  return (
    <>
      <div className="inner">
        <h2 className="page-title">About .</h2>
        <div className={s.info}>
          <p>
            안녕하세요🖐️
            <br /> 웹을 통해 사람들과 소통하고{" "}
            <strong>사용자에게 뛰어난 경험을 제공</strong>하는 것을 목표로 하고
            있습니다.
            <br />
            <br />
            저는 디자인과 기술의 조화를 믿으며 매력적이고 직관적인 인터페이스를
            만드는 데 힘쓰고 있습니다.{" "}
            <strong>
              최신 웹 기술을 탐구하며 창의적인 문제 해결을 즐기고 새로운 도전
            </strong>
            에 항상 열려 있습니다.
            <br />웹 퍼블리셔의 경험을 통해 다양한 프로젝트에 참여하며{" "}
            <strong>협업의 중요성과 지속적인 학습의 가치</strong>를 깊이
            깨달았습니다. 사용자 중심의 사고를 바탕으로, 혁신적이고 효율적인 웹
            솔루션을 만들어 나가고 싶습니다.
            <br />
            <br />제 포트폴리오를 통해 제 작업을 확인해 주시기 바랍니다.
            감사합니다!
          </p>
        </div>
        <h2 className="page-title">Career .</h2>
        <Career />
      </div>
      <div className="section-wrapper">
        <h3 className="section-title">💫 My Skill Stacks</h3>
        <ul className={s.skills}>
          <li>
            <img src="/assets/icon/skills/icon-html.png" alt="html5" />
            HTML5
          </li>
          <li>
            <img src="/assets/icon/skills/icon-css.png" alt="css" />
            CSS3
          </li>
          <li>
            <img src="/assets/icon/skills/icon-js.png" alt="javascript" />
            Javascript
          </li>
          <li>
            <img src="/assets/icon/skills/icon-jquery.png" alt="jquery" />
            Jquery
          </li>
          <li>
            <img src="/assets/icon/skills/icon-react.png" alt="REACT" />
            React
          </li>
          <li>
            <img src="/assets/icon/skills/icon-nextjs.png" alt="NEXTJS" />
            Next.js
          </li>
          <li>
            <img src="/assets/icon/skills/icon-sass.png" alt="sass" />
            Sass
          </li>
        </ul>
      </div>
    </>
  );
}
