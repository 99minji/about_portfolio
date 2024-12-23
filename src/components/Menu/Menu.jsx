import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.scss";
import {
  FaAddressBook,
  FaBloggerB,
  FaRegFolder,
  FaRegUser,
} from "react-icons/fa6";

const menuItems = [
  { path: "/", label: "About", icon: <FaRegUser /> },
  { path: "/projects", label: "Projects", icon: <FaRegFolder /> },
  { path: "/blog", label: "Blogs", icon: <FaBloggerB /> },
  { path: "/contact", label: "Contact", icon: <FaAddressBook /> },
];

export default function Menus() {
  const location = useLocation();

  return (
    <>
      <section className="content-box menu">
        <nav className={styles.navigation}>
          <ul className={styles.category}>
            {menuItems.map(({ path, icon, label }) => (
              <li
                key={path}
                className={location.pathname === path ? styles.active : ""}
              >
                <Link to={path}>
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}
