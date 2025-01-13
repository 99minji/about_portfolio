import { FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";
import { useState } from "react";
import MyModal from "../Modal/MyModal";
import useModal from "../../hooks/useModal";
import Taskify from "./Portfolio/Taskify";
import LinkbraryModal from "./Portfolio/LinkbraryModal";
import Travelmaker from "./Portfolio/Travelmaker";
import s from "./Projects.module.scss";

export default function Projects() {
  const { openModal } = useModal();

  const [activeTab, setActiveTab] = useState("All");

  // 탭 메뉴 정의
  const tabs = ["All", "Team", "Single"];

  // 각 li 항목에 연결될 데이터 정의
  const items = [
    {
      id: 1,
      src: "/assets/images/taskify.JPG",
      component: <Taskify />,
      name: "Taskify",
      info: "일정 관리와 공유 기능을 제공하는 웹 애플리케이션",
      skill: "React, Next.js, Typescript, Tailwind CSS, Zustand, Vercel",
      preview: "https://taskify-9-1.vercel.app/",
      type: "Team",
    },
    {
      id: 2,
      src: "/assets/images/linkbrary.JPG",
      component: <LinkbraryModal />,
      name: "Linkbrary",
      info: "나만의 링크를 관리하고 공유하는 서비스",
      skill: "React, Next.js, Typescript, Tailwind CSS, Zustand, Vercel",
      preview: "https://linkbrary-9-99.vercel.app/",
      type: "Team",
    },
    {
      id: 3,
      src: "/assets/images/travelmaker.JPG",
      component: <Travelmaker />,
      name: "Travelmaker",
      info: "체험을 제공하고 혹은 예약할 수 있는 플랫폼",
      skill: "React, Next.js, Typescript, Sass, Zod, Zustand, Vercel",
      preview: "https://travelmaker-ten.vercel.app/",
      type: "Team",
    },
    {
      id: 4,
      src: "/assets/images/travelmaker.JPG",
      component: <Travelmaker />,
      name: "개인 프로젝트",
      info: "체험을 제공하고 혹은 예약할 수 있는 플랫폼",
      skill: "React, Next.js, Typescript, Sass, Zod, Zustand, Vercel",
      preview: "https://travelmaker-ten.vercel.app/",
      type: "Single",
    },
  ];

  const handleClick = (component) => {
    openModal(MyModal, { component });
  };

  const filteredItems =
    activeTab === "All"
      ? items
      : items.filter((item) => item.type === activeTab);

  return (
    <>
      <div className="inner">
        <h2 className="page-title">My Portfolio .</h2>
        <div>
          <ul className={s.tabs}>
            {tabs.map((tab) => (
              <li key={tab}>
                <button
                  className={activeTab === tab ? s.active : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ul className={s.portfolioList}>
          {filteredItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.component)}
              className={s.itemBox}
            >
              <div className={s.img}>
                <img src={item.src} alt={item.name} />
              </div>
              <div className={s.info}>
                <h3>{item.name}</h3>
                <p className={s.text}>{item.info}</p>
                <h4>
                  <FaCode size={20} />
                  기술 스택
                </h4>
                <p className={s.skills}>{item.skill}</p>
                <p className={s.preview}>
                  <FaArrowUpRightFromSquare />
                  Preview:
                  <a href={item.preview} target="_blank" rel="noreferrer">
                    {item.preview}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
