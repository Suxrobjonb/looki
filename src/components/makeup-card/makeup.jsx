import React from "react";
import Mackup1 from "../../assets/img/mackup-img-1.webp";
import Mackup2 from "../../assets/img/mackup-img-2.webp";
import Mackup3 from "../../assets/img/mackup-img-3.webp";

function Makeup() {
  return (
    <div className="make__product-box">
      <div className="container">
        <div className="cards__box">
          <div className="cards__img-box">
            <img className="cards__img makup" src={Mackup3} alt="" />
          </div>
          <div className="cards__img-box">
            <img className="cards__img makup" src={Mackup2} alt="" />
          </div>
          <div className="cards__img-box">
            <img className="cards__img-big makup-big" src={Mackup1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Makeup;
