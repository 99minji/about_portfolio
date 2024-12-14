import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./components/Info/Info";
import About from "./components/Contents/About";
import Menu from "./components/Menu/Menu";
import Resume from "./components/Contents/Resume";
import "./styles/reset.scss";
import Header from "./layout/Header";

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
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </section>
          <Menu />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
