import "./About.css";
import { useState } from "react";
import qnadata from "../../datajs/qna";
import favorite from "../../datajs/favorite";
import subscribeCnl from "../../datajs/subscribe";
import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiJquery,
  SiCss3,
  SiHtml5,
  SiYoutube,
  SiSass,
} from "react-icons/si";
/* eslint-disable */
function About() {
  let [data] = useState(qnadata);
  let book = ["마이크로카피", "오늘부터 개발자"];

  const faqAnswer = (e) => {
    let answerHeight;
    let clickQuestion = e.target;
    if (clickQuestion.tagName == "H4") {
      let answerEle = clickQuestion.nextSibling;
      if (answerEle.clientHeight == 0) {
        answerHeight = answerEle.scrollHeight;
        answerEle.style.height = `${answerHeight}px`;
      } else {
        answerEle.style.height = 0;
      }
    } else if (clickQuestion.tagName == "STRONG") {
      let answerChild = clickQuestion.parentNode.nextSibling;
      if (answerChild.clientHeight == 0) {
        answerHeight = answerChild.scrollHeight;
        answerChild.style.height = `${answerHeight}px`;
      } else {
        answerChild.style.height = 0;
      }
    } else {
      return false;
    }
  };

  return (
    <div className="about">
      <div className="faq">
        <h3 className="title">
          궁금해할 것 같은 질문 몇 가지를 미리 준비했어요!
        </h3>
        <div className="faq-lists" onClick={faqAnswer}>
          {data.map(function (ques, i) {
            return (
              <div className="faq-item" key={i}>
                <h4 className="question">
                  <strong>Q.</strong> {data[i].question}
                </h4>
                <div className="answer-wrap">
                  <h5 className="answer">
                    <strong>A.</strong> {data[i].answer}
                  </h5>
                  <p className="content">{data[i].description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="keyword">
        <h3 className="title">키워드로 보는 나</h3>
        <div className="language">
          <h4 className="title">
            &#128187;
            <span className="sub-title">사용 가능 언어</span>
          </h4>
          <ul className="list">
            <li className="list-item">
              <div className="d-flex">
                <SiHtml5 style={{ color: "#e34f26" }} />
                <span className="txt" style={{ color: "#e34f26" }}>
                  HTML5
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="d-flex">
                <SiCss3 style={{ color: "#1572b6" }} />
                <span className="txt" style={{ color: "#1572b6" }}>
                  CSS3
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="d-flex">
                <SiJquery style={{ color: "#0769AD" }} />
                <span className="txt" style={{ color: "#0769AD" }}>
                  jQuery
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="d-flex">
                <SiJavascript style={{ color: "#f7df1e" }} />
                <span className="txt" style={{ color: "#f7df1e" }}>
                  Javascript
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="d-flex">
                <SiSass style={{ color: "#CC6699" }} />
                <span className="txt" style={{ color: "#CC6699" }}>
                  SASS
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="d-flex">
                <SiBootstrap style={{ color: "#7952B3" }} />
                <span className="txt" style={{ color: "#7952B3" }}>
                  Bootstrap
                </span>
              </div>
            </li>
            <li className="list-item">
              <div className="d-flex">
                <SiReact style={{ color: "#61dafb" }} />
                <span className="txt" style={{ color: "#61dafb" }}>
                  React
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="study">
          <h4 className="title">
            &#128293;
            <span className="sub-title">최근 배운 언어</span>
          </h4>
          <ul className="list">
            <li className="list-item">
              <div className="d-flex">
                <SiReact style={{ color: "#61dafb" }} />
                <span className="txt" style={{ color: "#61dafb" }}>
                  React
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="favorite">
          <h4 className="title">
            &#129311;<span className="sub-title">좋아하는 거</span>
          </h4>
          <ul className="list">
            {favorite.map(function (favo, i) {
              return (
                <li className="list-item" key={i}>
                  <div className="d-flex">
                    {favorite[i].emoji}
                    <span className="txt">{favorite[i].name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="y-subscribe">
          <h4 className="title">
            <div className="d-flex">
              <SiYoutube style={{ color: "#ff0000" }} />
              <span className="sub-title">구독중인 채널</span>
            </div>
          </h4>
          <ul className="list">
            {subscribeCnl.map(function (subsc, i) {
              return (
                <li className="list-item" key={i}>
                  <div className="d-flex">
                    {subscribeCnl[i].emoji}
                    <span className="txt">{subscribeCnl[i].name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="reading-book">
          <h4 className="title">
            &#128218;
            <span className="sub-title">최근 읽고 있는 책</span>
          </h4>
          <ul className="list">
            {book.map(function (readbook, i) {
              return (
                <li className="list-item" key={i}>
                  <div className="d-flex">
                    &#128212;
                    <span className="txt">{book[i]}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
