import React from "react";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaRegFileLines,
  FaRegUser,
} from "react-icons/fa6";
import { SiNotion } from "react-icons/si";

const LinkbraryModal = () => {
  return (
    <div className="modal-contents">
      <h3>Linkbrary</h3>
      <ul className="about">
        <li>
          <FaRegFileLines />
          Project: 반응형
        </li>
        <li>
          <FaRegUser />
          Client: 코드잇 부트캠프 9기 스터디팀
        </li>
        <li>
          <FaArrowUpRightFromSquare />
          Preview:
          <a
            href="https://linkbrary-9-99.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            linkbrary-9-99.vercel.app
          </a>
        </li>
        <li>
          <FaGithub />
          Github:
          <a
            href="https://github.com/99minji/linkbrary"
            target="_blank"
            rel="noreferrer"
          >
            github.com/99minji/linkbrary
          </a>
        </li>
        <li>ㄴ TEST ID: haha@email.com/ PW: haha1234</li>
      </ul>
      <p className="info">
        - 링크 수정 및 삭제 시 실시간 업데이트를 위해 Zustand를 사용하여 상태
        업데이트가 간편하고 빠르게 반영되도록 개발
        <br />- CSS Grid와 Flexbox 활용으로 뷰 전환 로직을 단순화하여 코드량
        감소
        <br />- 즐겨찾기 목록 페이지에서는 사용자 인증을 서버에서 검증하고 최신
        데이터를 SSR을 통해 미리 가져와 렌더링하여 초기 로딩 속도를 개선
      </p>

      <h4>
        <a
          href="https://nickel-vegetarian-de0.notion.site/Linkbrary-135f52d774a880c8ba19f7c043a4b1c0"
          target="_blank"
          rel="noreferrer"
        >
          <SiNotion /> 협업 과정 보러가기
        </a>
      </h4>
      <h4>🛠️ 담당 기능 개발 및 구현</h4>
      <ul className="img-wrap">
        <li>
          <strong>⚙️ 즐겨찾기 페이지</strong>
          <div className="box">
            <div className="img">
              <img src="/assets/gif/linkbrary-favorite.gif" alt="이미지" />
            </div>
            <div className="text">
              <p>
                링크 관리 서비스에서 즐겨찾기된 링크만을 선별하여 보여주는 전용
                페이지를 구현하였습니다.
              </p>
              <p>
                다양한 디바이스에서도 최적의 사용자 경험을 제공하기 위해 반응형
                디자인을 적용했습니다. 모바일 환경에서는 간결한 카드형 뷰를,
                데스크톱 환경에서는 시각적 정보를 강조한 리스트형 뷰를
                구현했습니다.
              </p>
            </div>
          </div>
        </li>
        <li>
          <strong>⚙️ 마이링크 페이지</strong>
          <div className="box">
            <div className="img">
              <img src="/assets/gif/mylink.gif" alt="이미지" />
            </div>
            <div className="text">
              <p>
                추가한 링크카드에 '즐겨찾기' 버튼을 추가하여 즐겨찾기한 링크를
                따로 관리할 수 있도록 작업하였습니다.
              </p>
              <p>
                케밥 버튼에 '수정하기' , '삭제하기' 기능을 추가하여 링크를
                수정하고 삭제할 수 있도록 구현하였습니다.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LinkbraryModal;
