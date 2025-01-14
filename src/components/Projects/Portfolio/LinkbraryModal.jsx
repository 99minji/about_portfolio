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
      </ul>
      <p className="info">
        'Linkbrary'는 저장하고 싶은 링크를 효율적으로 관리하고, 공유 및 즐겨찾기
        기능을 통해 편리한 디지털 라이프를 제공하는 서비스입니다. <br />
        링크 추가 및 폴더 관리 사용자가 저장하고 싶은 링크를 손쉽게 추가할 수
        있으며 이를 체계적으로 관리할 수 있도록 폴더 기능을 제공합니다. 폴더를
        활용하면 링크를 주제별로 분류하거나 필요에 따라 링크를 정리하는 데
        유용합니다. <br />
        저장된 링크가 포함된 폴더를 친구와 공유할 수 있는 기능을 지원합니다.
        이를 통해 링크를 함께 보거나 공유하는 데 유용하게 사용할 수 있습니다.
        <br />
        자주 방문하거나 특별히 중요한 링크를 모아둘 수 있는 즐겨찾기 기능이
        포함되어 있습니다. 즐겨찾기한 링크는 빠르게 접근할 수 있도록 별도의
        섹션에서 관리됩니다.
        <br />
        <br />
        서비스의 주요 목표는 사용자가 중요하거나 흥미로운 링크를 잃지 않고
        필요한 순간에 쉽게 찾을 수 있도록 돕는 것입니다. 또한, 폴더 공유 및
        즐겨찾기와 같은 기능은 사용자 간의 연결성과 사용성을 더욱 높이는 데
        기여합니다.
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
