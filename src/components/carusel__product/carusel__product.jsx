import React, { useState } from "react";
import Slider from "react-slick";
import addtoCard from "../../redux/addto-card";
import { useDispatch } from "react-redux";
import { Next, Prev } from "../hero/Arrows";
import cardsImg from "../../assets/img/card-img-1.webp";
import cardsImg2 from "../../assets/img/card-img-2.webp";
import cardsImg3 from "../../assets/img/card-img-3.webp";
import cardsImg4 from "../../assets/img/card-img-4.webp";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Products } from "../../config/base";
import "./carusel__product.css";

export const SliderShop = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToScroll: 4,
    slidesToShow: 4,
  };

  const dispatch = useDispatch();

  return (
    <div className="shop__carusel">
      <Slider {...settings}>
        {Products.map((item) => (
          <div className="box__title-card">
            <span className="new__title">New</span>
            <img className="card__img-hover" src={cardsImg} />
            <div className="title__box-card">
              <div className="cards__product">{item.titlle}</div>
              <div className="others__title">
                <strong>{item.price}</strong>

                <button onClick={() => dispatch(addtoCard(item))} className="shop">
                  <AiOutlineShoppingCart
                    {...("add__tocard", { required: true })}
                    className="shop__button"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderShop;
