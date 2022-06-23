/* eslint-disable */
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { SiInstagram, SiKakaotalk } from "react-icons/si";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3mrmwk9",
      "template_80lz6hv",
      form.current,
      "CdfTjNS4CJufDvPYU"
    );

    e.target.reset();
  };
  return (
    <div className="contact">
      <h3 className="title">
        안녕하세요. 더 궁금한 것이 있으시거나 문의할 것이 있으신 분은 아래의
        방법으로 연락부탁드립니다.
      </h3>
      <div className="contact-section">
        <div className="contact-method">
          <a href="mailto:zzzzych@naver.com" target="_blank" className="mail">
            <MdEmail />
            <p>Send a Mail</p>
          </a>
          <a
            href="https://open.kakao.com/me/zzzzych"
            target="_blank"
            className="kakao"
          >
            <SiKakaotalk />
            <p>Let's Talk</p>
          </a>
          <a
            href="https://www.instagram.com/zzzzych/?hl=ko"
            target="_blank"
            className="instagram"
          >
            <SiInstagram />
            {/* <h4>Instagram</h4> */}
            <p>Visit a Account</p>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="이름을 알려주세요."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="답장 받을 이메일을 알려주세요."
            required
          />
          <textarea
            name="message"
            id=""
            rows="10"
            placeholder="저에게 하실 말씀이 무엇인가요??"
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
