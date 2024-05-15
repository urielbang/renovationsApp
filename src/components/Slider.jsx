import React from "react";

import img1 from "../assets/images/slidepic1.jpg";
import img2 from "../assets/images/sliderPic2jpg.jpg";
import img3 from "../assets/images/sliderPic3.jpg";
import Slider from "react-slick";

export default function Sliderr() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" srcset="" />
        </div>
        <div>
          <img src={img2} alt="" srcset="" />
        </div>
        <div>
          <img src={img3} alt="" srcset="" />
        </div>
      </Slider>
    </div>
  );
}
