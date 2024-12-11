import styles from "./AboutResume.module.scss";
import iconHtml from "../../assets/icon/skills/icon-html.png";
import iconCSS from "../../assets/icon/skills/icon-css.png";
import iconJs from "../../assets/icon/skills/icon-js.png";
import iconJquery from "../../assets/icon/skills/icon-jquery.png";
import iconReact from "../../assets/icon/skills/icon-react.png";
import iconNext from "../../assets/icon/skills/icon-nextjs.png";
import iconSass from "../../assets/icon/skills/icon-sass.png";
import Portfolio from "./Portfolio";

export default function About() {
  return (
    <>
      <div className="inner">
        <h2 className="page-title">About</h2>
        <div className={styles["info"]}>
          <p>
            현재 사이트는 React / Sass / module.css 등을 사용하여
            제작되었습니다.
            <br />
            궁금한 점이나 관심이 있으시면 ✉️
            <a className={styles.link} href="mailto:rnalswl96@naver.com">
              rnalswl96@naver.com
            </a>
            으로 언제든지 연락주세요.
            <br />
            함께 성장할 기회를 기다립니다!
            <br />
            <br />
            포트폴리오를 통해 제 작업을 확인해 주셔서 감사합니다 😊
          </p>
        </div>
        <h2 className="page-title">My Portfolio</h2>
        <Portfolio />
      </div>
      <div className="section-wrapper">
        <h3 className="section-title">💫 My Skill Stacks</h3>
        <ul className={styles.skills}>
          <li>
            <img src={iconHtml} alt="html5" />
            HTML5
          </li>
          <li>
            <img src={iconCSS} alt="css" />
            CSS3
          </li>
          <li>
            <img src={iconJs} alt="javascript" />
            Javascript
          </li>
          <li>
            <img src={iconJquery} alt="jquery" />
            Jquery
          </li>
          <li>
            <img src={iconReact} alt="REACT" />
            React
          </li>
          <li>
            <img src={iconNext} alt="NEXTJS" />
            Next.js
          </li>
          <li>
            <img src={iconSass} alt="sass" />
            Sass
          </li>
        </ul>
      </div>
    </>
  );
}
