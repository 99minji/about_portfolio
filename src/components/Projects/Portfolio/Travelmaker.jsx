import "./ModalContentsStyle.scss";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaRegFileLines,
  FaRegUser,
} from "react-icons/fa6";
import { SiNotion } from "react-icons/si";

const Travelmaker = () => {
  return (
    <div className="modal-contents">
      <h3>Travelmaker</h3>
      <ul className="about">
        <li>
          <FaRegFileLines />
          Project: 반응형
        </li>
        <li>
          <FaRegUser />
          Client: 코드잇 부트캠프 9기 4-4팀
        </li>
        <li>
          <FaGithub />
          Github:
          <a
            href="https://github.com/JaeGuipi/travelmaker.git"
            target="_blank"
            rel="noreferrer"
          >
            github.com/JaeGuipi/travelmaker.git
          </a>
        </li>
        <li>
          <FaArrowUpRightFromSquare />
          Preview:
          <a
            href="https://travelmaker-ten.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            travelmaker-ten.vercel.app
          </a>
        </li>
      </ul>
      <p className="info">
        사용자가 판매자와 체험자 모두 될 수 있는 플랫폼으로 판매자가 되어 체험을
        만들수 있고, 체험자가 되어 체험을 예약할 수 있습니다. 캘린더 뷰 SDK와
        지도 뷰 SDK를 활용해 예약 가능한 날짜를 설정하고, 체험 상품을 예약하는
        플랫폼입니다. 검색을 통해 원하는 체험을 찾고, 상세 정보를 볼 수
        있습니다.
      </p>

      <h4>
        <a
          href="https://www.notion.so/FE_9-_-142d6d6479a88050b308ec0292c235df?pvs=4"
          target="_blank"
          rel="noreferrer"
        >
          <SiNotion /> 협업 과정 보러가기
        </a>
      </h4>
      <h4>🛠️ 담당 기능 개발 및 구현</h4>
      <ul className="img-wrap">
        <li>
          <strong>⚙️ 메인 페이지</strong>
          <div className="box">
            <div className="img">
              <img src="/assets/gif/travelmaker-main.gif" alt="이미지" />
            </div>
            <div className="text">
              <p>
                메인페이지의 "더보기" 버튼으로 상품 데이터 동적 로딩
                구현했습니다.
              </p>
              <p>
                상품 관련한 코드 중복을 줄이고 스타일 관리 효율성을 높이기 위한
                CSS 리팩토링을 진행했습니다.
              </p>
            </div>
          </div>
        </li>
        <li>
          <strong>⚙️ 체험 상세 페이지</strong>
          <div className="box">
            <div className="img">
              <img src="/assets/gif/travelmaker-detail.gif" alt="이미지" />
            </div>
            <div className="text">
              <p>
                체험 상세 페이지의 카카오 지도 API를 서버사이드 렌더링에서
                제외하고 클라이언트에서만 로드하도록 구현하여 초기 페이지 렌더링
                속도 40% 향상했습니다.
              </p>
              <p>
                React 컴포넌트 리팩토링을 통해 코드의 가독성과 유지보수성을
                개선했습니다.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Travelmaker;
