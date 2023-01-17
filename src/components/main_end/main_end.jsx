import React, { Component } from "react";
import Slider from "react-slick";
import cosmetik1 from "../../assets/img/cosmetic-carusel-1.webp";
import cosmetik2 from "../../assets/img/cosmetic-carusel-2.webp";
import "./main_end.css";

export const MainBottom = () => {
  var settings = {
    dots: false,
    infinite: false ,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
  };
  return (
    <div className="main__bottom">
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={cosmetik1} />
          </div>
          <div>
            <img src={cosmetik2} />
          </div>
          <div>
            <img src={cosmetik1} />
          </div>
          <div>
            <img src={cosmetik2} />
          </div>
          <div>
            <img src={cosmetik1} />
          </div>
          <div>
            <img src={cosmetik2} />
          </div>
          <div>
            <img src={cosmetik1} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MainBottom;
