/* eslint-disable */
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SiGithub, SiCodepen, SiInstagram, SiKakaotalk } from "react-icons/si";
import { MdModeNight, MdLightMode } from "react-icons/md";

function Header() {
  let [mode, setMode] = useState(false);
  const Dark = () => {
    document.body.style.setProperty("--main-bg", "#121212");
    document.body.style.setProperty("--main-txt", "#fff");
    document.body.style.setProperty("--main-bg-two", "#333");
    document.body.style.setProperty("--main-bg-three", "#555");
    return (
      <span className="dark">
        <MdModeNight />
      </span>
    );
  };
  const Light = () => {
    document.body.style.setProperty("--main-bg", "#fff");
    document.body.style.setProperty("--main-txt", "#000");
    document.body.style.setProperty("--main-bg-two", "#dfdfdf");
    document.body.style.setProperty("--main-bg-three", "#eee");
    return (
      <span className="dark">
        <MdLightMode />
      </span>
    );
  };
  function mobileMenu() {
    let menuCont = document.querySelector(".header .menu");
    let btnMenu = document.querySelector(".header .btn-menu");
    if (btnMenu.classList.contains("open") == false) {
      menuCont.classList.remove("hidden");
      btnMenu.classList.remove("close");
      btnMenu.classList.add("open");
    } else {
      menuCont.classList.add("hidden");
      btnMenu.classList.remove("open");
      btnMenu.classList.add("close");
    }
  }

  function activeLinks(e) {
    let gnbLinks = document.querySelectorAll(".header .gnb .gnb-link");
    let clickGnb = e.target;
    let menuCont = document.querySelector(".header .menu");
    let btnMenu = document.querySelector(".header .btn-menu");
    if (clickGnb.classList.contains("gnb-link") == true) {
      for (let i = 0; i < gnbLinks.length; i++) {
        gnbLinks[i].classList.remove("active");
      }
      if (matchMedia("all and (max-width: 767px)").matches) {
        menuCont.classList.add("hidden");
        btnMenu.classList.remove("open");
        btnMenu.classList.add("close");
      }
      clickGnb.classList.add("active");
    } else {
      for (let i = 0; i < gnbLinks.length; i++) {
        gnbLinks[i].classList.remove("active");
      }
    }
  }
  return (
    <header className="header">
      <div className="top">
        <Link to="/" className="logo" onClick={activeLinks}>
          <h1>LJH</h1>
          <p>©zzzzych</p>
        </Link>
        <button className="btn-menu" type="button" onClick={mobileMenu}>
          <svg width="40" height="40">
            <line x1="10" y1="10" x2="30" y2="10" className="top-line" />
            <line x1="10" y1="20" x2="30" y2="20" className="middle-line" />
            <line x1="10" y1="30" x2="30" y2="30" className="bottom-line" />
          </svg>
        </button>
      </div>
      <div className="menu">
        <div className="gnb">
          <Link to="/about" className="gnb-link" onClick={activeLinks}>
            ABOUT
          </Link>
          <Link to="/projects" className="gnb-link" onClick={activeLinks}>
            PROJECTS
          </Link>
          <Link to="/journal" className="gnb-link" onClick={activeLinks}>
            JOURNAL
          </Link>
          <Link to="/contact" className="gnb-link" onClick={activeLinks}>
            CONTACT
          </Link>
        </div>
        <div className="sns">
          <a
            href="https://github.com/zzzzych"
            target="_blank"
            className="sns-link github"
          >
            <SiGithub />
          </a>
          <a
            href="https://stackblitz.com/@zzzzych"
            target={"_blank"}
            className="sns-link stackblitz"
          >
            <svg
              viewBox="0 0 28 28"
              aria-hidden="true"
              height="24"
              width="24"
              role="img"
              fill="#fff"
            >
              <path d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"></path>
            </svg>
          </a>
          {/* <a
            href="https://codepen.io/zzzzych"
            target="_blank"
            className="sns-link codepen"
          >
            <SiCodepen />
          </a> */}
          <a
            href="https://velog.io/@zzzzych"
            target="_blank"
            className="sns-link velog"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Velog</title>
              <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z" />
            </svg>
          </a>
        </div>
        <div
          className="system-mode"
          onClick={() => {
            setMode(!mode);
          }}
        >
          {/* 시스템 모드 - 다크, 라이트 */}
          {mode == true ? <Light /> : <Dark />}
        </div>
      </div>
    </header>
  );
}

export default Header;
