import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Thanksyou from "./components/Thanksyou";
import NotFound from "./NotFound";
import LayoutWithHeaderAndMenu from "./layout/LayoutWithHeaderAndMenu";
import "./styles/reset.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <div className="not-found-container">
              <NotFound />
            </div>
          }
        />

        <Route path="/" element={<LayoutWithHeaderAndMenu />}>
          <Route index element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Thanksyou" element={<Thanksyou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
