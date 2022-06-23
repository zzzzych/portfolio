import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  fade: true,
  arrows: false,
};
let Styledslider = styled(Slider)`
  .slick-slider {
  }
  .slick-list {
  }
`;

let Styledimg = styled.img`
  width: 100%;
`;

function Slide() {
  return (
    <>
      <Styledslider {...settings}>
        <div>
          <Styledimg src={require("../assets/main/a4.png")} alt="" />
        </div>
        <div>
          <Styledimg src={require("../assets/main/a6.png")} alt="" />
        </div>
      </Styledslider>
    </>
  );
}

export default Slide;
