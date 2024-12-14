import MyModal from "../Modal/MyModal";
import useModal from "../../hooks/useModal";
import Taskify from "./components/Taskify";
import s from "./Portfolio.module.scss";

export default function Portfolio() {
  const { openModal } = useModal();

  // 각 li 항목에 연결될 데이터 정의
  const items = [
    {
      id: 1,
      src: "/assets/images/taskify.JPG",
      component: <Taskify />,
      name: "Taskify [협업 프로젝트]",
      info: "일정 관리와 공유 기능을 제공하는 웹 애플리케이션",
    },
    {
      id: 2,
      component: <div>두번째</div>,
      name: "Another Component",
      info: "안녕하세요",
    },
    { id: 3, component: <div>Third Component</div>, name: "Third Component" },
    { id: 4, component: <div>Fourth Component</div>, name: "Fourth Component" },
  ];

  const handleClick = (component) => {
    openModal(MyModal, { component });
  };

  return (
    <ul className={s.portfolioList}>
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => handleClick(item.component)}
          className={s.itemBox}
        >
          <div className={s.img}>
            <img src={item.src} alt={item.name} />
          </div>
          <div>
            <h3>{item.name}</h3>
            <p className={s.info}>{item.info}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
