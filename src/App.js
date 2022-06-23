/* eslint-disable */
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import BrowserNotice from "./components/notice";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Journal from "./pages/journal/Journal";
import Contact from "./pages/contact/Contact";
import Error404 from "./pages/Error404";
import Footer from "./components/footer/Footer";
// import Writing from "./pages/journal/Writing"; //추후 개발
import Reading from "./pages/journal/Reading";
import Ebook from "./pages/journal/Ebook";
import Illust from "./pages/journal/Illust";
import postData from "./datajs/postData";

function App() {
  let [loca, setLoca] = useState(false);
  let [post] = useState(postData);
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    function setLayout() {
      let menuCont = document.querySelector(".header .menu");
      if (matchMedia("all and (max-width: 767px)").matches) {
        menuCont.classList.add("hidden");
      } else {
        menuCont?.classList?.remove("hidden");
      }
    }
    window.addEventListener("resize", setLayout);
    window.addEventListener("load", setLayout);
  });

  return (
    <div className="App">
      <Header />
      <div className="container-wrap">
        <div className="container">
          {/* {clear === true ? <BrowserNotice /> : null} */}
          {/* <BrowserNotice /> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/journal"
              element={<Journal navigate={navigate} post={post} />}
            >
              {/* <Route
                path="published/write"
                element={<Writing navigate={navigate} />}
              /> */}
              <Route path="ebook" element={<Ebook />} />
              <Route path="illust" element={<Illust />} />
            </Route>
            <Route
              path="/journal/:id"
              element={<Reading navigate={navigate} post={post} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        {
          // 메인 페이지만 푸터 숨김
          location.pathname == "/" ? null : <Footer />
        }
      </div>
    </div>
  );
}

export default App;
