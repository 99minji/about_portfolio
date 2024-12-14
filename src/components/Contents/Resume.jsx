import styles from "./AboutResume.module.scss";
import { FaBriefcase, FaSchool } from "react-icons/fa6";

export default function Resume() {
  return (
    <>
      <div className="inner">
        <h2 className="page-title">Resume</h2>
        <div className={styles["info"]}>
          <p>
            안녕하세요🖐️ 저는 프론트엔드 개발에 열정을 가진 구민지입니다.
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
        <div className={styles["what-do"]}>
          <div>
            <h3 className="sub-title">
              <FaSchool />
              Education
            </h3>
            <div className={`${styles.box} ${styles.blue}`}>
              <div className={styles.text}>
                <span className={styles.year}>2024.07 - 2024.12</span>
                <h4>Codeit 부트캠프</h4>
                <p>
                  <span>HTML, CSS, JavaScript를 통한 웹 개발 기초 학습</span>
                  <span>
                    React 및 Next.js를 활용한 동적 웹 애플리케이션 개발 경험
                  </span>
                  <span>RESTful API와의 연동 및 데이터 처리</span>
                  <span>
                    팀 프로젝트를 통해 협업 능력 및 문제 해결 능력 향상
                  </span>
                  <span>최신 웹 기술 및 트렌드에 대한 이해</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="sub-title">
              <FaBriefcase />
              Experience
            </h3>
            <div className={`${styles.box} ${styles.blue}`}>
              <div className={styles.text}>
                <span className={styles.year}>2021-2023</span>
                <h4>
                  Web Publisher
                  <span>
                    in the <strong>WISA</strong> agency
                  </span>
                </h4>
                <p>
                  <span>스킨 기반 웹사이트 세팅 및 운영</span>
                  <span>사이트 오픈 후 유지보수 및 업데이트 진행 </span>
                  <span>사용자 경험 개선을 위한 피드백 수집 및 반영</span>
                  <span>판매 스킨 제작</span>
                </p>
              </div>
            </div>
            <div className={`${styles.box} ${styles.pink}`}>
              <div className={styles.text}>
                <span className={styles.year}>2024.06</span>
                <h4>
                  Web Publisher
                  <span>
                    in the <strong>WISA</strong> agency
                  </span>
                </h4>
                <p>
                  <span>내부 스킨 템플릿 제작 및 관리</span>
                  <span>회사 홈페이지 디자인 및 개발, 사용자 경험 향상</span>
                </p>
              </div>
            </div>
            <div className={`${styles.box} ${styles.blue}`}>
              <div className={styles.text}>
                <span className={styles.year}>2024.07 - 2024.12</span>
                <h4>Codeit 부트캠프</h4>
                <p>
                  <span>HTML, CSS, JavaScript를 통한 웹 개발 기초 학습</span>
                  <span>
                    React 및 Next.js를 활용한 동적 웹 애플리케이션 개발 경험
                  </span>
                  <span>RESTful API와의 연동 및 데이터 처리</span>
                  <span>
                    팀 프로젝트를 통해 협업 능력 및 문제 해결 능력 향상
                  </span>
                  <span>최신 웹 기술 및 트렌드에 대한 이해</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
