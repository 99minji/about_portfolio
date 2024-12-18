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
      </ul>
      <p className="info">
        'Taskify'는 일정 관리와 공유 기능을 제공하는 웹 애플리케이션입니다.
        사용자는 가족, 회사 등 다양한 커뮤니티를 생성하고, 멤버를 초대하여
        일정과 할 일 목록을 함께 관리할 수 있습니다.
        <br />
        <br />
        커뮤니티 내에서 작성된 일정은 카드 형태로 다른 멤버에게 공유되며, 할 일
        목록의 생성, 게시, 수정, 삭제와 같은 CRUD 기능을 구현합니다. 또한, 멤버
        초대, 목록 분류, 검색, 댓글 작성 기능을 더해 유기적인 커뮤니티 서비스
        구축 경험을 제공합니다. TypeScript를 활용하여 프로젝트가 복잡해졌을 때도
        안정적인 코드를 유지할 수 있으며, 할 일 카드, 모달, 드래그 앤 드랍과
        같은 UI 개발을 위해 외부 라이브러리를 적극 활용하여 가독성과 사용성을
        개선할 수 있습니다.
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
              - Zustand 라이브러리를 사용하여 대시보드 관련 상태를 효율적으로
              관리했습니다. <br />
              - 전역 상태로 대시보드 목록, 초대 받은 대시보드 목록을 관리하며 각
              대시보드의 상태 변화에 따라 UI를 실시간으로 반영하도록
              구현했습니다.
              <br />- Zustand의 store를 활용하여 대시보드의 추가, 삭제 기능과
              초대받은 대시보드의 수락, 거절 기능을 전역 상태에서 직접 관리하여
              일관성과 성능을 최적화했습니다.
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
              - 좌측 대시보드 리스트에서 내가 생성한 대시보드에는 대시보드 이름
              옆에 왕관 아이콘을 표시하여 사용자가 내가 만든 대시보드를 쉽게
              구분할 수 있도록 구현하였습니다.
              <br />- 내가 만든 대시보드가 아닌 경우 '관리'와 '초대하기' 버튼에
              대한 접근 권한을 조건부로 제한하여 해당 대시보드에 대한 관리 및
              초대 기능을 사용할 수 없도록 권한을 설정하였습니다.
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
              - 대시보드 이름과 색상을 수정한 후 '변경' 버튼을 클릭하면 해당
              변경사항이 Zustand 상태 관리로 업데이트되어 대시보드 정보가 즉시
              반영되도록 구현하였습니다.
              <br />
              - 대시보드 구성원 목록에서 각 구성원 오른쪽에 있는 '삭제' 버튼을
              클릭하면 해당 구성원이 목록에서 제거되며 상태는 Zustand를 통해
              실시간으로 업데이트됩니다.
              <br />
              대시보드 구성원 목록에는 생성자 정보가 포함되어 있으며 조건부
              렌더링을 사용하여 생성자 본인일 경우 '삭제하기' 버튼이 노출되지
              않도록 구현하였습니다. 이를 통해 생성자가 실수로 자신을 삭제하는
              일이 없도록 보호하였습니다.
              <br />- 초대 내역 각 항목에 있는 '삭제하기' 버튼을 누르면 해당
              초대가 삭제되고 Zustand 상태를 통해 초대 목록에서 즉시 삭제됩니다.
              <br />
              -'초대하기' 버튼을 클릭하면 초대하기 모달이 표시되며, 이 모달은
              상태 관리 Zustand를 통해 열린 상태와 닫힌 상태를 제어합니다.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Taskify;
