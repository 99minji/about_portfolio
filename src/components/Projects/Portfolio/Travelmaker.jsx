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
        <li>ㄴ TEST ID: test1234@email.com/ PW: test1234</li>
      </ul>
      <p className="info">
        - Next.js의 App Router에서 빌드 시 발생한 'window is not defined' 오류를
        해결하기 위해 Kakao Maps API를 클라이언트에서만 로드하도록 구현했습니다.
        <br />- 반응형 디자인에 따른 네트워크 요청이 반복적으로 발생하는 문제를
        방지하기 위해 요청을 디바운싱(debouncing)하여 불필요한 요청을 최소화하고
        성능을 개선했습니다.
        <br />- 시간과 날짜를 직관적으로 표시하여 예약하도록 FullCalendar
        라이브러리를 사용하였으며 날짜 및 시간 선택 기능을 구현하여 예약 기능의
        편의성을 높였습니다.
        <br />- 제공된 시안이 플랫폼과 맞지 않는다고 판단해 레퍼런스를
        리서치하고 간단한 레이아웃을 구성하여 팀원들의 의견을 이끌어내며 더 나은
        방향을 제안해 프로젝트 완성도를 높였습니다.
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
                속도를 개선했습니다.
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
