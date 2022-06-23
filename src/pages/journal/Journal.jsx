/* eslint-disable */
import "./Journal.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Published from "./Published";

function Journal(props) {
  let [tab, setTab] = useState(false);

  function tabActive(e) {
    let tabMenu = document.querySelector(".journal .tab").childNodes;
    let clickTab = e.target;
    for (let i = 0; i < tabMenu.length; i++) {
      tabMenu[i].classList.remove("active");
    }
    clickTab.classList.add("active");
  }

  return (
    <div className="journal">
      <div className="tab" onClick={tabActive}>
        <button
          type="button"
          className="tab-link active"
          onClick={() => {
            props.navigate("./journal");
            setTab(false);
          }}
        >
          발행글
        </button>
        <button
          type="button"
          className="tab-link"
          onClick={() => {
            props.navigate("./journal/ebook");
            setTab(true);
          }}
        >
          시리즈북
        </button>
        <button
          type="button"
          className="tab-link"
          onClick={() => {
            props.navigate("./journal/illust");
            setTab(true);
          }}
        >
          일러스트
        </button>
      </div>
      <Outlet></Outlet>
      {tab !== true ? <Published post={props.post} /> : null}
    </div>
  );
}

export default Journal;
