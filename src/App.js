/* eslint-disable */
import "./App.css";
import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
// import BrowserNotice from "./components/notice"; //추후 개발
import Main from "./pages/main/Main";
import Footer from "./components/footer/Footer";
import postData from "./datajs/postData";
import Spinner from "./components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import Error404 from "./pages/Error404";
import { transBoolean } from "./store";
const About = lazy(() => import("./pages/about/About"));
const Projects = lazy(() => import("./pages/projects/Projects"));
const Journal = lazy(() => import("./pages/journal/Journal"));
const Contact = lazy(() => import("./pages/contact/Contact"));
// import Writing from "./pages/journal/Writing"; //추후 개발
const Reading = lazy(() => import("./pages/journal/Reading"));
const Ebook = lazy(() => import("./pages/journal/Ebook"));
const Illust = lazy(() => import("./pages/journal/Illust"));

function App() {
  let loadCheck = () => {
    let mobileHeader = document.querySelector(".header .menu");
    if (window.innerWidth < 767) {
      mobileHeader.classList.add("hidden");
    } else {
      mobileHeader.classList.remove("hidden");
    }
    if (matchMedia("all and (max-width: 767px)").matches) {
      mobileHeader.classList.add("hidden");
    } else {
      mobileHeader.classList.remove("hidden");
    }
  };
  let [loca, setLoca] = useState(false);
  let [post] = useState(postData);
  let navigate = useNavigate();
  let location = useLocation();
  let dispatch = useDispatch();

  let [prepare, setPrepare] = useState(false);
  useEffect(() => {
    setPrepare(true);
    let preSpinner = setTimeout(() => {
      setPrepare(false);
    }, 2500);
    // return () => {
    //   clearTimeout(preSpinner);
    // };
  }, []);
  useEffect(() => {
    function setLayout() {
      let menuCont = document.querySelector(".header .menu");
      if (matchMedia("all and (max-width: 767px)").matches) {
        menuCont.classList.add("hidden");
      } else {
        menuCont.classList.remove("hidden");
      }
      if (window.innerWidth < "767") {
        menuCont.classList.add("hidden");
      } else {
        menuCont.classList.remove("hidden");
      }
    }
    window.addEventListener("resize", setLayout);
  }, []);
  let tf = useSelector((state) => {
    return state.trueFalse;
  });

  return (
    <div className="App" onLoad={loadCheck}>
      {prepare ? (
        <Spinner />
      ) : (
        <div className="prepare">
          <Header />
          <div className="container-wrap">
            <div className="container">
              <Suspense fallback={<Spinner />}>
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
              </Suspense>
            </div>
            {
              // 메인 페이지만 푸터 숨김
              location.pathname == "/" ? null : <Footer />
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
