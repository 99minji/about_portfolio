import React from "react";
import "./ModalContentsStyle.scss";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaRegFileLines,
  FaRegUser,
} from "react-icons/fa6";

const Taskify = () => {
  return (
    <div className="modal-contents">
      <h3>Taskify</h3>
      <ul className="about">
        <li>
          <FaRegFileLines />
          Project{" "}
        </li>
        <li>
          <FaRegUser />
          Client{" "}
        </li>
        <li>
          <FaGithub />
          Github{" "}
        </li>
        <li>
          <FaArrowUpRightFromSquare />
          Preview{" "}
        </li>
      </ul>
      <p className="info">
        'Taskify'는 일정 관리와 공유 기능을 제공하는 웹 애플리케이션입니다.
        사용자는 가족, 회사 등 다양한 커뮤니티를 생성하고, 멤버를 초대하여
        일정과 할 일 목록을 함께 관리할 수 있습니다. 커뮤니티 내에서 작성된
        일정은 카드 형태로 다른 멤버에게 공유되며, 할 일 목록의 생성, 게시,
        수정, 삭제와 같은 CRUD 기능을 구현합니다. 멤버 초대, 목록 분류, 검색,
        댓글 작성 기능을 더해 유기적인 커뮤니티 서비스 구축 경험을 제공합니다.
      </p>
      <div className="img"></div>
    </div>
  );
};

export default Taskify;
