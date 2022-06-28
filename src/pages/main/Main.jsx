/* eslint-disable */
import "./Main.css";
import Slide from "../../components/Slide";
function Main() {
  return (
    <div className="main">
      <Slide />
      <h2 className="title">
        제가 좋아하는 일러스트 작가 티보에렘의 작품입니다.{" "}
        <span className="ps">
          (저작권 문제로 인해 온전한 작품의 이미지 첨부는 하지 못했습니다.)
        </span>
        <a href="https://www.thibaudherem.com" target="_blank">
          &#8903; 티보에렘 작품 구경가기 &#8903;
        </a>
      </h2>
      <div>
        <p>
          보시는 것처럼 뛰어난 <strong>섬세함</strong>이 작가의 특징입니다.
          <span style={{ textDecoration: "underline" }}>
            저 역시 모든 일에 섬세함을 추구합니다.
          </span>
        </p>
        <p>포트폴리오 사이트도 마찬가지로 최대한 심혈을 기울여 제작했습니다.</p>
        <p>
          부족한 부분이 많이 보일텐데, 개선사항이나 요청사항은 메일을 통해 문의
          주시면 감사하겠습니다.
        </p>
      </div>
    </div>
  );
}

export default Main;
