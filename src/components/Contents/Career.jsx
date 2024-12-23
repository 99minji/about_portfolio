import s from "./Contents.module.scss";
import { FaBriefcase, FaSchool } from "react-icons/fa6";

export default function Career() {
  return (
    <div className={s["what-do"]}>
      <div>
        <h3 className="sub-title">
          <FaSchool />
          Education
        </h3>
        <div className={s.box}>
          <div className={s.text}>
            <span className={s.year}>2024.07 - 2024.12</span>
            <h4>Codeit 부트캠프</h4>
            <p>
              <span>HTML, CSS, JavaScript를 통한 웹 개발 기초 학습</span>
              <span>
                React 및 Next.js를 활용한 동적 웹 애플리케이션 개발 경험
              </span>
              <span>RESTful API와의 연동 및 데이터 처리</span>
              <span>팀 프로젝트를 통해 협업 능력 및 문제 해결 능력 향상</span>
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
        <div className={s.box}>
          <div className={s.text}>
            <span className={s.year}>2021 - 2023</span>
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
        <div className={s.box}>
          <div className={s.text}>
            <span className={s.year}>2024.01 - 2024.06</span>
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
      </div>
    </div>
  );
}
