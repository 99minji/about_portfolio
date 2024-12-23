import {
  FaAddressBook,
  FaBars,
  FaBloggerB,
  FaRegFolder,
  FaRegUser,
  FaXmark,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";

const menuItems = [
  { path: "/", label: "About", icon: <FaRegUser /> },
  { path: "/projects", label: "Projects", icon: <FaRegFolder /> },
  { path: "/blog", label: "Blogs", icon: <FaBloggerB /> },
  { path: "/contact", label: "Contact", icon: <FaAddressBook /> },
];

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const togglemenu = () => {
    setIsOpen((prev) => !prev);
  };

  // 메뉴 이외의 영역 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className={s.header}>
        <div className={s.headerWrap}>
          <div className={s.buttonWrap}>
            <button type="button">md</button>
            <button
              type="button"
              ref={menuRef}
              onClick={togglemenu}
              className={`${s.btnMenu} ${isOpen ? s.open : ""}`}
            >
              {isOpen ? <FaXmark size="20" /> : <FaBars size="20" />}
            </button>
          </div>
          <ul ref={menuRef} className={`${s.menuList} ${isOpen ? s.open : ""}`}>
            {menuItems.map(({ path, icon, label }) => (
              <li
                key={path}
                className={location.pathname === path ? s.active : ""}
              >
                <Link to={path}>
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
