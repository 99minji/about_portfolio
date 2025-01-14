import { Outlet } from "react-router-dom";
import Info from "../components/Info/Info";
import Header from "./Header";
import Menu from "../components/Menu/Menu";

const LayoutWithHeaderAndMenu = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container-wrap">
          <Info />
          <section className="content-box contents">
            <Outlet />
          </section>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default LayoutWithHeaderAndMenu;
