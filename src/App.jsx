import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Info from "./components/Info/Info";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Menu from "./components/Menu/Menu";
import "./styles/reset.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="container-wrap">
          <Info />
          <section className="content-box contents">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </section>
          <Menu />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
