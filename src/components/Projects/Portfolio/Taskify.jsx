import React from "react";
import "./ModalContentsStyle.scss";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaRegFileLines,
  FaRegUser,
} from "react-icons/fa6";
import { SiNotion } from "react-icons/si";

const Taskify = () => {
  return (
    <div className="modal-contents">
      <h3>Taskify</h3>
      <ul className="about">
        <li>
          <FaRegFileLines />
          Project: 반응형
        </li>
        <li>
          <FaRegUser />
          Client: 코드잇 부트캠프 9기 3-1팀
        </li>
        <li>
          <FaArrowUpRightFromSquare />
          Preview:
          <a
            href="https://taskify-9-1.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            taskify-9-1.vercel.app
          </a>
        </li>
        <li>
          <FaGithub />
          Github:
          <a
            href="https://github.com/99minji/taskify.git"
            target="_blank"
            rel="noreferrer"
          >
            github.com/99minji/taskify.git
          </a>
        </li>
        <li>ㄴ TEST ID: haha@email.com/ PW: haha1234</li>
      </ul>
      <p className="info">
        - Context API 사용 시 불필요한 렌더링과 복잡한 상태 관리 문제가 발생하여
        Zustand를 도입해 전역 상태 관리를 단순화하고 필요한 컴포넌트만
        렌더링되도록 최적화하여 대시보드 성능을 개선함.
        <br />- 초기 인증 처리는 SSR(Server-Side Rendering)에서 수행하여 보안을
        강화하고, 로그인 후 자주 변경되는 대시보드 데이터는 CSR(Client-Side
        Rendering) 방식으로 가져오는 하이브리드 방식을 적용하여 보안성과 성능을
        동시에 최적화함.
      </p>

      <h4>
        <a
          href="https://blossom-gargoyle-a6a.notion.site/FE_9-_-6700b139af42485d84c4181b43c00e6a?pvs=74"
          target="_blank"
          rel="noreferrer"
        >
          <SiNotion /> 협업 과정 보러가기
        </a>
      </h4>
      <h4>🛠️ 담당 기능 개발 및 구현</h4>
      <ul className="img-wrap">
        <li>
          <strong>⚙️ 내 대시보드 페이지</strong>
          <div className="box">
            <div className="img">
              <img src="/assets/images/taskify-dashboard.jpg" alt="이미지" />
            </div>
            <div className="text">
              <p>
                Zustand 라이브러리를 사용하여 대시보드 관련 상태를 효율적으로
                관리했습니다.
              </p>
              <p>
                전역 상태로 대시보드 목록, 초대 받은 대시보드 목록을 관리하며 각
                대시보드의 상태 변화에 따라 UI를 실시간으로 반영하도록
                구현했습니다.
              </p>
              <p>
                Zustand의 store를 활용하여 대시보드의 추가, 삭제 기능과 초대받은
                대시보드의 수락, 거절 기능을 전역 상태에서 직접 관리하여
                일관성과 성능을 최적화했습니다.
              </p>
            </div>
          </div>
        </li>
        <li>
          <strong>⚙️ 대시보드 상세페이지</strong>
          <div className="box">
            <div className="img">
              <img src="/assets/images/taskify-detail.jpg" alt="이미지" />
            </div>
            <div className="text">
              <p>
                좌측 대시보드 리스트에서 내가 생성한 대시보드에는 대시보드 이름
                옆에 왕관 아이콘을 표시하여 사용자가 내가 만든 대시보드를 쉽게
                구분할 수 있도록 구현하였습니다.
              </p>
              <p>
                내가 만든 대시보드가 아닌 경우 '관리'와 '초대하기' 버튼에 대한
                접근 권한을 조건부로 제한하여 해당 대시보드에 대한 관리 및 초대
                기능을 사용할 수 없도록 권한을 설정하였습니다.
              </p>
            </div>
          </div>
        </li>
        <li>
          <strong>⚙️ 대시보드 관리페이지</strong>
          <div className="box">
            <div className="img">
              <img src="/assets/images/taskify-edit.jpg" alt="이미지" />
            </div>
            <div className="text">
              <p>
                대시보드 이름과 색상을 수정한 후 '변경' 버튼을 클릭하면 해당
                변경사항이 Zustand 상태 관리로 업데이트되어 대시보드 정보가 즉시
                반영되도록 구현하였습니다.
              </p>
              <p>
                대시보드 구성원 목록에서 각 구성원 오른쪽에 있는 '삭제' 버튼을
                클릭하면 해당 구성원이 목록에서 제거되며 상태는 Zustand를 통해
                실시간으로 업데이트됩니다.
              </p>
              <p>
                대시보드 구성원 목록에는 생성자 정보가 포함되어 있으며 조건부
                렌더링을 사용하여 생성자 본인일 경우 '삭제하기' 버튼이 노출되지
                않도록 구현하였습니다. 이를 통해 생성자가 실수로 자신을 삭제하는
                일이 없도록 보호하였습니다.
              </p>
              <p>
                초대 내역 각 항목에 있는 '삭제하기' 버튼을 누르면 해당 초대가
                삭제되고 Zustand 상태를 통해 초대 목록에서 즉시 삭제됩니다.
              </p>
              <p>
                '초대하기' 버튼을 클릭하면 초대하기 모달이 표시되며, 이 모달은
                상태 관리 Zustand를 통해 열린 상태와 닫힌 상태를 제어합니다.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Taskify;
