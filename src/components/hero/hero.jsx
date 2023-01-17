import React, { Component } from "react";
import Slider from "react-slick";
import { Next, Prev } from "./Arrows";

import "./hero.css";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <Next />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <Prev />
    </div>
  );
}

const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1200,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings} className="carusel">
        <div className="slider__box">
          {/* <div className="container"> */}
            <p className="text__1-img">Face Makeup Brush</p>

            <span className="big__font">Skincare Brush Set</span>
            <span className="big__font">Sale 30% Off</span>

            <button className="button__shop">Shop now</button>
          {/* </div> */}
        </div>
        <div className="slider__box-one">
          {/* <div className="container"> */}
            <p className="text__1-img">Face Makeup Brush</p>

            <span className="big__font">Skincare Brush Set</span>
            <span className="big__font">Sale 60% Off</span>

            <button className="button__shop">Shop now</button>
          {/* </div> */}
        </div>
        <div className="slider__box-two">
          {/* <div className="container"> */}
            <p className="text__1-img">Face Makeup Brush</p>

            <span className="big__font">Skincare Brush Set</span>
            <span className="big__font">Sale 90% Off</span>

            <button className="button__shop">Shop now</button>
          {/* </div> */}
        </div>
      </Slider>
    </div>
  );
};

export default Carusel;
